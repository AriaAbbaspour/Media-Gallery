function addToggleEventListenerToMoreButtons() {
  const moreButtons = document.querySelectorAll('.more');

  moreButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.stopPropagation();

      const footer = button.closest('footer');

      if (footer) {
        if (footer.classList.contains('opened')) {
          footer.classList.remove('opened');
          button.innerText = 'expand_circle_down'; // Change inner text
        } else {
          footer.classList.add('opened');
          button.innerText = 'expand_circle_up'; // Change inner text
        }
      }
    });
  });

  document.addEventListener('click', function(event) {
    const openFooters = document.querySelectorAll('footer.opened');

    openFooters.forEach(function(footer) {
      if (!footer.contains(event.target)) {
        footer.classList.remove('opened');
        const button = footer.querySelector('.more');
        if (button) {
          button.innerText = 'expand_circle_down'; // Change inner text
        }
      }
    });
  });
}

addToggleEventListenerToMoreButtons();
