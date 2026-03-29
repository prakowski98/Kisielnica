/**
 * Accessible Contact Form Validation
 * WCAG 2.2 AA compliant: labels, aria-describedby, aria-invalid, role="alert", aria-live
 */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var fields = [
    {
      input: document.getElementById('form-name'),
      error: document.getElementById('form-name-error'),
      validate: function (val) { return val.trim().length >= 2; }
    },
    {
      input: document.getElementById('form-email'),
      error: document.getElementById('form-email-error'),
      validate: function (val) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()); }
    },
    {
      input: document.getElementById('form-subject'),
      error: document.getElementById('form-subject-error'),
      validate: function (val) { return val.trim() !== ''; }
    },
    {
      input: document.getElementById('form-message'),
      error: document.getElementById('form-message-error'),
      validate: function (val) { return val.trim().length >= 10; }
    }
  ];

  function showError(field) {
    field.input.setAttribute('aria-invalid', 'true');
    field.error.classList.add('is-visible');
  }

  function clearError(field) {
    field.input.removeAttribute('aria-invalid');
    field.error.classList.remove('is-visible');
  }

  // Real-time validation on blur
  fields.forEach(function (field) {
    field.input.addEventListener('blur', function () {
      if (field.input.value !== '' || field.input.getAttribute('aria-invalid') === 'true') {
        if (field.validate(field.input.value)) {
          clearError(field);
        } else {
          showError(field);
        }
      }
    });

    // Clear error when user starts typing
    field.input.addEventListener('input', function () {
      if (field.input.getAttribute('aria-invalid') === 'true') {
        if (field.validate(field.input.value)) {
          clearError(field);
        }
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var hasErrors = false;
    var firstInvalid = null;

    fields.forEach(function (field) {
      if (!field.validate(field.input.value)) {
        showError(field);
        hasErrors = true;
        if (!firstInvalid) {
          firstInvalid = field.input;
        }
      } else {
        clearError(field);
      }
    });

    if (hasErrors) {
      firstInvalid.focus();
      return;
    }

    // Simulate form submission (static site — no backend)
    var statusEl = document.getElementById('form-status');
    statusEl.removeAttribute('hidden');
    statusEl.className = 'form-status form-status--success';
    statusEl.textContent = 'Dziękujemy! Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.';

    form.reset();
    fields.forEach(function (field) {
      clearError(field);
    });
  });
})();
