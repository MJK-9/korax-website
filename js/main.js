  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

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
        btn.style.background = '#16a34a';
      } else {
        btn.disabled = false;
        btn.textContent = 'Send Message →';
      }
    } catch {
      btn.disabled = false;
      btn.textContent = 'Send Message →';
    }
  });
