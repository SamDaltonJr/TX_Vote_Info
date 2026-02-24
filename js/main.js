/* ============================================
   PCA DEMS - Main JavaScript
   Handles all interactive behavior
   ============================================ */

(function() {
  'use strict';

  /* --- Alert Bar Dismiss --- */
  function initAlertBar() {
    var alertBar = document.getElementById('alertBar');
    if (!alertBar) return;

    var alertId = alertBar.getAttribute('data-alert-id') || 'default';
    var storageKey = 'txvoteinfo-alert-dismissed-' + alertId;

    // Check if previously dismissed
    if (localStorage.getItem(storageKey) === 'true') {
      alertBar.classList.add('is-hidden');
      return;
    }

    var closeBtn = alertBar.querySelector('.alert-bar__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        alertBar.classList.add('is-hidden');
        localStorage.setItem(storageKey, 'true');
      });
    }
  }

  /* --- Mobile Navigation --- */
  function initMobileNav() {
    var hamburger = document.getElementById('hamburgerBtn');
    var mobileNav = document.getElementById('mobileNav');
    var overlay = document.getElementById('mobileNavOverlay');
    var closeBtn = document.getElementById('mobileNavClose');

    if (!hamburger || !mobileNav) return;

    function openNav() {
      mobileNav.classList.add('is-open');
      if (overlay) overlay.classList.add('is-visible');
      document.body.classList.add('nav-open');
    }

    function closeNav() {
      mobileNav.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-visible');
      document.body.classList.remove('nav-open');
    }

    hamburger.addEventListener('click', openNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    if (overlay) overlay.addEventListener('click', closeNav);

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeNav();
      }
    });
  }

  /* --- Sticky Header --- */
  function initStickyHeader() {
    var header = document.getElementById('siteHeader');
    if (!header) return;

    var scrollThreshold = 10;

    function onScroll() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check initial state
  }

  /* --- Active Nav Highlighting --- */
  function initActiveNav() {
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop nav
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('is-active');
      }
    });

    // Mobile nav
    var mobileLinks = document.querySelectorAll('.mobile-nav__link');
    mobileLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('is-active');
      }
    });
  }

  /* --- Smooth Scroll for Anchor Links --- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href').slice(1);
        if (!targetId) return;

        var target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          var headerHeight = document.getElementById('siteHeader')
            ? document.getElementById('siteHeader').offsetHeight
            : 0;
          var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  /* --- Newsletter Form Mock --- */
  function initNewsletterForms() {
    var forms = document.querySelectorAll('[data-newsletter-form]');
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var input = form.querySelector('input[type="email"]');
        if (!input || !input.value) return;

        // Simple validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          input.style.borderColor = 'var(--color-accent-red)';
          return;
        }

        // Show success message
        var success = form.parentElement.querySelector('.signup__success');
        if (success) {
          form.style.display = 'none';
          success.classList.add('is-visible');
        } else {
          input.value = '';
          input.placeholder = 'Thanks for subscribing!';
          input.disabled = true;
          var btn = form.querySelector('button');
          if (btn) {
            btn.textContent = '\u2713';
            btn.disabled = true;
          }
        }
      });
    });

    // Also handle footer signup forms
    var footerForms = document.querySelectorAll('.footer__signup');
    footerForms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var input = form.querySelector('input[type="email"]');
        if (!input || !input.value) return;

        input.value = '';
        input.placeholder = 'Subscribed!';
        input.disabled = true;
        var btn = form.querySelector('button');
        if (btn) {
          btn.textContent = '\u2713';
          btn.disabled = true;
        }
      });
    });
  }

  /* --- Lazy Loading Images --- */
  function initLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    var lazyImages = document.querySelectorAll('img[data-src]');
    if (!lazyImages.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px'
    });

    lazyImages.forEach(function(img) {
      observer.observe(img);
    });
  }

  /* --- Dynamic Alert Bar Based on Current Date --- */
  function initDynamicAlert() {
    var alertBar = document.getElementById('alertBar');
    if (!alertBar) return;

    var textEl = alertBar.querySelector('.alert-bar__text');
    if (!textEl) return;

    // Key dates
    var earlyVotingStart = new Date(2026, 1, 17); // Feb 17
    var earlyVotingEnd   = new Date(2026, 1, 27); // Feb 27
    var electionDay      = new Date(2026, 2, 3);  // March 3
    var runoffDay        = new Date(2026, 4, 26); // May 26

    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var phase;
    var message;

    if (today < earlyVotingStart) {
      phase = 'pre-early';
      message = '<strong>Texas Primary: March 3, 2026</strong> &mdash; Early voting starts Feb 17!';
    } else if (today <= earlyVotingEnd) {
      phase = 'early-voting';
      message = '<strong>Texas Primary: March 3, 2026</strong> &mdash; Early voting is underway through Feb 27!';
    } else if (today < electionDay) {
      phase = 'pre-eday';
      message = '<strong>Texas Primary: March 3, 2026</strong> &mdash; Election Day is March 3 &mdash; find your polling place!';
    } else if (today.getTime() === electionDay.getTime()) {
      phase = 'election-day';
      message = '<strong>Election Day is TODAY!</strong> Polls are open 7:00 AM &ndash; 7:00 PM. Go vote!';
    } else if (today < runoffDay) {
      phase = 'pre-runoff';
      message = '<strong>Runoff Elections: May 26, 2026</strong> &mdash; Check if your races have a runoff!';
    } else if (today.getTime() === runoffDay.getTime()) {
      phase = 'runoff-day';
      message = '<strong>Runoff Election Day is TODAY!</strong> Polls are open 7:00 AM &ndash; 7:00 PM.';
    } else {
      // After runoff — hide alert
      alertBar.classList.add('is-hidden');
      return;
    }

    textEl.innerHTML = message;

    // Update alert ID so dismiss resets when phase changes
    var phaseAlertId = 'primary-2026-' + phase;
    alertBar.setAttribute('data-alert-id', phaseAlertId);

    // Re-check dismissal with phase-specific key
    var storageKey = 'txvoteinfo-alert-dismissed-' + phaseAlertId;
    if (localStorage.getItem(storageKey) === 'true') {
      alertBar.classList.add('is-hidden');
    } else {
      alertBar.classList.remove('is-hidden');
    }

    // Re-bind close button with correct key
    var closeBtn = alertBar.querySelector('.alert-bar__close');
    if (closeBtn) {
      var newClose = closeBtn.cloneNode(true);
      closeBtn.parentNode.replaceChild(newClose, closeBtn);
      newClose.addEventListener('click', function() {
        alertBar.classList.add('is-hidden');
        localStorage.setItem(storageKey, 'true');
      });
    }
  }

  /* --- Live Date Tracking for Voting Period Cards --- */
  function initDateCards() {
    var cards = document.querySelectorAll('[data-date-card]');
    if (!cards.length) return;

    // Key dates for the March 3, 2026 Texas Primary
    var earlyVotingStart = new Date(2026, 1, 17); // Feb 17
    var earlyVotingEnd   = new Date(2026, 1, 27); // Feb 27 (last day)
    var mailDeadline     = new Date(2026, 1, 20); // Feb 20
    var electionDay      = new Date(2026, 2, 3);  // March 3

    // Get today at midnight for clean date comparison
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Days until a date (negative = days ago)
    function daysUntil(target) {
      return Math.round((target - today) / (1000 * 60 * 60 * 24));
    }

    cards.forEach(function(card) {
      var type = card.getAttribute('data-date-card');
      var statusEl = card.querySelector('.vote-date-card__status');

      if (type === 'early-voting') {
        var daysToStart = daysUntil(earlyVotingStart);
        var daysToEnd = daysUntil(earlyVotingEnd);

        if (daysToStart > 1) {
          // Before early voting
          statusEl.textContent = 'STARTS IN ' + daysToStart + ' DAYS';
          card.classList.add('vote-date-card--upcoming');
        } else if (daysToStart === 1) {
          statusEl.textContent = 'STARTS TOMORROW';
          card.classList.add('vote-date-card--upcoming');
        } else if (daysToStart <= 0 && daysToEnd >= 0) {
          // During early voting
          statusEl.textContent = 'HAPPENING NOW';
          card.classList.add('vote-date-card--active');
        } else {
          // After early voting
          statusEl.textContent = 'ENDED';
          card.classList.add('vote-date-card--past');
        }
      }

      if (type === 'mail-ballot') {
        var daysToMail = daysUntil(mailDeadline);

        if (daysToMail > 1) {
          statusEl.textContent = daysToMail + ' DAYS LEFT';
          card.classList.add('vote-date-card--upcoming');
        } else if (daysToMail === 1) {
          statusEl.textContent = 'DEADLINE TOMORROW';
          card.classList.add('vote-date-card--active');
        } else if (daysToMail === 0) {
          statusEl.textContent = 'DEADLINE TODAY';
          card.classList.add('vote-date-card--active');
        } else {
          statusEl.textContent = 'DEADLINE PASSED';
          card.classList.add('vote-date-card--past');
        }
      }

      if (type === 'election-day') {
        var daysToElection = daysUntil(electionDay);

        if (daysToElection > 1) {
          statusEl.textContent = daysToElection + ' DAYS AWAY';
        } else if (daysToElection === 1) {
          statusEl.textContent = 'TOMORROW';
          card.classList.add('vote-date-card--upcoming');
        } else if (daysToElection === 0) {
          statusEl.textContent = 'TODAY \u2014 GO VOTE!';
          card.classList.add('vote-date-card--active');
        } else {
          statusEl.textContent = 'COMPLETE';
          card.classList.add('vote-date-card--past');
        }
      }
    });
  }

  /* --- Initialize Everything --- */
  document.addEventListener('DOMContentLoaded', function() {
    initDynamicAlert();
    initMobileNav();
    initStickyHeader();
    initActiveNav();
    initSmoothScroll();
    initNewsletterForms();
    initLazyLoading();
    initDateCards();
  });

})();
