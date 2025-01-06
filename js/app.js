function initMobileMenu() {
  const bodyElement = document.body;
  const burgerBtn = document.querySelector('.js-nav-toggle');
  const mobileMenuLinks = document.querySelectorAll('.nav-link');

  const toggleMobileMenu = () => {
    bodyElement.classList.toggle('mobile-menu-active');
  };

  burgerBtn?.addEventListener('click', toggleMobileMenu);

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });
}

initMobileMenu();
