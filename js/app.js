document.addEventListener('DOMContentLoaded', () => {

    const bodyElement = document.body;
    const burgerBtn = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  
    const toggleMobileMenu = () => {
        bodyElement.classList.toggle('mobile-menu-active');
    };

    if (burgerBtn) { // Check if the hamburger icon exists
      burgerBtn.addEventListener('click', toggleMobileMenu);
    }

    if (closeBtn) { // Check if the close button exists
        closeBtn.addEventListener('click', toggleMobileMenu);
    }

    for(var i = 0; i<mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].addEventListener('click', toggleMobileMenu);
    }

});