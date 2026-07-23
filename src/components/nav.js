import { auth } from './auth.js';
import { setCurrency, getCurrency } from './currency.js';

export function initNavigation() {
  const topShell = document.getElementById('top-nav-shell');
  const bottomShell = document.getElementById('bottom-nav-pill');
  if (!topShell) return;

  const currentTheme = localStorage.getItem('investiq_theme') || 'dark';
  if (currentTheme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }

  // Populate Top Shell
  topShell.innerHTML = `
    <div class="flex items-center gap-4">
      <a href="#home" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-[#0c1324] font-bold shadow-[0_0_15px_rgba(78,222,163,0.4)] group-hover:scale-105 transition-transform">
          <span class="material-symbols-outlined text-xl">trending_up</span>
        </div>
        <span class="font-display text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-fixed to-primary tracking-tight">InvestIQ</span>
      </a>

      <!-- Desktop Nav Bar Links -->
      <nav class="hidden lg:flex items-center gap-6 text-xs font-headline font-semibold ml-4">
        <a href="#home" class="nav-link text-on-surface-variant hover:text-primary transition-colors" data-route="home">Home</a>
        
        <!-- Calculators Mega Dropdown -->
        <div class="relative group">
          <button class="nav-link text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 py-4" data-route="calculator">
            Calculators
            <span class="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
          </button>
          <div class="absolute left-0 top-full hidden group-hover:block w-72 glass-modal rounded-2xl p-3 shadow-2xl border border-white/10 text-xs space-y-1 z-50">
            <div class="text-[10px] font-bold text-primary uppercase tracking-wider px-2 py-1">Core Growth</div>
            <a href="#calculator?type=sip" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-primary text-base">trending_up</span> SIP Calculator
            </a>
            <a href="#calculator?type=lumpsum" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-primary text-base">account_balance_wallet</span> Lumpsum Returns
            </a>
            <a href="#calculator?type=emi" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-primary text-base">real_estate_agent</span> EMI Amortization
            </a>
            
            <div class="text-[10px] font-bold text-secondary uppercase tracking-wider px-2 py-1 pt-2 border-t border-white/5">Life Goals</div>
            <a href="#calculator?type=retirement" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-secondary text-base">elderly</span> Retirement Planner
            </a>
            <a href="#calculator?type=goal" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-secondary text-base">savings</span> Goal Planner
            </a>
            <a href="#calculator?type=inflation" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-tertiary text-base">request_quote</span> Inflation Impact
            </a>

            <div class="text-[10px] font-bold text-tertiary uppercase tracking-wider px-2 py-1 pt-2 border-t border-white/5">Fixed & Government</div>
            <a href="#calculator?type=ppf" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-tertiary text-base">verified</span> PPF / NPS Calculator
            </a>
            <a href="#calculator?type=swp" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-tertiary text-base">payments</span> SWP Withdrawal Planner
            </a>
          </div>
        </div>

        <a href="#compare" class="nav-link text-on-surface-variant hover:text-primary transition-colors" data-route="compare">Comparison Matrix</a>
        <a href="#funds" class="nav-link text-on-surface-variant hover:text-primary transition-colors" data-route="funds">Mutual Funds</a>

        <!-- Where to Invest Mega Dropdown -->
        <div class="relative group">
          <button class="nav-link text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 py-4">
            Where to Invest
            <span class="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
          </button>
          <div class="absolute left-0 top-full hidden group-hover:block w-80 glass-modal rounded-2xl p-3 shadow-2xl border border-white/10 text-xs space-y-1 z-50">
            <div class="text-[10px] font-bold text-primary uppercase tracking-wider px-2 py-1">Top Brokerage & Investment Platforms</div>
            <a href="https://zerodha.com" target="_blank" rel="noopener" class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-base">insights</span>
                <span>Zerodha Coin</span>
              </div>
              <span class="text-[10px] text-on-surface-variant">Direct MF</span>
            </a>
            <a href="https://groww.in" target="_blank" rel="noopener" class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-base">show_chart</span>
                <span>Groww</span>
              </div>
              <span class="text-[10px] text-on-surface-variant">SIP & Stocks</span>
            </a>
            <a href="https://indmoney.com" target="_blank" rel="noopener" class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-base">public</span>
                <span>INDmoney</span>
              </div>
              <span class="text-[10px] text-on-surface-variant">US Stocks & MF</span>
            </a>

            <div class="text-[10px] font-bold text-secondary uppercase tracking-wider px-2 py-1 pt-2 border-t border-white/5">Govt & Fixed Income Portals</div>
            <a href="https://rbiretaildirect.org.in" target="_blank" rel="noopener" class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-base">account_balance</span>
                <span>RBI Retail Direct</span>
              </div>
              <span class="text-[10px] text-on-surface-variant">G-Sec & SGB</span>
            </a>
            <a href="https://www.enps.nsdl.com" target="_blank" rel="noopener" class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-base">security</span>
                <span>National Pension System</span>
              </div>
              <span class="text-[10px] text-on-surface-variant">NPS Portal</span>
            </a>
          </div>
        </div>

        <a href="#learn" class="nav-link text-on-surface-variant hover:text-primary transition-colors" data-route="learn">Learning Hub</a>
        <a href="#dashboard" class="nav-link text-on-surface-variant hover:text-primary transition-colors" data-route="dashboard">Dashboard</a>
      </nav>
    </div>

    <!-- Right Controls: Search, Currency, Theme, Profile -->
    <div class="flex items-center gap-2.5 sm:gap-3">
      <!-- Quick Search Trigger -->
      <button id="btn-global-search" class="w-8 h-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Quick Search">
        <span class="material-symbols-outlined text-sm">search</span>
      </button>

      <!-- Currency Switcher -->
      <select id="select-currency" class="bg-surface-container-high text-xs font-mono border border-white/10 rounded-full px-2.5 py-1 text-primary focus:outline-none cursor-pointer">
        <option value="INR" ${getCurrency() === 'INR' ? 'selected' : ''}>₹ INR</option>
        <option value="USD" ${getCurrency() === 'USD' ? 'selected' : ''}>$ USD</option>
        <option value="EUR" ${getCurrency() === 'EUR' ? 'selected' : ''}>€ EUR</option>
        <option value="GBP" ${getCurrency() === 'GBP' ? 'selected' : ''}>£ GBP</option>
      </select>

      <!-- Theme Toggle -->
      <button id="btn-theme-toggle" class="w-8 h-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary hover:scale-105 transition-transform" title="Toggle Light/Dark Theme">
        <span class="material-symbols-outlined text-sm" id="icon-theme">dark_mode</span>
      </button>

      <!-- User Profile Badge -->
      <a href="#login" id="nav-user-badge" class="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 hover:border-primary/40 transition-all text-xs">
        <div class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
          <img id="nav-user-avatar" src="${auth.user.avatar}" alt="Avatar" class="w-full h-full object-cover"/>
        </div>
        <span id="nav-user-name" class="font-medium text-white hidden sm:inline">${auth.user.name.split(' ')[0]}</span>
      </a>
    </div>
  `;

  // Populate Mobile Bottom Nav Bar Pill
  if (bottomShell) {
    bottomShell.innerHTML = `
      <a href="#home" class="bottom-nav-item text-on-surface-variant p-2.5 hover:text-primary transition-colors flex items-center justify-center active:scale-90" data-route="home" title="Home">
        <span class="material-symbols-outlined">home</span>
      </a>
      <a href="#calculator" class="bottom-nav-item text-on-surface-variant p-2.5 hover:text-primary transition-colors flex items-center justify-center active:scale-90" data-route="calculator" title="Calculators Hub">
        <span class="material-symbols-outlined">calculate</span>
      </a>
      <a href="#compare" class="bottom-nav-item bg-primary text-[#0c1324] rounded-full p-3 scale-110 shadow-lg shadow-primary/40 flex items-center justify-center active:scale-95 transition-all" data-route="compare" title="Asset Comparison">
        <span class="material-symbols-outlined font-bold">insights</span>
      </a>
      <a href="#funds" class="bottom-nav-item text-on-surface-variant p-2.5 hover:text-primary transition-colors flex items-center justify-center active:scale-90" data-route="funds" title="Mutual Funds">
        <span class="material-symbols-outlined">travel_explore</span>
      </a>
      <a href="#dashboard" class="bottom-nav-item text-on-surface-variant p-2.5 hover:text-primary transition-colors flex items-center justify-center active:scale-90" data-route="dashboard" title="Dashboard">
        <span class="material-symbols-outlined">grid_view</span>
      </a>
    `;
  }

  // Theme Toggle Listener
  const themeBtn = topShell.querySelector('#btn-theme-toggle');
  const themeIcon = topShell.querySelector('#icon-theme');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.contains('light');
      if (isLight) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('investiq_theme', 'dark');
        if (themeIcon) themeIcon.textContent = 'dark_mode';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('investiq_theme', 'light');
        if (themeIcon) themeIcon.textContent = 'light_mode';
      }
    });
  }

  // Currency Listener
  const currencySelect = topShell.querySelector('#select-currency');
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => setCurrency(e.target.value));
  }

  // Global Search Modal Listener
  const btnSearch = topShell.querySelector('#btn-global-search');
  if (btnSearch) {
    btnSearch.addEventListener('click', openSearchModal);
  }
}

