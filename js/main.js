  const GA_MEASUREMENT_ID = 'G-VLLV9VKGM9';
  let gaLoaded = false;

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

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Stagger children
  document.querySelectorAll('.services-grid, .steps, .why-grid').forEach(grid => {
    [...grid.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
    });
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

  function loadGoogleAnalytics() {
    if (gaLoaded) return;
    gaLoaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }

  window.addEventListener('load', loadGoogleAnalytics, { once: true });
