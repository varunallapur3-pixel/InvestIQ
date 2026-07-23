import { formatCurrency, getCurrencySymbol } from '../components/currency.js';

export function renderComparisonPage(container) {
  let chartInstance = null;

  container.innerHTML = `
    <div class="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">Institutional Asset Class Matrix</h1>
          <p class="text-on-surface-variant text-xs sm:text-sm mt-1">Benchmark historical yields, volatility indices, tax drag, and real purchasing power across 9 asset classes over 10 years.</p>
        </div>
        <button id="btn-open-sim" class="px-5 py-2.5 rounded-xl bg-primary text-[#0c1324] font-headline font-semibold text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(78,222,163,0.3)] flex items-center justify-center gap-1.5 self-start sm:self-auto">
          <span class="material-symbols-outlined text-base">tune</span> Custom Hybrid Simulator
        </button>
      </div>

      <!-- Main Visual Multi-Asset Chart & Analytics Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <!-- Multi-Asset Chart Card (8 cols) -->
        <div class="lg:col-span-8 glass-card rounded-3xl p-5 sm:p-8 relative overflow-hidden border border-white/10 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-semibold text-primary uppercase tracking-widest block">10-Year Growth Benchmark (Initial ${formatCurrency(1000000)})</span>
              <div class="flex items-baseline gap-3 mt-1">
                <span class="font-display text-3xl sm:text-5xl font-bold text-white" id="comp-peak-text">${formatCurrency(3840000)}</span>
                <span class="text-xs text-primary font-mono bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">trending_up</span> Equity SIP Outperformance
                </span>
              </div>
            </div>
          </div>

          <!-- Chart.js Multi-Line Canvas -->
          <div class="h-64 sm:h-80 w-full relative">
            <canvas id="comp-chart-canvas"></canvas>
          </div>
        </div>

        <!-- Strategic AI Allocation Insights (4 cols) -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <div class="glass-card rounded-3xl p-5 sm:p-6 border border-primary/20 relative flex flex-col justify-between flex-1 space-y-6">
            <div>
              <div class="flex items-center gap-2 text-primary mb-4">
                <span class="material-symbols-outlined text-xl">auto_awesome</span>
                <span class="font-headline text-xs font-semibold uppercase tracking-wider">InvestIQ Strategic Recommendations</span>
              </div>

              <div class="space-y-4 text-xs">
                <div class="flex gap-3">
                  <div class="w-9 h-9 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                    <span class="material-symbols-outlined text-lg">water_drop</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white">T+2 Liquidity Supremacy</h4>
                    <p class="text-on-surface-variant mt-0.5 leading-relaxed">SIP mutual funds provide instant T+2 business day liquidity compared to physical real estate requiring 6+ months.</p>
                  </div>
                </div>

                <div class="flex gap-3 pt-3 border-t border-white/5">
                  <div class="w-9 h-9 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0 border border-tertiary/20">
                    <span class="material-symbols-outlined text-lg">shield</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white">Sovereign Gold Hedge</h4>
                    <p class="text-on-surface-variant mt-0.5 leading-relaxed">Sovereign Gold Bonds offer 2.5% p.a. guaranteed interest + gold appreciation with zero tax on maturity.</p>
                  </div>
                </div>

                <div class="flex gap-3 pt-3 border-t border-white/5">
                  <div class="w-9 h-9 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 border border-secondary/20">
                    <span class="material-symbols-outlined text-lg">tax</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white">LTCG Tax Drag</h4>
                    <p class="text-on-surface-variant mt-0.5 leading-relaxed">Equity SIPs taxed at 12.5% above ₹1.25L exemption, outperforming FDs taxed at income slab rates (up to 30%).</p>
                  </div>
                </div>
              </div>
            </div>

            <button id="btn-rebalance-hybrid" class="w-full py-3.5 rounded-xl bg-primary text-[#0c1324] font-headline font-semibold text-xs hover:scale-105 transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)]">
              Simulate Recommended 70/20/10 Hybrid Mix
            </button>
          </div>
        </div>
      </div>

      <!-- Detailed 9-Asset Parameter Comparison Table -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="font-display text-xl font-bold text-white">Side-by-Side Parameter Matrix</h2>
          <span class="text-xs text-on-surface-variant font-mono">9 Asset Classes Evaluated</span>
        </div>
        
        <div class="responsive-table-container glass-card rounded-3xl border border-white/10">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-surface-container-high/60 border-b border-white/10 text-[11px] sm:text-xs font-headline text-on-surface-variant uppercase tracking-wider">
                <th class="p-4">Asset Class</th>
                <th class="p-4 text-primary">Avg 10Y Return</th>
                <th class="p-4">Risk Profile</th>
                <th class="p-4">Liquidity</th>
                <th class="p-4">Tax Impact</th>
                <th class="p-4">Volatility Score</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5 text-xs font-mono">
              <tr class="hover:bg-white/[0.02] transition-colors">
                <td class="p-4 font-sans font-bold text-white flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-primary"></span> Equity SIP (Mutual Funds)
                </td>
                <td class="p-4 text-primary font-bold">14.2% p.a.</td>
                <td class="p-4"><span class="px-2.5 py-0.5 bg-error/20 text-error rounded-md text-[10px] font-bold">MODERATE-HIGH</span></td>
                <td class="p-4 text-white">T+2 Days</td>
                <td class="p-4 text-on-surface-variant">LTCG @ 12.5%</td>
                <td class="p-4">7.5/10</td>
              </tr>
              <tr class="hover:bg-white/[0.02] transition-colors">
                <td class="p-4 font-sans font-bold text-white flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-secondary"></span> Real Estate
                </td>
                <td class="p-4 text-secondary font-bold">9.8% p.a.</td>
                <td class="p-4"><span class="px-2.5 py-0.5 bg-tertiary/20 text-tertiary rounded-md text-[10px] font-bold">MEDIUM</span></td>
                <td class="p-4 text-on-surface-variant">Months to Years</td>
                <td class="p-4 text-on-surface-variant">LTCG @ 20%</td>
                <td class="p-4">3.5/10</td>
              </tr>
              <tr class="hover:bg-white/[0.02] transition-colors">
                <td class="p-4 font-sans font-bold text-white flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span> Gold / Sovereign Gold Bonds
                </td>
                <td class="p-4 text-tertiary font-bold">10.5% p.a.</td>
                <td class="p-4"><span class="px-2.5 py-0.5 bg-tertiary/20 text-tertiary rounded-md text-[10px] font-bold">MEDIUM</span></td>
                <td class="p-4 text-white">1 - 2 Days</td>
                <td class="p-4 text-primary">Tax Free on SGB Maturity</td>
                <td class="p-4">4.8/10</td>
              </tr>
              <tr class="hover:bg-white/[0.02] transition-colors">
                <td class="p-4 font-sans font-bold text-white flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span> Public Provident Fund (PPF)
                </td>
                <td class="p-4 text-white">7.1% p.a.</td>
                <td class="p-4"><span class="px-2.5 py-0.5 bg-primary/20 text-primary rounded-md text-[10px] font-bold">ZERO RISK</span></td>
                <td class="p-4 text-on-surface-variant">15 Yr Lock-in</td>
                <td class="p-4 text-primary">Exempt-Exempt-Exempt (EEE)</td>
                <td class="p-4">0.0/10</td>
              </tr>
              <tr class="hover:bg-white/[0.02] transition-colors">
                <td class="p-4 font-sans font-bold text-white flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span> National Pension System (NPS)
                </td>
                <td class="p-4 text-white">11.4% p.a.</td>
                <td class="p-4"><span class="px-2.5 py-0.5 bg-tertiary/20 text-tertiary rounded-md text-[10px] font-bold">MEDIUM</span></td>
                <td class="p-4 text-on-surface-variant">Retirement (Age 60)</td>
                <td class="p-4 text-primary">60% Tax Free lump sum</td>
                <td class="p-4">5.2/10</td>
              </tr>
              <tr class="hover:bg-white/[0.02] transition-colors">
                <td class="p-4 font-sans font-bold text-white flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-gray-400"></span> Bank Fixed Deposit (FD)
                </td>
                <td class="p-4 text-on-surface-variant">6.5% p.a.</td>
                <td class="p-4"><span class="px-2.5 py-0.5 bg-primary/20 text-primary rounded-md text-[10px] font-bold">LOW</span></td>
                <td class="p-4 text-white">Instant (1% Penalty)</td>
                <td class="p-4 text-error">Income Tax Slab Rate</td>
                <td class="p-4">0.5/10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Custom Simulator Modal -->
      <div id="modal-sim" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div class="glass-modal rounded-3xl p-6 sm:p-8 w-full max-w-md space-y-4 border border-white/10">
          <div class="flex justify-between items-center pb-3 border-b border-white/10">
            <h3 class="font-display text-lg font-bold text-white">Custom Hybrid Portfolio Simulator</h3>
            <button id="close-sim" class="text-on-surface-variant hover:text-white p-1"><span class="material-symbols-outlined">close</span></button>
          </div>
          
          <div class="space-y-4 text-xs">
            <div>
              <label class="text-on-surface-variant font-medium">Initial Capital (${getCurrencySymbol()})</label>
              <input type="number" id="sim-capital" value="1000000" class="w-full min-h-[40px] px-3 rounded-xl bg-surface-container border border-white/10 text-white font-mono outline-none mt-1"/>
            </div>

            <div>
              <label class="text-on-surface-variant font-medium">Equity SIP Allocation: <span id="lbl-eq-pct" class="text-primary font-bold">70%</span></label>
              <input type="range" id="sim-eq-pct" min="0" max="100" value="70" class="w-full slider-thumb mt-1"/>
            </div>

            <div>
              <label class="text-on-surface-variant font-medium">Gold / Debt Allocation: <span id="lbl-gold-pct" class="text-tertiary font-bold">30%</span></label>
              <input type="range" id="sim-gold-pct" min="0" max="100" value="30" class="w-full slider-thumb mt-1"/>
            </div>

            <button id="btn-calc-hybrid" class="w-full py-3 rounded-xl bg-primary text-[#0c1324] font-bold text-sm hover:scale-105 transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)]">
              Calculate Projected 10Y Yield
            </button>

            <div id="sim-result-box" class="hidden p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center space-y-1">
              <span class="text-[11px] text-on-surface-variant">Projected 10-Year Hybrid Value</span>
              <div class="font-display text-2xl font-bold text-primary" id="sim-result-val">₹ 34,25,000</div>
              <span class="text-[10px] text-primary-fixed block">Estimated CAGR: 13.1% p.a.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;

  // Init Chart.js Multi-line Graph
  if (window.Chart) {
    const canvas = container.querySelector('#comp-chart-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const years = [2015, 2017, 2019, 2021, 2023, 2025];
      
      chartInstance = new window.Chart(ctx, {
        type: 'line',
        data: {
          labels: years,
          datasets: [
            {
              label: 'Equity SIP (14.2%)',
              data: [10, 13.0, 17.0, 22.8, 30.5, 38.4],
              borderColor: '#4edea3',
              backgroundColor: 'rgba(78, 222, 163, 0.1)',
              borderWidth: 3,
              tension: 0.3
            },
            {
              label: 'Real Estate (9.8%)',
              data: [10, 12.0, 14.5, 17.5, 21.2, 25.4],
              borderColor: '#b8c4ff',
              borderWidth: 2,
              tension: 0.3
            },
            {
              label: 'Gold / SGB (10.5%)',
              data: [10, 12.2, 14.9, 18.2, 22.4, 27.1],
              borderColor: '#ffb95f',
              borderWidth: 2,
              tension: 0.3
            },
            {
              label: 'Fixed Deposit (6.5%)',
              data: [10, 11.3, 12.8, 14.5, 16.5, 18.7],
              borderColor: '#bbcabf',
              borderDash: [5, 5],
              borderWidth: 2,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#dce1fb', font: { family: 'Inter', size: 11 } } },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.dataset.label}: ₹${ctx.raw} Lakhs`
              }
            }
          },
          scales: {
            x: { ticks: { color: '#bbcabf', font: { family: 'JetBrains Mono', size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
            y: {
              ticks: {
                color: '#bbcabf',
                font: { family: 'JetBrains Mono', size: 10 },
                callback: (val) => `₹${val}L`
              },
              grid: { color: 'rgba(255,255,255,0.05)' }
            }
          }
        }
      });
    }
  }

  // Simulator Modal Logic
  const modal = container.querySelector('#modal-sim');
  const btnOpenSim = container.querySelector('#btn-open-sim');
  const btnRebalance = container.querySelector('#btn-rebalance-hybrid');
  const closeSim = container.querySelector('#close-sim');

  btnOpenSim.addEventListener('click', () => modal.classList.remove('hidden'));
  if (btnRebalance) btnRebalance.addEventListener('click', () => modal.classList.remove('hidden'));
  closeSim.addEventListener('click', () => modal.classList.add('hidden'));

  const eqSlider = container.querySelector('#sim-eq-pct');
  const goldSlider = container.querySelector('#sim-gold-pct');
  const lblEq = container.querySelector('#lbl-eq-pct');
  const lblGold = container.querySelector('#lbl-gold-pct');

  eqSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    lblEq.textContent = `${val}%`;
    goldSlider.value = 100 - val;
    lblGold.textContent = `${100 - val}%`;
  });

  goldSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    lblGold.textContent = `${val}%`;
    eqSlider.value = 100 - val;
    lblEq.textContent = `${100 - val}%`;
  });

  container.querySelector('#btn-calc-hybrid').addEventListener('click', () => {
    const P = parseFloat(container.querySelector('#sim-capital').value || 1000000);
    const eqPct = parseFloat(eqSlider.value) / 100;
    const goldPct = parseFloat(goldSlider.value) / 100;

    const hybridRate = (eqPct * 0.142) + (goldPct * 0.105);
    const total10Y = P * Math.pow(1 + hybridRate, 10);

    const resBox = container.querySelector('#sim-result-box');
    const resVal = container.querySelector('#sim-result-val');
    resVal.textContent = formatCurrency(total10Y);
    resBox.classList.remove('hidden');
  });

  return () => {
    if (chartInstance) chartInstance.destroy();
  };
}
