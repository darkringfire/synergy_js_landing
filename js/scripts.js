document.addEventListener('DOMContentLoaded', function() {
  const navInit = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }

  navInit();
  window.addEventListener('scroll', navInit);
  window.addEventListener('resize', navInit);
});