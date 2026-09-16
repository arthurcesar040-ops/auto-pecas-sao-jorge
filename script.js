(() => {
  const menuButton = document.querySelector('.menu-button');
  const mainNav = document.querySelector('.main-nav');

  if (menuButton && mainNav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      mainNav.classList.toggle('is-open', !isOpen);
    });

    mainNav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 58rem)').matches) closeMenu();
    });
  }

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const facadeImage = document.querySelector('.hero-image img');
  if (facadeImage) {
    facadeImage.addEventListener('error', () => {
      facadeImage.closest('.hero-image')?.classList.add('is-placeholder');
    });
  }
})();
