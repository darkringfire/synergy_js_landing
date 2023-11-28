document.addEventListener('DOMContentLoaded', function() {
  const navInit = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }

    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const sectionOffset = 150;
      if (window.scrollY >= section.offsetTop - sectionOffset) {
        // console.log(window.scrollY + ' >= ' + section.offsetTop + ' #' + section.id);
        links.forEach((link) => {
          link.classList.remove('active');
          if (link.hash === '#' + section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  const animItems = document.querySelectorAll('.animate');
  function onEntry(params) {
    animItems.forEach((item) => {
      const itemHeight = item.offsetHeight;
      const itemOffset = item.offsetTop;
      const startPos = 2;

      const clientHeight = document.documentElement.clientHeight;
      const animPoint = clientHeight - Math.min(itemHeight, clientHeight) / startPos;

      const scrollY = window.scrollY;

      if (scrollY > itemOffset - animPoint && scrollY < itemOffset + itemHeight) {
        item.classList.add('show');
      } else {
        if (!item.classList.contains('no-hide')) {
          item.classList.remove('show');
        }
      }
    });
  }
  // function onEntry(entry) {
  //   entry.forEach((item) => {
  //     if (item.isIntersecting) {
  //       item.target.classList.add('show');
  //     } else {
  //       if (!item.target.classList.contains('no-hide')) {
  //         item.target.classList.remove('show');
  //       }
  //     }
  //   });
  // }
  // let options = { threshold: 0.5 };
  // let observer = new IntersectionObserver(onEntry, options);
  // animItems.forEach((item) => {
  //   observer.observe(item);
  // });

  navInit();
  onEntry();
  window.addEventListener('scroll', () => {
    navInit();
    onEntry();
  });
  window.addEventListener('resize', () => {
    navInit();
  });
});