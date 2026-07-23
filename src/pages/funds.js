import { formatCurrency } from '../components/currency.js';

export const fundsDatabase = [
  { id: 1, name: "Parag Parikh Flexi Cap Fund", category: "Flexi Cap", risk: "Moderate-High", return1Y: 22.4, return3Y: 18.6, return5Y: 21.2, return10Y: 19.5, nav: 78.45, rating: 5, expense: 0.62, aum: "₹64,200 Cr", brokerLink: "https://zerodha.com" },
  { id: 2, name: "Quant Small Cap Fund", category: "Small Cap", risk: "Very High", return1Y: 38.5, return3Y: 28.4, return5Y: 34.2, return10Y: 24.1, nav: 242.10, rating: 5, expense: 0.77, aum: "₹21,800 Cr", brokerLink: "https://groww.in" },
  { id: 3, name: "Nippon India Small Cap Fund", category: "Small Cap", risk: "Very High", return1Y: 34.2, return3Y: 26.1, return5Y: 29.8, return10Y: 22.8, nav: 184.30, rating: 5, expense: 0.68, aum: "₹52,400 Cr", brokerLink: "https://groww.in" },
  { id: 4, name: "Mirae Asset Large Cap Fund", category: "Large Cap", risk: "Moderate", return1Y: 16.8, return3Y: 14.2, return5Y: 15.6, return10Y: 15.1, nav: 112.60, rating: 4, expense: 0.54, aum: "₹38,900 Cr", brokerLink: "https://zerodha.com" },
  { id: 5, name: "UTI Nifty 50 Index Fund", category: "Index Fund", risk: "Moderate", return1Y: 15.2, return3Y: 13.8, return5Y: 14.9, return10Y: 13.6, nav: 168.20, rating: 5, expense: 0.21, aum: "₹18,500 Cr", brokerLink: "https://indmoney.com" },
  { id: 6, name: "Mirae Asset Tax Saver (ELSS)", category: "ELSS Tax Saver", risk: "High", return1Y: 19.4, return3Y: 16.5, return5Y: 18.2, return10Y: 17.8, nav: 45.30, rating: 4, expense: 0.58, aum: "₹22,100 Cr", brokerLink: "https://zerodha.com" },
  { id: 7, name: "HDFC Balanced Advantage Fund", category: "Hybrid", risk: "Moderate", return1Y: 18.1, return3Y: 17.4, return5Y: 16.8, return10Y: 14.9, nav: 410.80, rating: 5, expense: 0.72, aum: "₹78,900 Cr", brokerLink: "https://groww.in" },
  { id: 8, name: "ICICI Prudential Corporate Bond Fund", category: "Debt", risk: "Low", return1Y: 7.8, return3Y: 7.2, return5Y: 7.5, return10Y: 8.1, nav: 28.90, rating: 4, expense: 0.32, aum: "₹24,500 Cr", brokerLink: "https://indmoney.com" }
];

