(() => {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.header__nav-link, .mobile-menu__link');

  if (!sections.length || !navLinks.length) return;

  const setActiveLink = (id) => {
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-40% 0px -40% 0px', // секция считается «активной» когда она в центральной части экрана
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));
})();