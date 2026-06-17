(() => {
  const menuRef = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const body = document.body;

  if (!menuRef || !openMenuBtn || !closeMenuBtn) return;

  const openMenu = () => {
    menuRef.classList.add('is-open');
    body.classList.add('is-menu-open');
    openMenuBtn.setAttribute('aria-expanded', 'true'); // ← доступность
  };

  const closeMenu = () => {
    menuRef.classList.remove('is-open');
    body.classList.remove('is-menu-open');
    openMenuBtn.setAttribute('aria-expanded', 'false'); // ← доступность
  };

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  // Закрытие по клику на ссылку в меню
  menuRef.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Закрытие по Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();