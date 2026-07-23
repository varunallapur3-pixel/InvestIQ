export function renderLearnPage(container) {
  container.innerHTML = `
    <div class="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">Financial Learning Hub & Market News</h1>
          <p class="text-on-surface-variant text-xs sm:text-sm mt-1">Master compounding, asset allocation, inflation hedging, and real-time market updates.</p>
        </div>
      </div>

      <!-- Quick Interactive Tool: Rule of 72 Calculator -->
      <div class="glass-card rounded-3xl p-6 sm:p-8 border border-primary/30 relative overflow-hidden shadow-2xl">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div class="md:col-span-7 space-y-3">
            <div class="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <span class="material-symbols-outlined text-base">auto_awesome</span> Interactive Financial Rule
            </div>
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-white">Rule of 72: Money Doubling Calculator</h2>
            <p class="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
              The Rule of 72 is a quick shortcut to estimate how many years it will take to double your money at a given annual interest rate. Formula: <code>Years = 72 / Return Rate</code>.
            </p>
          </div>

          <div class="md:col-span-5 glass-card bg-surface-container/80 rounded-2xl p-5 border border-white/10 space-y-4">
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-on-surface-variant">Expected Return Rate (% p.a)</span>
                <span class="text-primary font-mono font-bold" id="r72-rate-val">12%</span>
              </div>
              <input type="range" id="r72-slider" min="1" max="36" value="12" class="w-full slider-thumb"/>
            </div>

            <div class="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <span class="text-[11px] text-on-surface-variant uppercase font-semibold block">Time to Double Your Money</span>
              <div class="font-display text-3xl font-bold text-primary mt-1" id="r72-years-val">6.0 Years</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Educational Articles Grid -->
      <section class="space-y-4">
        <h2 class="font-display text-xl font-bold text-white">Core Wealth Principles</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="glass-card glass-card-interactive rounded-3xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div class="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 border border-primary/20">
                <span class="material-symbols-outlined text-xl">trending_up</span>
              </div>
              <h3 class="font-display text-lg font-bold text-white mb-2">The 8th Wonder: Compounding</h3>
              <p class="text-on-surface-variant text-xs leading-relaxed">
                Compounding returns generate yield not just on your initial capital, but on previous accumulated interest. Starting 5 years earlier can double your retirement corpus.
              </p>
            </div>
            <a href="#calculator?type=sip" class="text-xs text-primary font-bold flex items-center gap-1 hover:translate-x-1 transition-transform">
              Simulate Compounding <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <!-- Card 2 -->
          <div class="glass-card glass-card-interactive rounded-3xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div class="w-10 h-10 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-4 border border-tertiary/20">
                <span class="material-symbols-outlined text-xl">request_quote</span>
              </div>
              <h3 class="font-display text-lg font-bold text-white mb-2">Beating Inflation Drag</h3>
              <p class="text-on-surface-variant text-xs leading-relaxed">
                If inflation is 6% p.a., keeping money in cash causes a 50% loss in real purchasing power over 12 years. Equity SIPs (14%) protect your future lifestyle.
              </p>
            </div>
            <a href="#calculator?type=inflation" class="text-xs text-tertiary font-bold flex items-center gap-1 hover:translate-x-1 transition-transform">
              Calculate Inflation Loss <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <!-- Card 3 -->
          <div class="glass-card glass-card-interactive rounded-3xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div class="w-10 h-10 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 border border-secondary/20">
                <span class="material-symbols-outlined text-xl">pie_chart</span>
              </div>
              <h3 class="font-display text-lg font-bold text-white mb-2">Strategic Asset Allocation</h3>
              <p class="text-on-surface-variant text-xs leading-relaxed">
                Diversify across Equity (growth), Gold (macro hedge), and Fixed Income (stability). Asset allocation explains over 90% of long-term portfolio return variance.
              </p>
            </div>
            <a href="#compare" class="text-xs text-secondary font-bold flex items-center gap-1 hover:translate-x-1 transition-transform">
              View Asset Matrix <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Financial News Feed -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="font-display text-xl font-bold text-white">Latest Financial News & Market Insights</h2>
          <span class="text-xs text-primary font-mono flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Live News Feed
          </span>
        </div>

        <div class="glass-card rounded-3xl p-6 border border-white/10 space-y-4 divide-y divide-white/5">
          <div class="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-bold text-primary uppercase tracking-wider">RBI Policy Update</span>
              <h3 class="font-bold text-sm text-white hover:text-primary transition-colors mt-0.5">RBI Keeps Repo Rate Unchanged at 6.5%: Positive Outlook for Equity SIP Investors</h3>
              <p class="text-xs text-on-surface-variant mt-1">The Monetary Policy Committee voted to maintain benchmark interest rates, providing stability for debt and equity mutual fund inflows.</p>
            </div>
            <span class="text-[11px] text-on-surface-variant font-mono whitespace-nowrap">2 Hours Ago</span>
          </div>

          <div class="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-bold text-secondary uppercase tracking-wider">Mutual Fund Industry</span>
              <h3 class="font-bold text-sm text-white hover:text-primary transition-colors mt-0.5">SIP Inflows Reach Record ₹23,500 Crore Mark in India</h3>
              <p class="text-xs text-on-surface-variant mt-1">Retail investors continue systematic wealth creation with monthly SIP accounts crossing 8.4 Crore active folios nationwide.</p>
            </div>
            <span class="text-[11px] text-on-surface-variant font-mono whitespace-nowrap">5 Hours Ago</span>
          </div>

          <div class="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-bold text-tertiary uppercase tracking-wider">Gold & Sovereign Bonds</span>
              <h3 class="font-bold text-sm text-white hover:text-primary transition-colors mt-0.5">Sovereign Gold Bonds (SGB) Deliver 14.8% Annualized Returns on Tranche Series IV</h3>
              <p class="text-xs text-on-surface-variant mt-1">Gold price rally coupled with 2.5% p.a. sovereign interest yields strong risk-adjusted returns for long-term holders.</p>
            </div>
            <span class="text-[11px] text-on-surface-variant font-mono whitespace-nowrap">1 Day Ago</span>
          </div>
        </div>
      </section>

      <!-- Financial Literacy Quiz Card -->
      <div class="glass-card rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-surface-container to-surface-container-high border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <span class="text-xs font-bold text-primary uppercase tracking-wider">Test Your Financial IQ</span>
          <h3 class="font-display text-2xl font-bold text-white">Ready for a 2-Minute Financial Quiz?</h3>
          <p class="text-xs text-on-surface-variant">Evaluate your knowledge on tax efficiency, compounding rules, and risk management to earn your "Investor IQ" badge.</p>
        </div>
        <button id="btn-start-quiz" class="px-6 py-3.5 rounded-xl bg-primary text-[#0c1324] font-headline font-bold text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(78,222,163,0.3)] whitespace-nowrap">
          Take Financial Quiz
        </button>
      </div>

    </div>
  `;

  // Rule of 72 Interactive Slider Logic
  const r72Slider = container.querySelector('#r72-slider');
  const r72RateVal = container.querySelector('#r72-rate-val');
  const r72YearsVal = container.querySelector('#r72-years-val');

  if (r72Slider) {
    r72Slider.addEventListener('input', (e) => {
      const rate = parseFloat(e.target.value);
      const years = (72 / rate).toFixed(1);
      r72RateVal.textContent = `${rate}%`;
      r72YearsVal.textContent = `${years} Years`;
    });
  }

  // Quiz Modal Trigger
  container.querySelector('#btn-start-quiz').addEventListener('click', () => {
    alert("Financial IQ Quiz Question 1/3:\nIf you invest ₹10,000 in an ELSS Tax Saver fund under Section 80C, how long is the mandatory lock-in period?\n\nAnswer: 3 Years (Lowest lock-in among 80C options!)");
  });

  return () => {};
}