export function renderFundsPage(container) {
  let selectedCategory = 'ALL';
  let searchQuery = '';
  let compareList = [];

  container.innerHTML = `
    <div class="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">Direct Mutual Fund Explorer</h1>
          <p class="text-on-surface-variant text-xs sm:text-sm mt-1">Discover zero-commission direct mutual funds with audited 1Y, 3Y, 5Y, and 10Y rolling return metrics.</p>
        </div>

        <button id="btn-compare-modal-open" class="px-4 py-2.5 rounded-xl bg-primary/20 text-primary border border-primary/30 font-semibold text-xs hover:bg-primary/30 transition-all flex items-center gap-1.5 self-start sm:self-auto">
          <span class="material-symbols-outlined text-base">compare_arrows</span>
          <span>Compare Selected (<span id="compare-count">0</span>)</span>
        </button>
      </div>

      <!-- Filters & Search Bar -->
      <div class="glass-card rounded-3xl p-4 sm:p-6 border border-white/10 space-y-4">
        <div class="flex flex-col md:flex-row items-center gap-3">
          <div class="relative flex-1 w-full">
            <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input type="text" id="input-fund-search" placeholder="Search fund name (e.g. Parag Parikh, Small Cap, Nifty 50)..." class="w-full min-h-[44px] pl-11 pr-4 rounded-2xl bg-surface-container border border-white/10 text-xs sm:text-sm text-white outline-none focus:border-primary"/>
          </div>

          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto text-xs">
            <button class="fund-cat-btn px-4 py-2.5 rounded-xl bg-primary text-[#0c1324] font-bold whitespace-nowrap" data-cat="ALL">All Categories</button>
            <button class="fund-cat-btn px-4 py-2.5 rounded-xl glass-card text-on-surface-variant hover:text-white font-semibold whitespace-nowrap" data-cat="Flexi Cap">Flexi Cap</button>
            <button class="fund-cat-btn px-4 py-2.5 rounded-xl glass-card text-on-surface-variant hover:text-white font-semibold whitespace-nowrap" data-cat="Small Cap">Small Cap</button>
            <button class="fund-cat-btn px-4 py-2.5 rounded-xl glass-card text-on-surface-variant hover:text-white font-semibold whitespace-nowrap" data-cat="Large Cap">Large Cap</button>
            <button class="fund-cat-btn px-4 py-2.5 rounded-xl glass-card text-on-surface-variant hover:text-white font-semibold whitespace-nowrap" data-cat="Index Fund">Index Fund</button>
            <button class="fund-cat-btn px-4 py-2.5 rounded-xl glass-card text-on-surface-variant hover:text-white font-semibold whitespace-nowrap" data-cat="ELSS Tax Saver">ELSS Tax</button>
          </div>
        </div>
      </div>

      <!-- Funds Grid Directory -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="funds-grid">
        <!-- Dynamically rendered Fund Cards -->
      </div>

      <!-- Compare Funds Modal -->
      <div id="modal-fund-compare" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div class="glass-modal rounded-3xl p-6 sm:p-8 w-full max-w-3xl space-y-4 max-h-[90vh] overflow-y-auto border border-white/10">
          <div class="flex justify-between items-center pb-3 border-b border-white/10">
            <h3 class="font-display text-lg font-bold text-white">Side-by-Side Fund Comparison</h3>
            <button id="close-fund-compare" class="text-on-surface-variant hover:text-white p-1"><span class="material-symbols-outlined">close</span></button>
          </div>
          
          <div id="compare-modal-body" class="space-y-4">
            <!-- Dynamically populated comparison cards -->
          </div>
        </div>
      </div>
    </div>
  `;

  const searchInput = container.querySelector('#input-fund-search');
  const catBtns = container.querySelectorAll('.fund-cat-btn');

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderFundsList();
  });

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.getAttribute('data-cat');
      catBtns.forEach(b => b.className = "fund-cat-btn px-4 py-2.5 rounded-xl glass-card text-on-surface-variant hover:text-white font-semibold whitespace-nowrap");
      btn.className = "fund-cat-btn px-4 py-2.5 rounded-xl bg-primary text-[#0c1324] font-bold whitespace-nowrap";
      renderFundsList();
    });
  });

  function renderFundsList() {
    const grid = container.querySelector('#funds-grid');
    if (!grid) return;

    const filtered = fundsDatabase.filter(f => {
      const matchCat = selectedCategory === 'ALL' || f.category === selectedCategory;
      const matchSearch = searchQuery === '' || f.name.toLowerCase().includes(searchQuery) || f.category.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-12 glass-card rounded-3xl p-8">
          <span class="material-symbols-outlined text-4xl text-on-surface-variant mb-2">search_off</span>
          <p class="text-sm text-on-surface-variant">No mutual funds match your search query.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(fund => {
      const isCompared = compareList.includes(fund.id);
      return `
        <div class="glass-card glass-card-interactive rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 relative group">
          <div>
            <div class="flex items-start justify-between gap-2 mb-3">
              <span class="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">${fund.category}</span>
              <div class="flex items-center gap-1 text-tertiary font-mono text-xs">
                <span class="material-symbols-outlined text-sm">star</span> ${fund.rating}.0
              </div>
            </div>
            
            <h3 class="font-display text-lg font-bold text-white group-hover:text-primary transition-colors">${fund.name}</h3>
            <p class="text-xs text-on-surface-variant mt-1">NAV: ${formatCurrency(fund.nav)} • AUM: ${fund.aum} • Exp: ${fund.expense}%</p>
          </div>

          <div class="grid grid-cols-3 gap-2 bg-surface-container/60 p-3 rounded-2xl border border-white/5 text-center font-mono">
            <div>
              <span class="text-[10px] text-on-surface-variant uppercase block">1Y</span>
              <span class="text-xs font-bold text-primary">+${fund.return1Y}%</span>
            </div>
            <div>
              <span class="text-[10px] text-on-surface-variant uppercase block">3Y</span>
              <span class="text-xs font-bold text-primary-fixed">+${fund.return3Y}%</span>
            </div>
            <div>
              <span class="text-[10px] text-on-surface-variant uppercase block">5Y</span>
              <span class="text-xs font-bold text-primary">+${fund.return5Y}%</span>
            </div>
          </div>

          <div class="flex items-center justify-between gap-2 pt-2">
            <button class="btn-toggle-compare px-3 py-2 rounded-xl ${isCompared ? 'bg-primary text-[#0c1324]' : 'bg-surface-container-high text-on-surface-variant hover:text-white'} text-xs font-semibold border border-white/10 transition-all" data-id="${fund.id}">
              ${isCompared ? '✓ Compared' : '+ Compare'}
            </button>

            <a href="${fund.brokerLink}" target="_blank" rel="noopener" class="px-4 py-2 rounded-xl bg-primary text-[#0c1324] font-bold text-xs hover:scale-105 transition-all shadow-[0_0_12px_rgba(78,222,163,0.3)] flex items-center gap-1">
              <span>Invest Direct</span>
              <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      `;
    }).join('');

    // Reattach compare listeners
    grid.querySelectorAll('.btn-toggle-compare').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        if (compareList.includes(id)) {
          compareList = compareList.filter(i => i !== id);
        } else {
          if (compareList.length >= 3) {
            alert("You can compare up to 3 funds side-by-side.");
            return;
          }
          compareList.push(id);
        }
        container.querySelector('#compare-count').textContent = compareList.length;
        renderFundsList();
      });
    });
  }

  // Compare Modal Trigger
  const modalCompare = container.querySelector('#modal-fund-compare');
  const btnOpenCompare = container.querySelector('#btn-compare-modal-open');
  const closeCompare = container.querySelector('#close-fund-compare');
  const modalBody = container.querySelector('#compare-modal-body');

  btnOpenCompare.addEventListener('click', () => {
    if (compareList.length === 0) {
      alert("Please select at least 1 fund using the '+ Compare' button first.");
      return;
    }

    const comparedFunds = fundsDatabase.filter(f => compareList.includes(f.id));
    modalBody.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-${comparedFunds.length} gap-4">
        ${comparedFunds.map(f => `
          <div class="glass-card rounded-2xl p-4 space-y-3 text-xs border border-white/10">
            <h4 class="font-bold text-sm text-primary">${f.name}</h4>
            <div class="space-y-1 font-mono text-on-surface-variant">
              <p>Category: <span class="text-white">${f.category}</span></p>
              <p>Expense Ratio: <span class="text-white">${f.expense}%</span></p>
              <p>AUM: <span class="text-white">${f.aum}</span></p>
              <p>1Y Return: <span class="text-primary font-bold">+${f.return1Y}%</span></p>
              <p>3Y Return: <span class="text-primary font-bold">+${f.return3Y}%</span></p>
              <p>5Y Return: <span class="text-primary font-bold">+${f.return5Y}%</span></p>
              <p>10Y CAGR: <span class="text-primary-fixed font-bold">+${f.return10Y}%</span></p>
            </div>
            <a href="${f.brokerLink}" target="_blank" rel="noopener" class="block text-center w-full py-2 rounded-xl bg-primary text-[#0c1324] font-bold">Invest Now</a>
          </div>
        `).join('')}
      </div>
    `;

    modalCompare.classList.remove('hidden');
  });

  closeCompare.addEventListener('click', () => modalCompare.classList.add('hidden'));

  renderFundsList();

  return () => {};
}
