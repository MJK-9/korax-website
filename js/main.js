  const GA_MEASUREMENT_ID = 'G-VLLV9VKGM9';
  const CONSENT_STORAGE_KEY = 'korax_cookie_consent';
  const CONSENT_ACCEPTED = 'accepted';
  const CONSENT_REJECTED = 'rejected';
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

  if (navToggle && navLinks) {
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
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('.services-grid, .steps, .why-grid').forEach(grid => {
    [...grid.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
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
          trackLeadEvent();
        } else {
          btn.disabled = false;
          btn.textContent = 'Send Message →';
        }
      } catch {
        btn.disabled = false;
        btn.textContent = 'Send Message →';
      }
    });
  }

  const yearEl = document.querySelector('.footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function getStoredConsent() {
    try {
      return localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStoredConsent(value) {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, value);
      return true;
    } catch {
      return false;
    }
  }

  function trackLeadEvent() {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'generate_lead', { form_name: 'contact' });
  }

  function loadGoogleAnalytics() {
    if (gaLoaded) return;
    gaLoaded = true;
    try {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.onerror = () => { gaLoaded = false; };
      document.head.appendChild(script);
    } catch {
      gaLoaded = false;
    }
  }

  function dismissCookieBanner(banner) {
    banner.hidden = true;
    document.body.classList.remove('cookie-banner-open');
  }

  function handleConsentChoice(banner, choice) {
    setStoredConsent(choice);
    dismissCookieBanner(banner);
    if (choice === CONSENT_ACCEPTED) loadGoogleAnalytics();
  }

  function bindCookieBannerActions(banner) {
    const acceptBtn = banner.querySelector('[data-consent="accept"]');
    const rejectBtn = banner.querySelector('[data-consent="reject"]');
    acceptBtn.addEventListener('click', () => handleConsentChoice(banner, CONSENT_ACCEPTED));
    rejectBtn.addEventListener('click', () => handleConsentChoice(banner, CONSENT_REJECTED));
  }

  function buildCookieBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookie-banner-title');
    banner.setAttribute('aria-describedby', 'cookie-banner-desc');
    banner.setAttribute('aria-modal', 'false');
    banner.innerHTML = `
      <div class="cookie-banner-inner">
        <div class="cookie-banner-text">
          <p id="cookie-banner-title" class="cookie-banner-title">Cookies on this site</p>
          <p id="cookie-banner-desc" class="cookie-banner-desc">We use optional analytics cookies to understand how visitors use our site. You can accept or reject them. See our <a href="privacy-policy.html">Privacy Policy</a>.</p>
        </div>
        <div class="cookie-banner-actions">
          <button type="button" class="cookie-btn cookie-btn--reject" data-consent="reject">Reject</button>
          <button type="button" class="cookie-btn cookie-btn--accept" data-consent="accept">Accept</button>
        </div>
      </div>`;
    bindCookieBannerActions(banner);
    return banner;
  }

  function showCookieBanner() {
    const banner = buildCookieBanner();
    document.body.appendChild(banner);
    document.body.classList.add('cookie-banner-open');
    banner.hidden = false;
    banner.querySelector('.cookie-btn--accept').focus();
  }

  function initCookieConsent() {
    const stored = getStoredConsent();
    if (stored === CONSENT_ACCEPTED) {
      loadGoogleAnalytics();
      return;
    }
    if (stored === CONSENT_REJECTED) return;
    showCookieBanner();
  }

  initCookieConsent();
