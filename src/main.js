import './styles/main.scss';
import './js/menu.js';

const components = [
  'header',
  'hero',
  'for-whom',
  'about',
  'journey',
  'results',
  'pricing',
  'faq',
  'cta',
  'footer'
];

async function loadComponent(name) {
  const response = await fetch(`/partials/${name}.html`);
  return await response.text();
}

async function initApp() {
  const app = document.getElementById('app');

  for (const name of components) {
    const html = await loadComponent(name);
    app.insertAdjacentHTML('beforeend', html);
  }
}

initApp();