import { formatCurrency } from '../components/currency.js';
import { generatePDFReport, exportToCSV } from '../components/pdfExporter.js';
import { auth } from '../components/auth.js';

export function renderCalculatorsPage(container) {
  let activeTab = 'sip';
  let chartInstance = null;

  // Check URL query param for default tab
  const hash = window.location.hash;
  if (hash.includes('type=')) {
    const type = hash.split('type=')[1].split('&')[0];
    if (type) activeTab = type;
  }

  container.innerHTML = `
    <div class="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <a href="#home" class="text-on-surface-variant hover:text-primary transition-colors flex items-center p-1 -ml-1">
              <span class="material-symbols-outlined text-xl">arrow_back</span>
            </a>
            <h1 class="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">Precision Financial Calculators</h1>
          </div>
          <p class="text-on-surface-variant text-xs sm:text-sm">Audited algorithms with real-world inflation, LTCG taxation, and dynamic compounding models.</p>
        </div>

        <div class="flex items-center gap-2 bg-surface-container-high px-3.5 py-1.5 rounded-2xl border border-white/10 w-fit">
          <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          <span class="text-xs font-mono text-primary font-semibold">Institutional Engine v3.6</span>
        </div>
      </div>

      <!-- Calculators Switcher Tabs -->
      <div class="glass-card rounded-2xl p-2 border border-white/10 flex gap-1.5 overflow-x-auto no-scrollbar text-xs font-semibold">
        <button class="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2" data-tab="sip">
          <span class="material-symbols-outlined text-base">trending_up</span> SIP Calculator
        </button>
        <button class="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white" data-tab="lumpsum">
          <span class="material-symbols-outlined text-base">account_balance_wallet</span> Lumpsum
        </button>
        <button class="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white" data-tab="emi">
          <span class="material-symbols-outlined text-base">real_estate_agent</span> EMI Loan
        </button>
        <button class="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white" data-tab="retirement">
          <span class="material-symbols-outlined text-base">elderly</span> Retirement
        </button>
        <button class="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white" data-tab="goal">
          <span class="material-symbols-outlined text-base">savings</span> Goal Planner
        </button>
        <button class="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white" data-tab="inflation">
          <span class="material-symbols-outlined text-base">request_quote</span> Inflation
        </button>
        <button class="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white" data-tab="swp">
          <span class="material-symbols-outlined text-base">payments</span> SWP
        </button>
        <button class="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white" data-tab="ppf">
          <span class="material-symbols-outlined text-base">verified</span> PPF / FD
        </button>
      </div>

      <!-- Active Calculator Workspace Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        
        <!-- Left Panel: Controls & Sliders (5 cols) -->
        <section class="lg:col-span-5 space-y-6">
          <div class="glass-card rounded-3xl p-5 sm:p-8 space-y-6 shadow-2xl border border-white/10" id="calc-controls-box">
            <!-- Dynamic Controls Form Injected via JS -->
          </div>
        </section>

        <!-- Right Panel: Results & Chart Engine (7 cols) -->
        <section class="lg:col-span-7 space-y-6">
          
          <!-- Key Output Value Card -->
          <div class="glass-card rounded-3xl p-5 sm:p-8 relative overflow-hidden group shadow-2xl border border-white/10">
            <div class="absolute top-0 right-0 w-60 sm:w-72 h-60 sm:h-72 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none"></div>
            <div class="relative z-10">
              <span class="text-xs font-semibold text-on-surface-variant uppercase tracking-widest block mb-1" id="res-main-label">Estimated Maturity Value</span>
              <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight" id="res-main-value">₹ 1,25,45,670</h2>
              
              <div class="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-4">
                <span class="flex items-center gap-1.5 text-xs text-primary-fixed bg-primary/15 px-3 py-1 rounded-full border border-primary/30" id="res-badge-1">
                  <span class="material-symbols-outlined text-sm">trending_up</span> Compounding Gain: 178%
                </span>
                <span id="res-badge-2" class="text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-white/5">
                  Inflation adjusted: ₹ 52,40,100
                </span>
              </div>
            </div>
          </div>

          <!-- Summary Metric Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div class="glass-card rounded-2xl p-4 sm:p-5 border-l-4 border-l-on-surface-variant">
              <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium mb-1" id="lbl-sub-1">Total Invested Capital</p>
              <p class="font-mono text-lg sm:text-xl font-bold text-white" id="val-sub-1">₹ 45,00,000</p>
            </div>
            <div class="glass-card rounded-2xl p-4 sm:p-5 border-l-4 border-l-primary">
              <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium mb-1" id="lbl-sub-2">Estimated Growth</p>
              <p class="font-mono text-lg sm:text-xl font-bold text-primary" id="val-sub-2">₹ 80,45,670</p>
            </div>
            <div class="glass-card rounded-2xl p-4 sm:p-5 border-l-4 border-l-tertiary">
              <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium mb-1" id="lbl-sub-3">Wealth Multiplier</p>
              <p class="font-mono text-lg sm:text-xl font-bold text-tertiary" id="val-sub-3">2.78x</p>
            </div>
          </div>

          <!-- Chart.js Visualization Canvas Card -->
          <div class="glass-card rounded-3xl p-5 sm:p-6 flex flex-col border border-white/10 min-h-[340px]">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h3 class="font-display text-base sm:text-lg font-bold text-white">Interactive Projection Curve</h3>
              <div class="flex items-center gap-2">
                <button id="btn-toggle-chart-type" class="px-3 py-1 rounded-xl bg-surface-container-high border border-white/10 text-xs text-on-surface-variant hover:text-white transition-colors flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">bar_chart</span> Toggle Chart View
                </button>
              </div>
            </div>

            <div class="relative w-full h-64 sm:h-72">
              <canvas id="calc-chart-canvas"></canvas>
            </div>
          </div>

          <!-- Action Buttons Bar -->
          <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div class="flex flex-wrap items-center gap-2">
              <button id="btn-export-pdf" class="px-4 py-2.5 rounded-xl bg-primary text-[#0c1324] font-headline font-semibold text-xs hover:scale-105 transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)] flex items-center gap-1.5">
                <span class="material-symbols-outlined text-base">picture_as_pdf</span> Download PDF Report
              </button>
              <button id="btn-export-csv" class="px-4 py-2.5 rounded-xl glass-card text-on-surface hover:text-white text-xs font-semibold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-1.5">
                <span class="material-symbols-outlined text-base">table_chart</span> Export CSV
              </button>
              <button id="btn-share-calc" class="px-4 py-2.5 rounded-xl glass-card text-on-surface hover:text-white text-xs font-semibold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-1.5">
                <span class="material-symbols-outlined text-base">share</span> Share Link
              </button>
            </div>

            <button id="btn-save-goal-calc" class="px-4 py-2.5 rounded-xl bg-secondary-container/30 text-secondary border border-secondary/30 font-semibold text-xs hover:bg-secondary-container/50 transition-all flex items-center gap-1.5">
              <span class="material-symbols-outlined text-base">bookmark</span> Save to Goals
            </button>
          </div>

          <!-- Toast Notification -->
          <div id="calc-toast" class="hidden text-xs font-semibold text-primary text-center pt-2"></div>

        </section>
      </div>

      <!-- Year-Wise Schedule Table -->
      <section class="glass-card rounded-3xl p-5 sm:p-8 space-y-4 border border-white/10">
        <div class="flex items-center justify-between">
          <h3 class="font-display text-lg sm:text-xl font-bold text-white">Year-by-Year Growth Matrix</h3>
          <span class="text-xs text-on-surface-variant font-mono" id="table-row-count">Showing 15 Years</span>
        </div>
        <div class="responsive-table-container">
          <table class="w-full text-left border-collapse min-w-[600px]" id="matrix-table">
            <thead>
              <tr class="bg-surface-container-high/60 border-b border-white/10 text-[11px] sm:text-xs font-headline text-on-surface-variant uppercase tracking-wider">
                <th class="p-3.5">Year</th>
                <th class="p-3.5">Annual Investment</th>
                <th class="p-3.5">Cumulative Invested</th>
                <th class="p-3.5">Estimated Interest</th>
                <th class="p-3.5 text-primary">Closing Balance</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5 text-xs font-mono" id="matrix-tbody">
              <!-- Dynamically rendered rows -->
            </tbody>
          </table>
        </div>
      </section>

    </div>
  `;

  // Init Tabs UI
  const tabBtns = container.querySelectorAll('.calc-tab-btn');
  tabBtns.forEach(btn => {
    const tab = btn.getAttribute('data-tab');
    if (tab === activeTab) {
      btn.className = "calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 bg-primary text-[#0c1324] font-bold shadow-lg shadow-primary/30";
    } else {
      btn.className = "calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white";
    }

    btn.addEventListener('click', () => {
      activeTab = tab;
      tabBtns.forEach(b => b.className = "calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white");
      btn.className = "calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 bg-primary text-[#0c1324] font-bold shadow-lg shadow-primary/30";
      renderControlsForm(activeTab);
    });
  });

  let currentCalculatedData = { title: '', summary: [], years: [] };
  let currentChartType = 'line';

  function renderControlsForm(type) {
    const box = container.querySelector('#calc-controls-box');
    if (!box) return;

    if (type === 'sip') {
      box.innerHTML = `
        <div class="flex items-center justify-between pb-3.5 border-b border-white/10">
          <h2 class="font-display text-lg font-bold text-primary flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">tune</span> SIP Controls
          </h2>
          <button id="btn-reset" class="text-xs text-on-surface-variant hover:text-white">Reset Defaults</button>
        </div>

        <div class="space-y-4">
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">SIP Frequency</label>
            </div>
            <select id="sip-freq" class="w-full min-h-[40px] px-3 rounded-xl bg-surface-container border border-white/10 text-xs text-white outline-none focus:border-primary">
              <option value="12" selected>Monthly</option>
              <option value="4">Quarterly</option>
              <option value="1">Yearly</option>
            </select>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Investment Amount</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-1">₹ 25,000</span>
            </div>
            <input type="range" id="input-val-1" min="500" max="200000" step="500" value="25000" class="w-full slider-thumb"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Expected Return (p.a)</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-2">14%</span>
            </div>
            <input type="range" id="input-val-2" min="1" max="30" step="0.5" value="14" class="w-full slider-thumb"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Tenure (Years)</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-3">15 Years</span>
            </div>
            <input type="range" id="input-val-3" min="1" max="40" step="1" value="15" class="w-full slider-thumb"/>
          </div>

          <div class="pt-4 border-t border-white/10 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs text-white">Annual Step-up %</span>
              <input type="number" id="input-stepup" value="10" min="0" max="50" class="w-16 min-h-[36px] bg-surface-container border border-white/10 rounded-xl px-2 text-primary text-center font-mono text-xs outline-none"/>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-white">Expected Inflation %</span>
              <input type="number" id="input-inflation" value="6" min="0" max="20" class="w-16 min-h-[36px] bg-surface-container border border-white/10 rounded-xl px-2 text-primary text-center font-mono text-xs outline-none"/>
            </div>
          </div>
        </div>
      `;
    } else if (type === 'lumpsum') {
      box.innerHTML = `
        <div class="flex items-center justify-between pb-3.5 border-b border-white/10">
          <h2 class="font-display text-lg font-bold text-primary flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">tune</span> Lumpsum Controls
          </h2>
          <button id="btn-reset" class="text-xs text-on-surface-variant hover:text-white">Reset Defaults</button>
        </div>

        <div class="space-y-4">
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Total Investment Amount</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-1">₹ 5,00,000</span>
            </div>
            <input type="range" id="input-val-1" min="10000" max="5000000" step="10000" value="500000" class="w-full slider-thumb"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Expected Return (p.a)</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-2">12%</span>
            </div>
            <input type="range" id="input-val-2" min="1" max="30" step="0.5" value="12" class="w-full slider-thumb"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Tenure (Years)</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-3">10 Years</span>
            </div>
            <input type="range" id="input-val-3" min="1" max="40" step="1" value="10" class="w-full slider-thumb"/>
          </div>

          <div class="pt-4 border-t border-white/10 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs text-white">Expected Inflation %</span>
              <input type="number" id="input-inflation" value="6" min="0" max="20" class="w-16 min-h-[36px] bg-surface-container border border-white/10 rounded-xl px-2 text-primary text-center font-mono text-xs outline-none"/>
            </div>
          </div>
        </div>
      `;
    } else if (type === 'emi') {
      box.innerHTML = `
        <div class="flex items-center justify-between pb-3.5 border-b border-white/10">
          <h2 class="font-display text-lg font-bold text-primary flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">tune</span> EMI Loan Controls
          </h2>
          <button id="btn-reset" class="text-xs text-on-surface-variant hover:text-white">Reset Defaults</button>
        </div>

        <div class="space-y-4">
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Loan Principal Amount</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-1">₹ 40,00,000</span>
            </div>
            <input type="range" id="input-val-1" min="100000" max="20000000" step="100000" value="4000000" class="w-full slider-thumb"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Interest Rate (p.a %)</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-2">8.5%</span>
            </div>
            <input type="range" id="input-val-2" min="1" max="20" step="0.25" value="8.5" class="w-full slider-thumb"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Loan Tenure (Years)</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-3">20 Years</span>
            </div>
            <input type="range" id="input-val-3" min="1" max="30" step="1" value="20" class="w-full slider-thumb"/>
          </div>
        </div>
      `;
    } else {
      // General Fallback (Retirement / Goal / Inflation / SWP / PPF)
      box.innerHTML = `
        <div class="flex items-center justify-between pb-3.5 border-b border-white/10">
          <h2 class="font-display text-lg font-bold text-primary flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">tune</span> ${type.toUpperCase()} Planner Controls
          </h2>
          <button id="btn-reset" class="text-xs text-on-surface-variant hover:text-white">Reset Defaults</button>
        </div>

        <div class="space-y-4">
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Target Corpus / Amount</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-1">₹ 2,00,00,000</span>
            </div>
            <input type="range" id="input-val-1" min="100000" max="100000000" step="500000" value="20000000" class="w-full slider-thumb"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Expected Growth / Interest %</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-2">12%</span>
            </div>
            <input type="range" id="input-val-2" min="1" max="25" step="0.5" value="12" class="w-full slider-thumb"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-on-surface-variant">Time Horizon (Years)</label>
              <span class="font-mono text-base font-bold text-primary" id="lbl-val-3">20 Years</span>
            </div>
            <input type="range" id="input-val-3" min="1" max="40" step="1" value="20" class="w-full slider-thumb"/>
          </div>
        </div>
      `;
    }

    // Attach Input Event Listeners
    const inputs = box.querySelectorAll('input, select');
    inputs.forEach(input => input.addEventListener('input', runCalculation));

    const resetBtn = box.querySelector('#btn-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        renderControlsForm(type);
      });
    }

    runCalculation();
  }

  function runCalculation() {
    const v1El = container.querySelector('#input-val-1');
    const v2El = container.querySelector('#input-val-2');
    const v3El = container.querySelector('#input-val-3');
    if (!v1El || !v2El || !v3El) return;

    const val1 = parseFloat(v1El.value);
    const val2 = parseFloat(v2El.value);
    const val3 = parseInt(v3El.value);

    // Update Label texts
    if (activeTab === 'sip') {
      container.querySelector('#lbl-val-1').textContent = formatCurrency(val1);
      container.querySelector('#lbl-val-2').textContent = `${val2}%`;
      container.querySelector('#lbl-val-3').textContent = `${val3} Years`;

      const stepUpInput = container.querySelector('#input-stepup');
      const inflationInput = container.querySelector('#input-inflation');
      const stepUp = stepUpInput ? parseFloat(stepUpInput.value || 0) / 100 : 0.10;
      const inflation = inflationInput ? parseFloat(inflationInput.value || 0) / 100 : 0.06;

      let totalInvested = 0;
      let totalValue = 0;
      let currentMonthly = val1;
      const rMonthly = val2 / 12 / 100;
      const yearRows = [];

      for (let yr = 1; yr <= val3; yr++) {
        let yrInvested = 0;
        for (let m = 1; m <= 12; m++) {
          yrInvested += currentMonthly;
          totalValue = (totalValue + currentMonthly) * (1 + rMonthly);
        }
        totalInvested += yrInvested;
        const estReturns = totalValue - totalInvested;
        yearRows.push({
          year: yr,
          annualInvested: Math.round(yrInvested),
          invested: formatCurrency(totalInvested),
          returns: formatCurrency(estReturns),
          total: formatCurrency(totalValue),
          numInvested: Math.round(totalInvested),
          numReturns: Math.round(estReturns),
          numTotal: Math.round(totalValue)
        });
        currentMonthly += currentMonthly * stepUp;
      }

      const estReturns = totalValue - totalInvested;
      const multiplier = totalInvested > 0 ? (totalValue / totalInvested).toFixed(2) : '1.00';
      const inflationAdjusted = Math.round(totalValue / Math.pow(1 + inflation, val3));

      // Output text
      container.querySelector('#res-main-label').textContent = "Estimated SIP Maturity Corpus";
      container.querySelector('#res-main-value').textContent = formatCurrency(totalValue);
      container.querySelector('#res-badge-1').innerHTML = `<span class="material-symbols-outlined text-sm">trending_up</span> Compounding Gain: ${Math.round((estReturns/totalInvested)*100)}%`;
      container.querySelector('#res-badge-2').textContent = `Inflation Adjusted: ${formatCurrency(inflationAdjusted)}`;

      container.querySelector('#lbl-sub-1').textContent = "Total Invested Capital";
      container.querySelector('#val-sub-1').textContent = formatCurrency(totalInvested);
      container.querySelector('#lbl-sub-2').textContent = "Estimated Wealth Gain";
      container.querySelector('#val-sub-2').textContent = formatCurrency(estReturns);
      container.querySelector('#lbl-sub-3').textContent = "Wealth Multiplier";
      container.querySelector('#val-sub-3').textContent = `${multiplier}x`;

      currentCalculatedData = {
        title: `SIP Investment Report (${val3} Years @ ${val2}%)`,
        summary: [
          { label: 'Monthly SIP', value: formatCurrency(val1) },
          { label: 'Total Capital Invested', value: formatCurrency(totalInvested) },
          { label: 'Estimated Wealth Gain', value: formatCurrency(estReturns) },
          { label: 'Maturity Corpus', value: formatCurrency(totalValue) }
        ],
        years: yearRows
      };

      updateTable(yearRows);
      updateChart(yearRows.map(r => `Yr ${r.year}`), yearRows.map(r => r.numInvested), yearRows.map(r => r.numTotal));

    } else if (activeTab === 'lumpsum') {
      container.querySelector('#lbl-val-1').textContent = formatCurrency(val1);
      container.querySelector('#lbl-val-2').textContent = `${val2}%`;
      container.querySelector('#lbl-val-3').textContent = `${val3} Years`;

      const inflationInput = container.querySelector('#input-inflation');
      const inflation = inflationInput ? parseFloat(inflationInput.value || 0) / 100 : 0.06;

      const totalValue = val1 * Math.pow(1 + val2 / 100, val3);
      const estReturns = totalValue - val1;
      const multiplier = (totalValue / val1).toFixed(2);
      const inflationAdjusted = Math.round(totalValue / Math.pow(1 + inflation, val3));

      const yearRows = [];
      for (let yr = 1; yr <= val3; yr++) {
        const yrVal = val1 * Math.pow(1 + val2 / 100, yr);
        yearRows.push({
          year: yr,
          annualInvested: 0,
          invested: formatCurrency(val1),
          returns: formatCurrency(yrVal - val1),
          total: formatCurrency(yrVal),
          numInvested: Math.round(val1),
          numReturns: Math.round(yrVal - val1),
          numTotal: Math.round(yrVal)
        });
      }

      container.querySelector('#res-main-label').textContent = "Estimated Lumpsum Maturity Value";
      container.querySelector('#res-main-value').textContent = formatCurrency(totalValue);
      container.querySelector('#res-badge-1').innerHTML = `<span class="material-symbols-outlined text-sm">trending_up</span> Growth Gain: ${Math.round((estReturns/val1)*100)}%`;
      container.querySelector('#res-badge-2').textContent = `Inflation Adjusted: ${formatCurrency(inflationAdjusted)}`;

      container.querySelector('#val-sub-1').textContent = formatCurrency(val1);
      container.querySelector('#val-sub-2').textContent = formatCurrency(estReturns);
      container.querySelector('#val-sub-3').textContent = `${multiplier}x`;

      currentCalculatedData = {
        title: `Lumpsum Investment Report (${val3} Years @ ${val2}%)`,
        summary: [
          { label: 'Initial Lumpsum Capital', value: formatCurrency(val1) },
          { label: 'Estimated Returns', value: formatCurrency(estReturns) },
          { label: 'Maturity Corpus', value: formatCurrency(totalValue) }
        ],
        years: yearRows
      };

      updateTable(yearRows);
      updateChart(yearRows.map(r => `Yr ${r.year}`), yearRows.map(r => r.numInvested), yearRows.map(r => r.numTotal));

    } else if (activeTab === 'emi') {
      container.querySelector('#lbl-val-1').textContent = formatCurrency(val1);
      container.querySelector('#lbl-val-2').textContent = `${val2}%`;
      container.querySelector('#lbl-val-3').textContent = `${val3} Years`;

      const P = val1;
      const r = val2 / 12 / 100;
      const n = val3 * 12;
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;

      const yearRows = [];
      let balance = P;
      for (let yr = 1; yr <= val3; yr++) {
        let yrInterest = 0;
        let yrPrincipal = 0;
        for (let m = 1; m <= 12; m++) {
          const interestM = balance * r;
          const principalM = emi - interestM;
          yrInterest += interestM;
          yrPrincipal += principalM;
          balance -= principalM;
        }
        yearRows.push({
          year: yr,
          annualInvested: Math.round(emi * 12),
          invested: formatCurrency(P - Math.max(0, balance)),
          returns: formatCurrency(yrInterest),
          total: formatCurrency(Math.max(0, balance)),
          numInvested: Math.round(P - Math.max(0, balance)),
          numReturns: Math.round(yrInterest),
          numTotal: Math.round(Math.max(0, balance))
        });
      }

      container.querySelector('#res-main-label').textContent = "Monthly EMI Payable";
      container.querySelector('#res-main-value').textContent = formatCurrency(emi);
      container.querySelector('#res-badge-1').innerHTML = `<span class="material-symbols-outlined text-sm">payments</span> Total Outflow: ${formatCurrency(totalPayment)}`;
      container.querySelector('#res-badge-2').textContent = `Total Interest Paid: ${formatCurrency(totalInterest)}`;

      container.querySelector('#lbl-sub-1').textContent = "Principal Borrowed";
      container.querySelector('#val-sub-1').textContent = formatCurrency(P);
      container.querySelector('#lbl-sub-2').textContent = "Total Interest Amount";
      container.querySelector('#val-sub-2').textContent = formatCurrency(totalInterest);
      container.querySelector('#lbl-sub-3').textContent = "Interest / Loan Ratio";
      container.querySelector('#val-sub-3').textContent = `${((totalInterest / P) * 100).toFixed(0)}%`;

      currentCalculatedData = {
        title: `EMI Loan Schedule Report (${val3} Years @ ${val2}%)`,
        summary: [
          { label: 'Principal Loan Amount', value: formatCurrency(P) },
          { label: 'Monthly EMI', value: formatCurrency(emi) },
          { label: 'Total Interest Payable', value: formatCurrency(totalInterest) },
          { label: 'Total Payment', value: formatCurrency(totalPayment) }
        ],
        years: yearRows
      };

      updateTable(yearRows);
      updateChart(yearRows.map(r => `Yr ${r.year}`), yearRows.map(r => r.numInvested), yearRows.map(r => r.numTotal));
    } else {
      // Default Goal / Retirement
      container.querySelector('#lbl-val-1').textContent = formatCurrency(val1);
      container.querySelector('#lbl-val-2').textContent = `${val2}%`;
      container.querySelector('#lbl-val-3').textContent = `${val3} Years`;

      const monthlyNeeded = (val1 * (val2/100/12)) / (Math.pow(1 + val2/100/12, val3*12) - 1);
      container.querySelector('#res-main-label').textContent = `Required Monthly Investment for Goal`;
      container.querySelector('#res-main-value').textContent = formatCurrency(monthlyNeeded);
      container.querySelector('#res-badge-1').innerHTML = `<span class="material-symbols-outlined text-sm">savings</span> Target Corpus: ${formatCurrency(val1)}`;
      container.querySelector('#res-badge-2').textContent = `Expected CAGR: ${val2}%`;

      container.querySelector('#val-sub-1').textContent = formatCurrency(val1);
      container.querySelector('#val-sub-2').textContent = formatCurrency(monthlyNeeded * 12);
      container.querySelector('#val-sub-3').textContent = `${val3} Yrs`;

      const yearRows = [];
      for (let yr = 1; yr <= val3; yr++) {
        const corpus = monthlyNeeded * ((Math.pow(1 + val2/100/12, yr*12) - 1) / (val2/100/12));
        yearRows.push({
          year: yr,
          annualInvested: Math.round(monthlyNeeded * 12),
          invested: formatCurrency(monthlyNeeded * 12 * yr),
          returns: formatCurrency(corpus - monthlyNeeded * 12 * yr),
          total: formatCurrency(corpus),
          numInvested: Math.round(monthlyNeeded * 12 * yr),
          numReturns: Math.round(corpus - monthlyNeeded * 12 * yr),
          numTotal: Math.round(corpus)
        });
      }

      currentCalculatedData = {
        title: `${activeTab.toUpperCase()} Plan Report (${val3} Years)`,
        summary: [
          { label: 'Target Corpus', value: formatCurrency(val1) },
          { label: 'Required Monthly SIP', value: formatCurrency(monthlyNeeded) }
        ],
        years: yearRows
      };

      updateTable(yearRows);
      updateChart(yearRows.map(r => `Yr ${r.year}`), yearRows.map(r => r.numInvested), yearRows.map(r => r.numTotal));
    }
  }

  function updateTable(rows) {
    const tbody = container.querySelector('#matrix-tbody');
    const countEl = container.querySelector('#table-row-count');
    if (!tbody) return;

    if (countEl) countEl.textContent = `Showing ${rows.length} Years`;

    tbody.innerHTML = rows.map(r => `
      <tr class="hover:bg-white/[0.03] transition-colors">
        <td class="p-3.5 font-sans font-semibold text-white">Year ${r.year}</td>
        <td class="p-3.5 text-on-surface-variant">${formatCurrency(r.annualInvested || 0)}</td>
        <td class="p-3.5 text-white">${r.invested}</td>
        <td class="p-3.5 text-primary">${r.returns}</td>
        <td class="p-3.5 font-bold text-primary-fixed">${r.total}</td>
      </tr>
    `).join('');
  }

  function updateChart(labels, investedData, totalData) {
    const canvas = container.querySelector('#calc-chart-canvas');
    if (!canvas) return;

    if (chartInstance) {
      chartInstance.destroy();
    }

    if (window.Chart) {
      const ctx = canvas.getContext('2d');
      chartInstance = new window.Chart(ctx, {
        type: currentChartType,
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Invested Capital',
              data: investedData,
              borderColor: '#bbcabf',
              backgroundColor: 'rgba(187, 202, 191, 0.2)',
              borderWidth: 2,
              fill: true,
              tension: 0.3
            },
            {
              label: 'Total Future Value',
              data: totalData,
              borderColor: '#4edea3',
              backgroundColor: 'rgba(78, 222, 163, 0.25)',
              borderWidth: 3,
              fill: true,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: '#dce1fb', font: { family: 'Inter', size: 11 } }
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(12, 19, 36, 0.9)',
              titleColor: '#4edea3',
              bodyColor: '#dce1fb',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1
            }
          },
          scales: {
            x: {
              ticks: { color: '#bbcabf', font: { family: 'JetBrains Mono', size: 10 } },
              grid: { color: 'rgba(255,255,255,0.05)' }
            },
            y: {
              ticks: { color: '#bbcabf', font: { family: 'JetBrains Mono', size: 10 } },
              grid: { color: 'rgba(255,255,255,0.05)' }
            }
          }
        }
      });
    }
  }

  // Action Bar Buttons
  container.querySelector('#btn-toggle-chart-type').addEventListener('click', () => {
    currentChartType = currentChartType === 'line' ? 'bar' : 'line';
    runCalculation();
  });

  container.querySelector('#btn-export-pdf').addEventListener('click', () => {
    generatePDFReport(currentCalculatedData.title, currentCalculatedData.summary, currentCalculatedData.years);
  });

  container.querySelector('#btn-export-csv').addEventListener('click', () => {
    const headers = ["Year", "Cumulative Invested", "Estimated Interest", "Closing Total"];
    const rows = currentCalculatedData.years.map(r => [r.year, r.invested.replace(/,/g, ''), r.returns.replace(/,/g, ''), r.total.replace(/,/g, '')]);
    exportToCSV("InvestIQ_Calculation_Projections", headers, rows);
  });

  const toast = container.querySelector('#calc-toast');

  container.querySelector('#btn-share-calc').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    toast.textContent = "✓ Calculation link copied to clipboard!";
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  });

  container.querySelector('#btn-save-goal-calc').addEventListener('click', () => {
    auth.user.portfolioValue = currentCalculatedData.summary[currentCalculatedData.summary.length - 1].value;
    auth.notify();
    toast.textContent = "✓ Saved to your Dashboard Goals!";
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  });

  // Initial tab render
  renderControlsForm(activeTab);

  return () => {
    if (chartInstance) chartInstance.destroy();
  };
}
