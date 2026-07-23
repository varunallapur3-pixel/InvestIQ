export function renderHomePage(container) {
  container.innerHTML = `
    <div class="relative min-h-screen pb-24">
      <!-- Hero Section -->
      <section class="relative min-h-[90vh] flex items-center justify-center pt-24 px-4 sm:px-6 overflow-hidden">
        <div class="relative z-10 max-w-5xl mx-auto text-center px-4">
          <!-- AI Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card text-primary mb-8 border border-primary/20 shadow-[0_0_20px_rgba(78,222,163,0.15)]">
            <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span class="font-headline text-xs uppercase tracking-widest font-semibold">New: AI Wealth Engine & Step-Up Forecasting v3.6</span>
          </div>

          <!-- Headline -->
          <h1 class="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 font-bold tracking-tight leading-[1.1] text-white">
            Build Wealth. <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-primary">One SIP at a Time.</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-on-surface-variant text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Plan your investments with intelligent financial calculators powered by real-world projections. High-precision compounding data for high-growth futures.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#calculator" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-[#0c1324] font-headline font-bold text-base hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(78,222,163,0.35)] flex items-center justify-center gap-2 group">
              Start Calculating
              <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a href="#compare" class="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-white font-headline font-semibold text-base border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-primary text-xl">insights</span>
              Explore Financial Tools
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="mt-20 pt-10 border-t border-white/10">
            <p class="font-headline text-xs text-on-surface-variant uppercase tracking-widest mb-6 opacity-70">Trusted by Over 45,000 High-Net-Worth Investors</p>
            <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-70 hover:opacity-100 transition-opacity">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-xl">security</span>
                <span class="font-mono text-xs uppercase tracking-wider">ISO 27001 SECURE</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-xl">verified_user</span>
                <span class="font-mono text-xs uppercase tracking-wider">GDPR COMPLIANT</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-xl">shield_with_heart</span>
                <span class="font-mono text-xs uppercase tracking-wider">256-BIT ENCRYPTION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bento Grid Financial Tools Suite -->
      <section class="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div class="mb-12 text-left">
          <h2 class="font-display text-3xl sm:text-5xl font-bold mb-3 text-white">Precision Financial Calculators</h2>
          <p class="text-on-surface-variant max-w-xl text-sm sm:text-base">Every calculator is built on audited compounding algorithms, LTCG tax rules, and inflation adjustments.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <!-- SIP Bento (8 cols) -->
          <div class="md:col-span-8 group relative overflow-hidden glass-card glass-card-interactive rounded-3xl p-8 flex flex-col justify-between min-h-[360px] border border-white/10" onclick="window.location.hash='#calculator?type=sip'">
            <div class="relative z-10">
              <div class="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary">
                <span class="material-symbols-outlined text-2xl">trending_up</span>
              </div>
              <h3 class="font-display text-3xl font-bold mb-3 text-white">Systematic Investment Plan (SIP)</h3>
              <p class="text-on-surface-variant max-w-md text-sm leading-relaxed">Calculate exponential compound growth of your monthly investments with annual step-up adjustments, LTCG tax drag, and inflation forecasting.</p>
            </div>
            <div class="relative z-10 flex items-end justify-between mt-10">
              <div>
                <span class="text-4xl font-mono font-bold text-primary">14.2%</span>
                <span class="text-xs text-on-surface-variant uppercase block mt-1">10-Yr Historical Nifty Return</span>
              </div>
              <div class="p-4 rounded-full bg-surface-container-high border border-white/10 group-hover:bg-primary group-hover:text-[#0c1324] transition-all">
                <span class="material-symbols-outlined text-xl">calculate</span>
              </div>
            </div>
          </div>

          <!-- Asset Comparison Bento (4 cols) -->
          <div class="md:col-span-4 glass-card glass-card-interactive rounded-3xl p-8 flex flex-col justify-between border border-white/10" onclick="window.location.hash='#compare'">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-secondary-container/20 border border-secondary/20 flex items-center justify-center mb-6 text-secondary">
                <span class="material-symbols-outlined text-2xl">insights</span>
              </div>
              <h3 class="font-display text-2xl font-bold mb-3 text-white">Asset Class Comparison</h3>
              <p class="text-on-surface-variant text-sm leading-relaxed">Benchmark Equity SIPs against Real Estate, Physical Gold, Fixed Deposits, PPF, and Crypto in real-time.</p>
            </div>
            <div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span class="text-primary font-headline text-xs font-semibold uppercase tracking-wider">Launch Comparison Matrix</span>
              <span class="material-symbols-outlined text-primary text-base">north_east</span>
            </div>
          </div>

          <!-- Mutual Fund Directory Bento (4 cols) -->
          <div class="md:col-span-4 glass-card glass-card-interactive rounded-3xl p-8 flex flex-col justify-between border border-white/10" onclick="window.location.hash='#funds'">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-tertiary-container/20 border border-tertiary/20 flex items-center justify-center mb-6 text-tertiary">
                <span class="material-symbols-outlined text-2xl">travel_explore</span>
              </div>
              <h3 class="font-display text-2xl font-bold mb-3 text-white">Mutual Fund Explorer</h3>
              <p class="text-on-surface-variant text-sm leading-relaxed">Explore zero-commission direct funds filtered by Risk, Returns, Category, AUM, and Expense Ratio.</p>
            </div>
            <div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span class="text-primary font-headline text-xs font-semibold uppercase tracking-wider">Explore Mutual Funds</span>
              <span class="material-symbols-outlined text-primary text-base">north_east</span>
            </div>
          </div>

          <!-- EMI Amortization Bento (8 cols) -->
          <div class="md:col-span-8 glass-card glass-card-interactive rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-white/10" onclick="window.location.hash='#calculator?type=emi'">
            <div class="flex-1">
              <div class="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary">
                <span class="material-symbols-outlined text-2xl">real_estate_agent</span>
              </div>
              <h3 class="font-display text-3xl font-bold mb-3 text-white">EMI & Debt Amortization</h3>
              <p class="text-on-surface-variant text-sm leading-relaxed">Master loan repayments with amortized interest schedules. View principal vs interest ratios instantly.</p>
            </div>
            <div class="flex-1 w-full">
              <div class="glass-card bg-surface-container-high/40 rounded-2xl p-6 border border-white/10">
                <div class="h-3 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                  <div class="h-full w-[65%] bg-primary shadow-[0_0_12px_rgba(78,222,163,0.6)]"></div>
                </div>
                <div class="flex justify-between font-mono text-xs text-on-surface-variant uppercase">
                  <span>Principal: 65%</span>
                  <span>Interest: 35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Waitlist Form Section -->
      <section class="py-16 px-4 sm:px-8 max-w-5xl mx-auto relative">
        <div class="glass-card border border-primary/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none"></div>
          <h2 class="font-display text-3xl sm:text-5xl font-bold mb-4 text-white">Ready to secure your <br/><span class="text-primary">financial freedom?</span></h2>
          <p class="text-on-surface-variant text-sm sm:text-base max-w-md mx-auto mb-8">Join InvestIQ Pro to unlock automated rebalancing, tax-loss harvesting, and AI-driven wealth advice.</p>
          
          <form id="home-waitlist-form" class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="Enter your email address" class="w-full px-5 py-3.5 rounded-xl bg-surface-container border border-white/10 focus:border-primary outline-none text-white text-sm transition-all"/>
            <button type="submit" class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary text-[#0c1324] font-headline font-bold text-sm hover:scale-105 transition-transform whitespace-nowrap shadow-[0_0_20px_rgba(78,222,163,0.3)]">
              Join Pro Access
            </button>
          </form>
          <div id="waitlist-toast" class="hidden mt-4 text-xs font-semibold text-primary">✓ You're on the list! Confirmation sent to your email.</div>
        </div>
      </section>
    </div>
  `;

  // Waitlist form
  const waitlistForm = container.querySelector('#home-waitlist-form');
  const waitlistToast = container.querySelector('#waitlist-toast');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      waitlistForm.classList.add('hidden');
      waitlistToast.classList.remove('hidden');
    });
  }

  return () => {};
}
