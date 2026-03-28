/**
 * Accessible Lightbox Gallery
 */
(function () {
  'use strict';

  var galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length === 0) return;

  var overlay = null;
  var currentIndex = 0;
  var lastFocusedElement = null;

  // Build lightbox DOM
  function createLightbox() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Powiększone zdjęcie');
    overlay.setAttribute('hidden', '');

    overlay.innerHTML =
      '<div class="lightbox-content">' +
        '<button class="lightbox-close" aria-label="Zamknij galerię">&times;</button>' +
        '<button class="lightbox-prev" aria-label="Poprzednie zdjęcie">&#8249;</button>' +
        '<div class="lightbox-img-wrap">' +
          '<img class="lightbox-img" src="" alt="" />' +
        '</div>' +
        '<button class="lightbox-next" aria-label="Następne zdjęcie">&#8250;</button>' +
        '<div class="lightbox-counter" aria-live="polite" role="status"></div>' +
      '</div>';

    document.body.appendChild(overlay);

    overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    overlay.querySelector('.lightbox-prev').addEventListener('click', showPrev);
    overlay.querySelector('.lightbox-next').addEventListener('click', showNext);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });
  }

  function openLightbox(index) {
    if (!overlay) createLightbox();
    lastFocusedElement = document.activeElement;
    currentIndex = index;
    updateImage();
    overlay.removeAttribute('hidden');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    overlay.querySelector('.lightbox-close').focus();
    document.addEventListener('keydown', handleLightboxKeys);
  }

  function closeLightbox() {
    overlay.setAttribute('hidden', '');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleLightboxKeys);
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function updateImage() {
    var item = galleryItems[currentIndex];
    var img = overlay.querySelector('.lightbox-img');
    var fullSrc = item.getAttribute('data-full') || item.querySelector('img').src;
    var altText = item.querySelector('img').alt;
    img.src = fullSrc;
    img.alt = altText;
    overlay.querySelector('.lightbox-counter').textContent =
      'Zdjęcie ' + (currentIndex + 1) + ' z ' + galleryItems.length;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateImage();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateImage();
  }

  function handleLightboxKeys(e) {
    if (e.key === 'Escape') {
      closeLightbox();
      return;
    }
    if (e.key === 'ArrowLeft') {
      showPrev();
      return;
    }
    if (e.key === 'ArrowRight') {
      showNext();
      return;
    }

    // Focus trap
    if (e.key === 'Tab') {
      var focusable = overlay.querySelectorAll('button:not([hidden])');
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }

  // Attach click/keyboard handlers to gallery items
  galleryItems.forEach(function (item, index) {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'Powiększ: ' + (item.querySelector('img') ? item.querySelector('img').alt : 'zdjęcie'));

    item.addEventListener('click', function () {
      openLightbox(index);
    });

    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

})();
