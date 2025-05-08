function initializeCardButtons() {
  let cards = document.querySelectorAll('.card');

  // Create lightbox container
  let lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  document.body.appendChild(lightbox);

  cards.forEach(function(card) {
    let favoriteButton = card.querySelector('.favorite');
    let lightboxButton = card.querySelector('.lightbox');
    let infoButton = card.querySelector('.info');
    let shareButton = card.querySelector('.share');
    let infoPanel = card.querySelector('.info-panel');

    favoriteButton.addEventListener('click', function() {
      favoriteButton.classList.toggle('favorited');
    });

    lightboxButton.addEventListener('click', function() {
      let imageUrl = card.querySelector('img').src;
      let title = card.getAttribute('data-title');
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close material-symbols-outlined">close</button>
          <img src="${imageUrl}" alt="${title}">
          <h3>${title}</h3>
        </div>
      `;
      lightbox.classList.add('active');
      
      // Close lightbox
      let closeButton = lightbox.querySelector('.lightbox-close');
      closeButton.addEventListener('click', function() {
        lightbox.classList.remove('active');
      });
      
      // Close on click outside content
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          lightbox.classList.remove('active');
        }
      });
    });

    infoButton.addEventListener('click', function(event) {
      event.stopPropagation();
      let isActive = infoPanel.classList.contains('active');
      infoPanel.classList.toggle('active');
      infoButton.innerText = isActive ? 'info' : 'close';
    });
  });

  document.addEventListener('click', function(event) {
    let openPanels = document.querySelectorAll('.info-panel.active');
    openPanels.forEach(function(panel) {
      if (!panel.closest('.card').contains(event.target)) {
        panel.classList.remove('active');
        let infoButton = panel.closest('.card').querySelector('.info');
        if (infoButton) {
          infoButton.innerText = 'info';
        }
      }
    });
  });
}

initializeCardButtons();