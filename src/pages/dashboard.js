import { auth } from '../components/auth.js';
import { formatCurrency } from '../components/currency.js';

export function renderDashboardPage(container) {
  const user = auth.user;

  container.innerHTML = `
    <div class="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      <!-- User Welcome & Snapshot Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-card rounded-3xl p-5 sm:p-8 border border-white/10">
        <div class="flex items-center gap-3.5 sm:gap-4">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 border-2 border-primary/40 overflow-hidden flex items-center justify-center shadow-lg shrink-0">
            <img src="${user.avatar}" alt="${user.name}" class="w-full h-full object-cover"/>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs text-on-surface-variant font-medium">Welcome back,</span>
              <span class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">${user.tier}</span>
            </div>
            <h1 class="font-display text-xl sm:text-3xl font-bold text-white">${user.name}</h1>
          </div>
        </div>

        <div class="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto">
          <button id="btn-add-goal" class="flex-1 md:flex-initial px-4 sm:px-5 py-2.5 rounded-xl bg-primary text-[#0c1324] font-headline font-semibold text-xs hover:scale-105 transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)] flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-base">add</span>
            New Financial Goal
          </button>
          <button id="btn-dashboard-logout" class="px-3.5 sm:px-4 py-2.5 rounded-xl glass-card text-on-surface-variant hover:text-white font-medium text-xs border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap">
            <span class="material-symbols-outlined text-base">logout</span>
            <span class="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>

      <!-- Portfolio & Gamification Dashboard Grid -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Main Portfolio Card (8 Cols) -->
        <div class="lg:col-span-8 glass-card rounded-3xl p-5 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[340px] border border-white/10">
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 sm:w-48 h-40 sm:h-48 bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
          
          <div class="relative z-10">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span class="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Total Net Wealth Portfolio</span>
              <span class="text-xs text-primary font-mono bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 flex items-center gap-1 w-fit">
                <span class="material-symbols-outlined text-sm">trending_up</span> +14.2% YTD Yield
              </span>
            </div>
            <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 sm:mt-3 tracking-tight">${formatCurrency(12545670)}</h2>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div class="bg-surface-container/60 p-3.5 sm:p-4 rounded-2xl border border-white/5">
                <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium">Monthly Active SIP</p>
                <p class="font-mono text-lg sm:text-2xl font-semibold text-white mt-1">${formatCurrency(25000)}<span class="text-xs text-on-surface-variant font-normal">/mo</span></p>
              </div>
              <div class="bg-surface-container/60 p-3.5 sm:p-4 rounded-2xl border border-white/5">
                <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium">Active Goals</p>
                <p class="font-mono text-lg sm:text-2xl font-semibold text-white mt-1" id="goal-count-display">03 Goals</p>
              </div>
              <div class="bg-surface-container/60 p-3.5 sm:p-4 rounded-2xl border border-white/5 col-span-2 sm:col-span-1">
                <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium">Est. 10Y Return</p>
                <p class="font-mono text-lg sm:text-2xl font-semibold text-primary mt-1">+${formatCurrency(6240000)}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Gamification Card (4 Cols) -->
        <div class="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
          <!-- Savings Score Card -->
          <div class="glass-card rounded-3xl p-5 sm:p-6 border-tertiary/20 flex flex-col items-center text-center">
            <span class="text-xs font-semibold text-tertiary uppercase tracking-widest mb-3">Savings Health Score</span>
            <div class="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              <svg class="w-full h-full transform -rotate-90">
                <circle class="text-surface-container-high" cx="64" cy="64" r="50" fill="transparent" stroke="currentColor" stroke-width="8"/>
                <circle class="text-tertiary drop-shadow-[0_0_10px_rgba(255,185,95,0.5)] transition-all duration-1000" cx="64" cy="64" r="50" fill="transparent" stroke="currentColor" stroke-dasharray="314" stroke-dashoffset="45" stroke-width="8"/>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="font-display text-2xl sm:text-3xl font-bold text-tertiary" id="savings-score-val">${user.savingsScore}</span>
                <span class="text-[10px] text-on-surface-variant uppercase font-semibold">Excellent</span>
              </div>
            </div>
            <p class="mt-3 text-xs text-on-surface-variant">Top 5% among investors with similar profile.</p>
          </div>

          <!-- Investment Streak Card -->
          <div class="glass-card rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-surface-container to-surface-container-high">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xs text-on-surface-variant font-medium">SIP Investment Streak</p>
                <p class="font-display text-xl sm:text-2xl font-bold text-white mt-1">${user.streakDays} Months</p>
              </div>
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary shadow-[0_0_15px_rgba(255,185,95,0.3)]">
                <span class="material-symbols-outlined text-xl sm:text-2xl">local_fire_department</span>
              </div>
            </div>
            <div class="flex gap-2 mt-4">
              <div class="h-2 flex-1 bg-tertiary rounded-full shadow-[0_0_8px_#ffb95f]"></div>
              <div class="h-2 flex-1 bg-tertiary rounded-full shadow-[0_0_8px_#ffb95f]"></div>
              <div class="h-2 flex-1 bg-tertiary rounded-full shadow-[0_0_8px_#ffb95f]"></div>
              <div class="h-2 flex-1 bg-tertiary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Active Financial Goals Trackers -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="font-display text-xl sm:text-2xl font-bold text-white">Active Financial Goals</h2>
          <span class="text-xs text-on-surface-variant">Real-Time Trackers</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" id="goals-container">
          <!-- Goal 1 -->
          <div class="glass-card glass-card-interactive rounded-3xl p-5 sm:p-6 relative group border border-white/10">
            <div class="flex justify-between items-start mb-4">
              <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <span class="material-symbols-outlined text-xl">elderly</span>
              </div>
              <span class="bg-primary/20 text-primary-fixed px-2.5 py-1 rounded-full text-xs font-bold border border-primary/30">64%</span>
            </div>
            <h3 class="font-display text-lg font-bold text-white">Retirement Corpus</h3>
            <p class="text-on-surface-variant text-xs mt-1">${formatCurrency(12800000)} of ${formatCurrency(20000000)} target</p>
            <div class="mt-5 h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full shadow-[0_0_10px_#4edea3]" style="width: 64%"></div>
            </div>
          </div>

          <!-- Goal 2 -->
          <div class="glass-card glass-card-interactive rounded-3xl p-5 sm:p-6 relative group border border-white/10">
            <div class="flex justify-between items-start mb-4">
              <div class="w-11 h-11 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary border border-secondary/20">
                <span class="material-symbols-outlined text-xl">home</span>
              </div>
              <span class="bg-secondary-container/20 text-secondary px-2.5 py-1 rounded-full text-xs font-bold border border-secondary/30">38%</span>
            </div>
            <h3 class="font-display text-lg font-bold text-white">Dream Home Downpayment</h3>
            <p class="text-on-surface-variant text-xs mt-1">${formatCurrency(3800000)} of ${formatCurrency(10000000)} target</p>
            <div class="mt-5 h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div class="h-full bg-secondary rounded-full shadow-[0_0_10px_#b8c4ff]" style="width: 38%"></div>
            </div>
          </div>

          <!-- Goal 3 -->
          <div class="glass-card glass-card-interactive rounded-3xl p-5 sm:p-6 relative group border border-white/10 sm:col-span-2 lg:col-span-1">
            <div class="flex justify-between items-start mb-4">
              <div class="w-11 h-11 rounded-2xl bg-tertiary-container/20 flex items-center justify-center text-tertiary border border-tertiary/20">
                <span class="material-symbols-outlined text-xl">school</span>
              </div>
              <span class="bg-tertiary-container/20 text-tertiary px-2.5 py-1 rounded-full text-xs font-bold border border-tertiary/30">85%</span>
            </div>
            <h3 class="font-display text-lg font-bold text-white">Child Higher Education Fund</h3>
            <p class="text-on-surface-variant text-xs mt-1">${formatCurrency(4250000)} of ${formatCurrency(5000000)} target</p>
            <div class="mt-5 h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div class="h-full bg-tertiary rounded-full shadow-[0_0_10px_#ffb95f]" style="width: 85%"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Add Goal Modal -->
      <div id="modal-add-goal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div class="glass-modal rounded-3xl p-6 sm:p-8 w-full max-w-md space-y-4 border border-white/10">
          <div class="flex justify-between items-center pb-3 border-b border-white/10">
            <h3 class="font-display text-lg font-bold text-white">Create New Financial Goal</h3>
            <button id="btn-close-modal" class="text-on-surface-variant hover:text-white p-1"><span class="material-symbols-outlined">close</span></button>
          </div>
          <form id="form-new-goal" class="space-y-4 text-xs">
            <div>
              <label class="text-on-surface-variant font-medium">Goal Title</label>
              <input type="text" id="goal-title" required placeholder="e.g. Vacation Fund 2026" class="w-full min-h-[42px] px-3.5 rounded-xl bg-surface-container border border-white/10 text-white outline-none focus:border-primary mt-1"/>
            </div>
            <div>
              <label class="text-on-surface-variant font-medium">Target Amount (₹)</label>
              <input type="number" id="goal-target" required min="1000" placeholder="500000" class="w-full min-h-[42px] px-3.5 rounded-xl bg-surface-container border border-white/10 text-white outline-none focus:border-primary font-mono mt-1"/>
            </div>
            <button type="submit" class="w-full min-h-[44px] py-3 rounded-xl bg-primary text-[#0c1324] font-bold text-sm hover:scale-105 transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)]">
              Save Goal & Trigger Confetti
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Handlers
  container.querySelector('#btn-dashboard-logout').addEventListener('click', () => {
    auth.logout();
    window.location.hash = '#login';
  });

  const modal = container.querySelector('#modal-add-goal');
  container.querySelector('#btn-add-goal').addEventListener('click', () => modal.classList.remove('hidden'));
  container.querySelector('#btn-close-modal').addEventListener('click', () => modal.classList.add('hidden'));

  container.querySelector('#form-new-goal').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = container.querySelector('#goal-title').value;
    const target = parseFloat(container.querySelector('#goal-target').value);

    const goalsContainer = container.querySelector('#goals-container');
    const newCard = document.createElement('div');
    newCard.className = "glass-card glass-card-interactive rounded-3xl p-5 sm:p-6 relative group border border-white/10";
    newCard.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
          <span class="material-symbols-outlined text-xl">savings</span>
        </div>
        <span class="bg-primary/20 text-primary-fixed px-2.5 py-1 rounded-full text-xs font-bold border border-primary/30">0%</span>
      </div>
      <h3 class="font-display text-lg font-bold text-white">${title}</h3>
      <p class="text-on-surface-variant text-xs mt-1">₹0 of ${formatCurrency(target)} target</p>
      <div class="mt-5 h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div class="h-full bg-primary rounded-full shadow-[0_0_10px_#4edea3]" style="width: 2%"></div>
      </div>
    `;
    goalsContainer.appendChild(newCard);
    container.querySelector('#goal-count-display').textContent = "04 Goals";
    modal.classList.add('hidden');

    // Trigger Confetti Animation
    if (window.confetti) {
      window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  });

  return () => {};
}
