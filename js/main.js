  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  function syncNavAria() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      navLinks.setAttribute('aria-hidden', 'false');
    } else if (!navLinks.classList.contains('open')) {
      navLinks.setAttribute('aria-hidden', 'true');
    }
  }

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    const isOpen = navToggle.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navLinks.setAttribute('aria-hidden', !isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
    });
  });

  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && !e.target.closest('nav')) {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
    }
  });

  window.addEventListener('resize', syncNavAria);
  syncNavAria();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Stagger children
  document.querySelectorAll('.services-grid, .steps, .why-grid, .pricing-grid').forEach(grid => {
    [...grid.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  function closeFaqItem(item) {
    const summary = item.querySelector('.faq-summary');
    const answer = item.querySelector('.faq-answer');
    item.classList.remove('active');
    summary.setAttribute('aria-expanded', 'false');
    if (reducedMotion) {
      answer.hidden = true;
      answer.style.maxHeight = '';
      return;
    }
    answer.style.maxHeight = '0';
    answer.addEventListener('transitionend', () => {
      if (!item.classList.contains('active')) answer.hidden = true;
    }, { once: true });
  }

  function openFaqItem(item) {
    const summary = item.querySelector('.faq-summary');
    const answer = item.querySelector('.faq-answer');
    item.classList.add('active');
    summary.setAttribute('aria-expanded', 'true');
    answer.hidden = false;
    answer.style.maxHeight = reducedMotion ? '' : `${answer.scrollHeight}px`;
  }

  function toggleFaqItem(item, allItems) {
    const isActive = item.classList.contains('active');
    allItems.forEach(closeFaqItem);
    if (!isActive) openFaqItem(item);
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.querySelector('.faq-summary').addEventListener('click', () => {
      toggleFaqItem(item, faqItems);
    });
  });

  const pricingCards = document.querySelectorAll('.pricing-card');
  const pricingOpenEnded = document.querySelector('.pricing-open-ended');

  function highlightPricingTier(budgetValue) {
    pricingCards.forEach(card => card.classList.remove('pricing-card--highlight'));
    pricingOpenEnded?.classList.remove('pricing-open-ended--highlight');
    if (!budgetValue || budgetValue === 'not-sure') return;
    if (budgetValue === 'over-5000') {
      pricingOpenEnded?.classList.add('pricing-open-ended--highlight');
      return;
    }
    pricingCards.forEach(card => {
      const tiers = (card.dataset.tier || '').split(' ');
      if (tiers.includes(budgetValue)) card.classList.add('pricing-card--highlight');
    });
  }

  document.querySelectorAll('input[name="budget"]').forEach(radio => {
    radio.addEventListener('change', () => highlightPricingTier(radio.value));
  });

  // Formspree form submission
  document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const btn = form.querySelector('.submit-btn');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        btn.textContent = '✓ Message Sent';
        btn.classList.add('submit-btn--success');
      } else {
        btn.disabled = false;
        btn.textContent = 'Send Message →';
      }
    } catch {
      btn.disabled = false;
      btn.textContent = 'Send Message →';
    }
  });

  const yearEl = document.querySelector('.footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
