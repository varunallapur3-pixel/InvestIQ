export function renderContactPage(container) {
  container.innerHTML = `
    <div class="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">Support & Frequently Asked Questions</h1>
          <p class="text-on-surface-variant text-xs sm:text-sm mt-1">Get immediate assistance from our financial planning & technical support team.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- FAQ Accordion Section (7 cols) -->
        <section class="lg:col-span-7 space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="font-display text-xl font-bold text-white">Frequently Asked Questions</h2>
            <div class="relative w-48 sm:w-64">
              <input type="text" id="faq-search" placeholder="Search FAQ topics..." class="w-full py-1.5 pl-8 pr-3 rounded-xl bg-surface-container border border-white/10 text-xs text-white outline-none focus:border-primary"/>
              <span class="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            </div>
          </div>

          <div class="space-y-3" id="faq-list">
            <!-- FAQ 1 -->
            <div class="glass-card rounded-2xl border border-white/10 overflow-hidden faq-item">
              <button class="w-full p-4 text-left font-bold text-sm text-white flex justify-between items-center faq-toggle">
                <span>What is a Systematic Investment Plan (SIP) and how does it work?</span>
                <span class="material-symbols-outlined text-primary transition-transform icon-chevron">expand_more</span>
              </button>
              <div class="px-4 pb-4 text-xs text-on-surface-variant leading-relaxed hidden faq-answer">
                A SIP allows you to invest a fixed amount regularly (monthly, quarterly, or yearly) in mutual funds. It leverages Rupee Cost Averaging to purchase more units when prices are low and fewer units when prices are high, smoothing out market volatility.
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="glass-card rounded-2xl border border-white/10 overflow-hidden faq-item">
              <button class="w-full p-4 text-left font-bold text-sm text-white flex justify-between items-center faq-toggle">
                <span>How is LTCG Tax calculated on Mutual Fund gains in India?</span>
                <span class="material-symbols-outlined text-primary transition-transform icon-chevron">expand_more</span>
              </button>
              <div class="px-4 pb-4 text-xs text-on-surface-variant leading-relaxed hidden faq-answer">
                Long Term Capital Gains (LTCG) on Equity Mutual Funds held for more than 12 months are taxed at 12.5% on capital gains exceeding ₹1,25,000 in a single financial year (as per Budget 2024 revised slabs).
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="glass-card rounded-2xl border border-white/10 overflow-hidden faq-item">
              <button class="w-full p-4 text-left font-bold text-sm text-white flex justify-between items-center faq-toggle">
                <span>What is the Step-Up SIP option and why should I use it?</span>
                <span class="material-symbols-outlined text-primary transition-transform icon-chevron">expand_more</span>
              </button>
              <div class="px-4 pb-4 text-xs text-on-surface-variant leading-relaxed hidden faq-answer">
                Step-Up SIP automatically increases your monthly investment by a fixed percentage (e.g. 10%) every year in line with annual salary increments. A 10% annual step-up can double your final maturity corpus over 15 years.
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="glass-card rounded-2xl border border-white/10 overflow-hidden faq-item">
              <button class="w-full p-4 text-left font-bold text-sm text-white flex justify-between items-center faq-toggle">
                <span>Are my calculations and personal financial data secure?</span>
                <span class="material-symbols-outlined text-primary transition-transform icon-chevron">expand_more</span>
              </button>
              <div class="px-4 pb-4 text-xs text-on-surface-variant leading-relaxed hidden faq-answer">
                Yes. InvestIQ uses bank-grade 256-bit AES client-side encryption and ISO 27001 compliant infrastructure. We never sell or share user financial data with third parties.
              </div>
            </div>
          </div>
        </section>

        <!-- Contact & Feedback Form Section (5 cols) -->
        <section class="lg:col-span-5 space-y-6">
          <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
            <div class="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <span class="material-symbols-outlined text-base">support_agent</span> 24/7 Advisor Support
            </div>
            <h2 class="font-display text-xl font-bold text-white">Send Us a Message</h2>
            
            <form id="contact-form" class="space-y-3.5 text-xs">
              <div>
                <label class="text-on-surface-variant font-medium">Your Full Name</label>
                <input type="text" required placeholder="Alex Rivers" class="w-full min-h-[42px] px-3.5 rounded-xl bg-surface-container border border-white/10 text-white outline-none focus:border-primary mt-1"/>
              </div>

              <div>
                <label class="text-on-surface-variant font-medium">Email Address</label>
                <input type="email" required placeholder="name@domain.com" class="w-full min-h-[42px] px-3.5 rounded-xl bg-surface-container border border-white/10 text-white outline-none focus:border-primary mt-1"/>
              </div>

              <div>
                <label class="text-on-surface-variant font-medium">Inquiry Category</label>
                <select class="w-full min-h-[42px] px-3 rounded-xl bg-surface-container border border-white/10 text-white outline-none focus:border-primary mt-1">
                  <option value="calculator">SIP / Calculation Query</option>
                  <option value="advisor">Financial Planning Advice</option>
                  <option value="technical">Technical Support</option>
                </select>
              </div>

              <div>
                <label class="text-on-surface-variant font-medium">Your Message</label>
                <textarea rows="3" required placeholder="How can our financial team assist you today?" class="w-full p-3 rounded-xl bg-surface-container border border-white/10 text-white outline-none focus:border-primary mt-1"></textarea>
              </div>

              <button type="submit" class="w-full py-3 rounded-xl bg-primary text-[#0c1324] font-bold text-xs hover:scale-105 transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)]">
                Submit Support Ticket
              </button>
            </form>

            <div id="contact-toast" class="hidden text-xs font-semibold text-primary text-center">✓ Message sent! Our financial advisor will respond within 2 hours.</div>
          </div>
        </section>
      </div>
    </div>
  `;

  // FAQ Accordions Toggle Logic
  container.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const chevron = btn.querySelector('.icon-chevron');
      const isHidden = answer.classList.contains('hidden');

      if (isHidden) {
        answer.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
      } else {
        answer.classList.add('hidden');
        chevron.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Search FAQ
  const searchInput = container.querySelector('#faq-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      container.querySelectorAll('.faq-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(q)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Contact Form
  const form = container.querySelector('#contact-form');
  const toast = container.querySelector('#contact-toast');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 4000);
    });
  }

  return () => {};
}
