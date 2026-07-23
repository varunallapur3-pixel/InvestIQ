import './styles.css';
import { initNavigation } from './components/nav.js';
import { initAiAssistant } from './components/aiAssistant.js';
import { auth } from './components/auth.js';

import { renderHomePage } from './pages/home.js';
import { renderCalculatorsPage } from './pages/calculators.js';
import { renderComparisonPage } from './pages/comparison.js';
import { renderFundsPage } from './pages/funds.js';
import { renderLearnPage } from './pages/learn.js';
import { renderDashboardPage } from './pages/dashboard.js';
import { renderLoginPage } from './pages/login.js';
import { renderContactPage } from './pages/contact.js';

let activeCleanup = null;

const routes = {
  'home': renderHomePage,
  'calculator': renderCalculatorsPage,
  'compare': renderComparisonPage,
  'funds': renderFundsPage,
  'learn': renderLearnPage,
  'dashboard': renderDashboardPage,
  'login': renderLoginPage,
  'contact': renderContactPage
};

function updateActiveNavUI(routeKey) {
  // Desktop links
  document.querySelectorAll('.nav-link').forEach(link => {
    const route = link.getAttribute('data-route');
    if (route === routeKey) {
      link.className = "nav-link text-primary font-bold border-b-2 border-primary pb-1 transition-all";
    } else {
      link.className = "nav-link text-on-surface-variant hover:text-primary transition-colors";
    }
  });

  // Mobile bottom pill items
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    const route = item.getAttribute('data-route');
    if (route === 'compare') {
      if (routeKey === 'compare') {
        item.className = "bottom-nav-item bg-primary text-[#0c1324] rounded-full p-3 scale-110 shadow-lg shadow-primary/40 flex items-center justify-center transition-all ring-2 ring-primary-fixed";
      } else {
        item.className = "bottom-nav-item bg-primary text-[#0c1324] rounded-full p-3 scale-110 shadow-lg shadow-primary/30 flex items-center justify-center active:scale-95 transition-all";
      }
    } else {
      if (route === routeKey) {
        item.className = "bottom-nav-item text-primary bg-primary/10 rounded-full p-2.5 flex items-center justify-center transition-colors";
      } else {
        item.className = "bottom-nav-item text-on-surface-variant p-2.5 hover:text-primary transition-colors flex items-center justify-center active:scale-90";
      }
    }
  });

  // User badge update
  const userNameEl = document.getElementById('nav-user-name');
  const userAvatarEl = document.getElementById('nav-user-avatar');
  if (userNameEl && userAvatarEl) {
    if (auth.isLoggedIn) {
      userNameEl.textContent = auth.user.name.split(' ')[0];
      userAvatarEl.src = auth.user.avatar;
    } else {
      userNameEl.textContent = "Sign In";
    }
  }
}

function handleRoute() {
  const hashRaw = window.location.hash.replace('#', '') || 'home';
  const routeKey = hashRaw.split('?')[0] || 'home';
  const targetRoute = routes[routeKey] ? routeKey : 'home';

  if (typeof activeCleanup === 'function') {
    activeCleanup();
    activeCleanup = null;
  }

  const appView = document.getElementById('app-view');
  if (!appView) return;

  const renderFn = routes[targetRoute];
  activeCleanup = renderFn(appView);

  updateActiveNavUI(targetRoute);
  window.scrollTo(0, 0);
}

function initAmbientTicker() {
  const container = document.getElementById('ambient-ticker-content');
  if (!container) return;

  const items = [
    "NIFTY 50 24,850 ▲ +1.4%",
    "SENSEX 81,300 ▲ +0.9%",
    "GOLD ₹74,500/10g ▲ +0.5%",
    "10Y NIFTY CAGR: 14.2%",
    "REAL ESTATE CAGR: 9.8%",
    "PPF RATE: 7.1% EEE",
    "SGB RATE: 2.5% p.a. + GOLD GAIN",
    "REINVESTMENT YIELD 1.8X",
    "LTCG TAX SLAB 12.5% ABOVE ₹1.25L",
    "USD/INR ₹83.65 ▼ -0.1%"
  ];

  // Repeat items for seamless marquee loop
  const html = [...items, ...items, ...items].map(item => `
    <span class="inline-flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
      <span>${item}</span>
    </span>
  `).join('');

  container.innerHTML = html;
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('currencyChange', handleRoute);

window.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAiAssistant();
  initAmbientTicker();

  auth.subscribe(() => {
    updateActiveNavUI(window.location.hash.replace('#', '').split('?')[0] || 'home');
  });

  handleRoute();
});