function openSearchModal() {
  let modal = document.getElementById('global-search-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'global-search-modal';
    modal.className = 'fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md';
    modal.innerHTML = `
      <div class="glass-modal rounded-3xl p-6 w-full max-w-lg space-y-4 border border-white/10 shadow-2xl">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <div class="flex items-center gap-2 flex-1">
            <span class="material-symbols-outlined text-primary">search</span>
            <input type="text" id="search-input" placeholder="Search calculators, funds, learning topics..." class="w-full bg-transparent text-white outline-none text-sm placeholder-on-surface-variant"/>
          </div>
          <button id="close-search" class="text-on-surface-variant hover:text-white"><span class="material-symbols-outlined">close</span></button>
        </div>
        <div class="space-y-2 max-h-60 overflow-y-auto text-xs" id="search-results">
          <a href="#calculator?type=sip" class="block p-3 rounded-xl bg-white/5 hover:bg-primary/20 text-white transition-colors">
            <div class="font-bold text-primary">Systematic Investment Plan (SIP) Calculator</div>
            <div class="text-on-surface-variant text-[11px]">Calculate compound wealth growth with step-up & inflation</div>
          </a>
          <a href="#compare" class="block p-3 rounded-xl bg-white/5 hover:bg-primary/20 text-white transition-colors">
            <div class="font-bold text-secondary">Asset Comparison Matrix</div>
            <div class="text-on-surface-variant text-[11px]">SIP vs Gold vs Real Estate vs Fixed Deposits</div>
          </a>
          <a href="#funds" class="block p-3 rounded-xl bg-white/5 hover:bg-primary/20 text-white transition-colors">
            <div class="font-bold text-tertiary">Mutual Fund Explorer</div>
            <div class="text-on-surface-variant text-[11px]">Directory of top-rated equity & debt mutual funds</div>
          </a>
          <a href="#learn" class="block p-3 rounded-xl bg-white/5 hover:bg-primary/20 text-white transition-colors">
            <div class="font-bold text-white">Power of Compounding & Rule of 72</div>
            <div class="text-on-surface-variant text-[11px]">Financial education and wealth building principles</div>
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#close-search');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });

    const searchInput = modal.querySelector('#search-input');
    searchInput.focus();
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const items = modal.querySelectorAll('#search-results a');
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(q)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}
