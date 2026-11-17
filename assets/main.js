(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu';
    }));
  }
  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-category]');
  filters.forEach(filter => filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    filters.forEach(item => {
      item.classList.toggle('active', item === filter);
      item.setAttribute('aria-pressed', String(item === filter));
    });
    projects.forEach(project => {
      project.hidden = category !== 'all' && !project.dataset.category.split(' ').includes(category);
    });
  }));
  document.querySelectorAll('[data-year]').forEach(el => {el.textContent = String(new Date().getFullYear());});
})();
