import { auth } from './auth.js';

export function initAiAssistant() {
  const container = document.getElementById('ai-assistant-container');
  if (!container) return;

  const user = auth.user;

  container.innerHTML = `
    <!-- Floating AI Widget Window -->
    <div id="ai-chat-modal" class="hidden absolute bottom-16 right-0 w-[calc(100vw-32px)] max-w-sm sm:w-96 glass-modal rounded-3xl p-4 sm:p-5 shadow-2xl border border-primary/30 text-sm mb-3 z-50">
      <div class="flex items-center justify-between pb-3 border-b border-white/10">
        <div class="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
          <div class="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
            <span class="material-symbols-outlined text-base">auto_awesome</span>
          </div>
          <span>InvestIQ AI Wealth Advisor</span>
        </div>
        <button id="close-ai-chat" class="text-on-surface-variant hover:text-white p-1">
          <span class="material-symbols-outlined text-base">close</span>
        </button>
      </div>

      <!-- Quick Preset Topics -->
      <div class="py-3 overflow-x-auto whitespace-nowrap flex gap-2 no-scrollbar text-[11px]">
        <button class="ai-preset-chip px-2.5 py-1 rounded-full bg-white/5 hover:bg-primary/20 text-on-surface-variant hover:text-primary transition-all border border-white/10" data-prompt="Explain SIP compounding">Explain SIP</button>
        <button class="ai-preset-chip px-2.5 py-1 rounded-full bg-white/5 hover:bg-primary/20 text-on-surface-variant hover:text-primary transition-all border border-white/10" data-prompt="How does Inflation impact my wealth?">Inflation Impact</button>
        <button class="ai-preset-chip px-2.5 py-1 rounded-full bg-white/5 hover:bg-primary/20 text-on-surface-variant hover:text-primary transition-all border border-white/10" data-prompt="What is CAGR vs Absolute Return?">Explain CAGR</button>
        <button class="ai-preset-chip px-2.5 py-1 rounded-full bg-white/5 hover:bg-primary/20 text-on-surface-variant hover:text-primary transition-all border border-white/10" data-prompt="Recommend high growth asset allocation">Portfolio Strategy</button>
      </div>

      <!-- Chat Messages Container -->
      <div id="ai-chat-messages" class="space-y-3 max-h-72 overflow-y-auto pr-1 text-xs py-2">
        <div class="bg-surface-container-high/70 p-3 rounded-2xl border border-white/5 text-on-surface text-xs leading-relaxed">
          Hello ${user.name.split(' ')[0]}! I am your AI Wealth Advisor. Ask me anything about SIP returns, tax optimization, CAGR, or asset allocation.
        </div>
      </div>

      <!-- Input Bar -->
      <form id="ai-chat-form" class="mt-3 flex items-center gap-2 pt-2 border-t border-white/10">
        <input type="text" id="ai-chat-input" placeholder="Ask financial question..." required class="flex-1 min-h-[38px] px-3.5 py-2 rounded-xl bg-surface-container-lowest border border-white/10 text-xs text-white outline-none focus:border-primary"/>
        <button type="button" id="btn-voice-input" class="w-9 h-9 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Voice Input">
          <span class="material-symbols-outlined text-base" id="voice-icon">mic</span>
        </button>
        <button type="submit" class="w-9 h-9 rounded-xl bg-primary text-[#0c1324] flex items-center justify-center font-bold shadow-[0_0_12px_rgba(78,222,163,0.4)] hover:scale-105 transition-transform">
          <span class="material-symbols-outlined text-base">send</span>
        </button>
      </form>
    </div>

    <!-- Floating Assistant Trigger Button -->
    <button id="btn-ai-fab" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-[#0c1324] flex items-center justify-center shadow-[0_0_30px_rgba(78,222,163,0.5)] animate-float hover:scale-110 transition-transform font-bold">
      <span class="material-symbols-outlined text-2xl">auto_awesome</span>
    </button>
  `;

  const fab = container.querySelector('#btn-ai-fab');
  const chatModal = container.querySelector('#ai-chat-modal');
  const closeBtn = container.querySelector('#close-ai-chat');
  const form = container.querySelector('#ai-chat-form');
  const input = container.querySelector('#ai-chat-input');
  const messagesBox = container.querySelector('#ai-chat-messages');
  const voiceBtn = container.querySelector('#btn-voice-input');
  const voiceIcon = container.querySelector('#voice-icon');

  fab.addEventListener('click', () => chatModal.classList.toggle('hidden'));
  closeBtn.addEventListener('click', () => chatModal.classList.add('hidden'));

  // Preset Chips
  container.querySelectorAll('.ai-preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      handleUserQuery(prompt);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
      handleUserQuery(query);
      input.value = '';
    }
  });

  // Voice Assistant Simulation
  let isListening = false;
  if (voiceBtn) {
    voiceBtn.addEventListener('click', () => {
      if (!isListening) {
        isListening = true;
        voiceIcon.textContent = 'graphic_eq';
        voiceBtn.classList.add('text-primary', 'animate-pulse');
        input.placeholder = "Listening to voice input...";

        setTimeout(() => {
          isListening = false;
          voiceIcon.textContent = 'mic';
          voiceBtn.classList.remove('text-primary', 'animate-pulse');
          input.placeholder = "Ask financial question...";
          handleUserQuery("Suggest optimal SIP step-up strategy for retirement in 20 years");
        }, 2500);
      }
    });
  }

  function handleUserQuery(query) {
    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = "bg-primary/10 border border-primary/20 text-white p-3 rounded-2xl ml-6 text-xs";
    userMsg.textContent = query;
    messagesBox.appendChild(userMsg);
    messagesBox.scrollTop = messagesBox.scrollHeight;

    // Generate AI Response
    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.className = "bg-surface-container-high/70 p-3 rounded-2xl border border-white/5 text-on-surface text-xs leading-relaxed space-y-1.5";

      const lower = query.toLowerCase();
      let responseHTML = "";

      if (lower.includes('sip')) {
        responseHTML = `
          <div class="font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">trending_up</span> Power of SIP Compounding</div>
          <p>Systematic Investment Planning (SIP) averages out market volatility via Rupee Cost Averaging. If you invest ₹10,000/mo for 15 years at 14% p.a., your total investment of ₹18L grows to over ₹61.2L.</p>
        `;
      } else if (lower.includes('inflation')) {
        responseHTML = `
          <div class="font-bold text-tertiary flex items-center gap-1"><span class="material-symbols-outlined text-sm">request_quote</span> Inflation Impact Analysis</div>
          <p>At a 6% annual inflation rate, purchasing power halves roughly every 12 years. Fixed Deposits returning 6.5% yield 0.5% real returns after tax. Equity SIPs (14%) beat inflation by 8% per annum.</p>
        `;
      } else if (lower.includes('cagr')) {
        responseHTML = `
          <div class="font-bold text-secondary flex items-center gap-1"><span class="material-symbols-outlined text-sm">calculate</span> CAGR Formula & Meaning</div>
          <p>Compound Annual Growth Rate (CAGR) measures smooth annual return rate: <br/><code>CAGR = (End Value / Start Value)^(1/Years) - 1</code>. Unlike absolute returns, CAGR accounts for time period duration.</p>
        `;
      } else {
        responseHTML = `
          <div class="font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">auto_awesome</span> Smart Strategy Recommendation</div>
          <p>Based on modern portfolio theory: Allocate 70% in Equity Flexi-Cap SIPs for long-term growth, 20% in Sovereign Gold Bonds for macro hedging, and 10% in Liquid/Emergency Funds.</p>
        `;
      }

      aiMsg.innerHTML = responseHTML;
      messagesBox.appendChild(aiMsg);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }, 600);
  }
}
