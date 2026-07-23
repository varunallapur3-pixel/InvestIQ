(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();class z{constructor(){const a=localStorage.getItem("investiq_auth");if(a)try{const l=JSON.parse(a);this.user=l.user,this.isLoggedIn=l.isLoggedIn}catch{this.resetDefault()}else this.resetDefault();this.listeners=[]}resetDefault(){this.user={name:"Alex Rivers",email:"alex.rivers@investiq.finance",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuB3nJ60haWp8Qx_7cxsBxEE6jj52llF5mSfu1DWPL2QCaG-JO-F6nGv7HXgP8ZcVZOrhLY8vZ49UOJC1_LXPo-4eNG_ydnwNUsUEpYhpIvbN-WM5CIJhkqJCRLfgmuGdTcKm6682FlJhqmi5-YzSe8G8-lGClt84K0sDkscMYd8YmusehJ7BjSBdauKLfVhDndCTm2mt3kXOyNlkWQldrZde_W_NW1OIQ-jA1PoB3xH3x_BSkHqbhJYKyNc1v6oIgiBNQcn4Fl-N_mm",portfolioValue:"₹24,85,900",savingsScore:850,streakDays:12,tier:"InvestIQ Pro"},this.isLoggedIn=!0}subscribe(a){return this.listeners.push(a),()=>{this.listeners=this.listeners.filter(l=>l!==a)}}notify(){localStorage.setItem("investiq_auth",JSON.stringify({user:this.user,isLoggedIn:this.isLoggedIn})),this.listeners.forEach(a=>a(this.isLoggedIn,this.user))}login(a,l){if(this.user.email=a||"alex.rivers@investiq.finance",a&&a.split("@")[0]){const t=a.split("@")[0].split(".");this.user.name=t.map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ")}return this.isLoggedIn=!0,this.notify(),!0}loginDemo(){return this.resetDefault(),this.isLoggedIn=!0,this.notify(),!0}logout(){this.isLoggedIn=!1,this.notify()}}const q=new z,j={INR:{symbol:"₹",rate:1,name:"Indian Rupee (INR)"},USD:{symbol:"$",rate:.012,name:"US Dollar (USD)"},EUR:{symbol:"€",rate:.011,name:"Euro (EUR)"},GBP:{symbol:"£",rate:.0093,name:"British Pound (GBP)"}};let A=localStorage.getItem("investiq_currency")||"INR";function Q(e){j[e]&&(A=e,localStorage.setItem("investiq_currency",e),window.dispatchEvent(new CustomEvent("currencyChange",{detail:e})))}function F(){return A}function U(){return(j[A]||j.INR).symbol}function n(e){const a=j[A]||j.INR,t=(typeof e=="number"?e:parseFloat(e)||0)*a.rate;return A==="INR"?`${a.symbol} ${Math.round(t).toLocaleString("en-IN")}`:`${a.symbol} ${Math.round(t).toLocaleString("en-US")}`}function W(){const e=document.getElementById("top-nav-shell"),a=document.getElementById("bottom-nav-pill");if(!e)return;(localStorage.getItem("investiq_theme")||"dark")==="light"?(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark")):(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")),e.innerHTML=`
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
              <span class="material-symbols-outlined text-tertiary text-base">verified</span> PPF & NPS Calculator
            </a>
            <a href="#calculator?type=fd" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 text-white transition-colors">
              <span class="material-symbols-outlined text-tertiary text-base">account_balance</span> FD & RD Returns
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
        <option value="INR" ${F()==="INR"?"selected":""}>₹ INR</option>
        <option value="USD" ${F()==="USD"?"selected":""}>$ USD</option>
        <option value="EUR" ${F()==="EUR"?"selected":""}>€ EUR</option>
        <option value="GBP" ${F()==="GBP"?"selected":""}>£ GBP</option>
      </select>

      <!-- Theme Toggle -->
      <button id="btn-theme-toggle" class="w-8 h-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary hover:scale-105 transition-transform" title="Toggle Light/Dark Theme">
        <span class="material-symbols-outlined text-sm" id="icon-theme">dark_mode</span>
      </button>

      <!-- User Profile Badge -->
      <a href="#login" id="nav-user-badge" class="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 hover:border-primary/40 transition-all text-xs">
        <div class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
          <img id="nav-user-avatar" src="${q.user.avatar}" alt="Avatar" class="w-full h-full object-cover"/>
        </div>
        <span id="nav-user-name" class="font-medium text-white hidden sm:inline">${q.user.name.split(" ")[0]}</span>
      </a>
    </div>
  `,a&&(a.innerHTML=`
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
    `);const t=e.querySelector("#btn-theme-toggle"),s=e.querySelector("#icon-theme");t&&t.addEventListener("click",()=>{document.documentElement.classList.contains("light")?(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),localStorage.setItem("investiq_theme","dark"),s&&(s.textContent="dark_mode")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),localStorage.setItem("investiq_theme","light"),s&&(s.textContent="light_mode"))});const r=e.querySelector("#select-currency");r&&r.addEventListener("change",u=>Q(u.target.value));const d=e.querySelector("#btn-global-search");d&&d.addEventListener("click",O)}function O(){let e=document.getElementById("global-search-modal");if(!e){e=document.createElement("div"),e.id="global-search-modal",e.className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md",e.innerHTML=`
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
    `,document.body.appendChild(e),e.querySelector("#close-search").addEventListener("click",()=>e.remove()),e.addEventListener("click",t=>{t.target===e&&e.remove()});const l=e.querySelector("#search-input");l.focus(),l.addEventListener("input",t=>{const s=t.target.value.toLowerCase();e.querySelectorAll("#search-results a").forEach(d=>{d.textContent.toLowerCase().includes(s)?d.style.display="block":d.style.display="none"})})}}function V(){const e=document.getElementById("ai-assistant-container");if(!e)return;const a=q.user;e.innerHTML=`
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
          Hello ${a.name.split(" ")[0]}! I am your AI Wealth Advisor. Ask me anything about SIP returns, tax optimization, CAGR, or asset allocation.
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
  `;const l=e.querySelector("#btn-ai-fab"),t=e.querySelector("#ai-chat-modal"),s=e.querySelector("#close-ai-chat"),r=e.querySelector("#ai-chat-form"),d=e.querySelector("#ai-chat-input"),u=e.querySelector("#ai-chat-messages"),L=e.querySelector("#btn-voice-input"),E=e.querySelector("#voice-icon");l.addEventListener("click",()=>t.classList.toggle("hidden")),s.addEventListener("click",()=>t.classList.add("hidden")),e.querySelectorAll(".ai-preset-chip").forEach(o=>{o.addEventListener("click",()=>{const i=o.getAttribute("data-prompt");p(i)})}),r.addEventListener("submit",o=>{o.preventDefault();const i=d.value.trim();i&&(p(i),d.value="")});let v=!1;L&&L.addEventListener("click",()=>{v||(v=!0,E.textContent="graphic_eq",L.classList.add("text-primary","animate-pulse"),d.placeholder="Listening to voice input...",setTimeout(()=>{v=!1,E.textContent="mic",L.classList.remove("text-primary","animate-pulse"),d.placeholder="Ask financial question...",p("Suggest optimal SIP step-up strategy for retirement in 20 years")},2500))});function p(o){const i=document.createElement("div");i.className="bg-primary/10 border border-primary/20 text-white p-3 rounded-2xl ml-6 text-xs",i.textContent=o,u.appendChild(i),u.scrollTop=u.scrollHeight,setTimeout(()=>{const x=document.createElement("div");x.className="bg-surface-container-high/70 p-3 rounded-2xl border border-white/5 text-on-surface text-xs leading-relaxed space-y-1.5";const c=o.toLowerCase();let m="";c.includes("sip")?m=`
          <div class="font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">trending_up</span> Power of SIP Compounding</div>
          <p>Systematic Investment Planning (SIP) averages out market volatility via Rupee Cost Averaging. If you invest ₹10,000/mo for 15 years at 14% p.a., your total investment of ₹18L grows to over ₹61.2L.</p>
        `:c.includes("inflation")?m=`
          <div class="font-bold text-tertiary flex items-center gap-1"><span class="material-symbols-outlined text-sm">request_quote</span> Inflation Impact Analysis</div>
          <p>At a 6% annual inflation rate, purchasing power halves roughly every 12 years. Fixed Deposits returning 6.5% yield 0.5% real returns after tax. Equity SIPs (14%) beat inflation by 8% per annum.</p>
        `:c.includes("cagr")?m=`
          <div class="font-bold text-secondary flex items-center gap-1"><span class="material-symbols-outlined text-sm">calculate</span> CAGR Formula & Meaning</div>
          <p>Compound Annual Growth Rate (CAGR) measures smooth annual return rate: <br/><code>CAGR = (End Value / Start Value)^(1/Years) - 1</code>. Unlike absolute returns, CAGR accounts for time period duration.</p>
        `:m=`
          <div class="font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">auto_awesome</span> Smart Strategy Recommendation</div>
          <p>Based on modern portfolio theory: Allocate 70% in Equity Flexi-Cap SIPs for long-term growth, 20% in Sovereign Gold Bonds for macro hedging, and 10% in Liquid/Emergency Funds.</p>
        `,x.innerHTML=m,u.appendChild(x),u.scrollTop=u.scrollHeight},600)}}function J(e){e.innerHTML=`
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
  `;const a=e.querySelector("#home-waitlist-form"),l=e.querySelector("#waitlist-toast");return a&&a.addEventListener("submit",t=>{t.preventDefault(),a.classList.add("hidden"),l.classList.remove("hidden")}),()=>{}}function K(e,a,l){let t="data:text/csv;charset=utf-8,"+a.join(",")+`
`+l.map(d=>d.join(",")).join(`
`);const s=encodeURI(t),r=document.createElement("a");r.setAttribute("href",s),r.setAttribute("download",`${e}.csv`),document.body.appendChild(r),r.click(),document.body.removeChild(r)}function X(e,a,l){if(window.jspdf&&window.jspdf.jsPDF){const t=new window.jspdf.jsPDF;t.setFillColor(12,19,36),t.rect(0,0,210,40,"F"),t.setTextColor(78,222,163),t.setFontSize(22),t.setFont("helvetica","bold"),t.text("InvestIQ Wealth Report",14,22),t.setTextColor(187,202,191),t.setFontSize(10),t.setFont("helvetica","normal"),t.text(`Generated on: ${new Date().toLocaleDateString()}`,14,30),t.setTextColor(0,0,0),t.setFontSize(16),t.setFont("helvetica","bold"),t.text(e,14,52);let s=62;a.forEach(r=>{t.setFontSize(11),t.setFont("helvetica","normal"),t.text(`${r.label}:`,14,s),t.setFont("helvetica","bold"),t.text(`${r.value}`,80,s),s+=8}),s+=10,t.setFillColor(25,31,49),t.rect(14,s,180,10,"F"),t.setTextColor(255,255,255),t.setFontSize(10),t.text("Year",18,s+7),t.text("Invested Capital",55,s+7),t.text("Estimated Returns",105,s+7),t.text("Total Maturity",155,s+7),s+=10,t.setTextColor(40,40,40),l.slice(0,20).forEach((r,d)=>{d%2===0&&(t.setFillColor(245,247,250),t.rect(14,s,180,8,"F")),t.setFont("helvetica","normal"),t.text(String(r.year),18,s+6),t.text(String(r.invested),55,s+6),t.text(String(r.returns),105,s+6),t.setFont("helvetica","bold"),t.text(String(r.total),155,s+6),s+=8}),t.setFontSize(9),t.setFont("helvetica","italic"),t.setTextColor(120,120,120),t.text("InvestIQ Precision Wealth Engine - Confidential & Audited Projections",14,285),t.save(`${e.replace(/\s+/g,"_")}_InvestIQ_Report.pdf`)}else window.print()}function Z(e){let a="sip",l=null;const t=window.location.hash;if(t.includes("type=")){const o=t.split("type=")[1].split("&")[0];o&&(a=o)}e.innerHTML=`
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
  `;const s=e.querySelectorAll(".calc-tab-btn");s.forEach(o=>{const i=o.getAttribute("data-tab");i===a?o.className="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 bg-primary text-[#0c1324] font-bold shadow-lg shadow-primary/30":o.className="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white",o.addEventListener("click",()=>{a=i,s.forEach(x=>x.className="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 text-on-surface-variant hover:text-white"),o.className="calc-tab-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 bg-primary text-[#0c1324] font-bold shadow-lg shadow-primary/30",u(a)})});let r={title:"",summary:[],years:[]},d="line";function u(o){const i=e.querySelector("#calc-controls-box");if(!i)return;o==="sip"?i.innerHTML=`
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
      `:o==="lumpsum"?i.innerHTML=`
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
      `:o==="emi"?i.innerHTML=`
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
      `:i.innerHTML=`
        <div class="flex items-center justify-between pb-3.5 border-b border-white/10">
          <h2 class="font-display text-lg font-bold text-primary flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">tune</span> ${o.toUpperCase()} Planner Controls
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
      `,i.querySelectorAll("input, select").forEach(m=>m.addEventListener("input",L));const c=i.querySelector("#btn-reset");c&&c.addEventListener("click",()=>{u(o)}),L()}function L(){const o=e.querySelector("#input-val-1"),i=e.querySelector("#input-val-2"),x=e.querySelector("#input-val-3");if(!o||!i||!x)return;const c=parseFloat(o.value),m=parseFloat(i.value),g=parseInt(x.value);if(a==="sip"){e.querySelector("#lbl-val-1").textContent=n(c),e.querySelector("#lbl-val-2").textContent=`${m}%`,e.querySelector("#lbl-val-3").textContent=`${g} Years`;const f=e.querySelector("#input-stepup"),C=e.querySelector("#input-inflation"),b=f?parseFloat(f.value||0)/100:.1,I=C?parseFloat(C.value||0)/100:.06;let k=0,S=0,w=c;const y=m/12/100,h=[];for(let _=1;_<=g;_++){let Y=0;for(let D=1;D<=12;D++)Y+=w,S=(S+w)*(1+y);k+=Y;const G=S-k;h.push({year:_,annualInvested:Math.round(Y),invested:n(k),returns:n(G),total:n(S),numInvested:Math.round(k),numReturns:Math.round(G),numTotal:Math.round(S)}),w+=w*b}const M=S-k,P=k>0?(S/k).toFixed(2):"1.00",T=Math.round(S/Math.pow(1+I,g));e.querySelector("#res-main-label").textContent="Estimated SIP Maturity Corpus",e.querySelector("#res-main-value").textContent=n(S),e.querySelector("#res-badge-1").innerHTML=`<span class="material-symbols-outlined text-sm">trending_up</span> Compounding Gain: ${Math.round(M/k*100)}%`,e.querySelector("#res-badge-2").textContent=`Inflation Adjusted: ${n(T)}`,e.querySelector("#lbl-sub-1").textContent="Total Invested Capital",e.querySelector("#val-sub-1").textContent=n(k),e.querySelector("#lbl-sub-2").textContent="Estimated Wealth Gain",e.querySelector("#val-sub-2").textContent=n(M),e.querySelector("#lbl-sub-3").textContent="Wealth Multiplier",e.querySelector("#val-sub-3").textContent=`${P}x`,r={title:`SIP Investment Report (${g} Years @ ${m}%)`,summary:[{label:"Monthly SIP",value:n(c)},{label:"Total Capital Invested",value:n(k)},{label:"Estimated Wealth Gain",value:n(M)},{label:"Maturity Corpus",value:n(S)}],years:h},E(h),v(h.map(_=>`Yr ${_.year}`),h.map(_=>_.numInvested),h.map(_=>_.numTotal))}else if(a==="lumpsum"){e.querySelector("#lbl-val-1").textContent=n(c),e.querySelector("#lbl-val-2").textContent=`${m}%`,e.querySelector("#lbl-val-3").textContent=`${g} Years`;const f=e.querySelector("#input-inflation"),C=f?parseFloat(f.value||0)/100:.06,b=c*Math.pow(1+m/100,g),I=b-c,k=(b/c).toFixed(2),S=Math.round(b/Math.pow(1+C,g)),w=[];for(let y=1;y<=g;y++){const h=c*Math.pow(1+m/100,y);w.push({year:y,annualInvested:0,invested:n(c),returns:n(h-c),total:n(h),numInvested:Math.round(c),numReturns:Math.round(h-c),numTotal:Math.round(h)})}e.querySelector("#res-main-label").textContent="Estimated Lumpsum Maturity Value",e.querySelector("#res-main-value").textContent=n(b),e.querySelector("#res-badge-1").innerHTML=`<span class="material-symbols-outlined text-sm">trending_up</span> Growth Gain: ${Math.round(I/c*100)}%`,e.querySelector("#res-badge-2").textContent=`Inflation Adjusted: ${n(S)}`,e.querySelector("#val-sub-1").textContent=n(c),e.querySelector("#val-sub-2").textContent=n(I),e.querySelector("#val-sub-3").textContent=`${k}x`,r={title:`Lumpsum Investment Report (${g} Years @ ${m}%)`,summary:[{label:"Initial Lumpsum Capital",value:n(c)},{label:"Estimated Returns",value:n(I)},{label:"Maturity Corpus",value:n(b)}],years:w},E(w),v(w.map(y=>`Yr ${y.year}`),w.map(y=>y.numInvested),w.map(y=>y.numTotal))}else if(a==="emi"){e.querySelector("#lbl-val-1").textContent=n(c),e.querySelector("#lbl-val-2").textContent=`${m}%`,e.querySelector("#lbl-val-3").textContent=`${g} Years`;const f=c,C=m/12/100,b=g*12,I=f*C*Math.pow(1+C,b)/(Math.pow(1+C,b)-1),k=I*b,S=k-f,w=[];let y=f;for(let h=1;h<=g;h++){let M=0;for(let P=1;P<=12;P++){const T=y*C,_=I-T;M+=T,y-=_}w.push({year:h,annualInvested:Math.round(I*12),invested:n(f-Math.max(0,y)),returns:n(M),total:n(Math.max(0,y)),numInvested:Math.round(f-Math.max(0,y)),numReturns:Math.round(M),numTotal:Math.round(Math.max(0,y))})}e.querySelector("#res-main-label").textContent="Monthly EMI Payable",e.querySelector("#res-main-value").textContent=n(I),e.querySelector("#res-badge-1").innerHTML=`<span class="material-symbols-outlined text-sm">payments</span> Total Outflow: ${n(k)}`,e.querySelector("#res-badge-2").textContent=`Total Interest Paid: ${n(S)}`,e.querySelector("#lbl-sub-1").textContent="Principal Borrowed",e.querySelector("#val-sub-1").textContent=n(f),e.querySelector("#lbl-sub-2").textContent="Total Interest Amount",e.querySelector("#val-sub-2").textContent=n(S),e.querySelector("#lbl-sub-3").textContent="Interest / Loan Ratio",e.querySelector("#val-sub-3").textContent=`${(S/f*100).toFixed(0)}%`,r={title:`EMI Loan Schedule Report (${g} Years @ ${m}%)`,summary:[{label:"Principal Loan Amount",value:n(f)},{label:"Monthly EMI",value:n(I)},{label:"Total Interest Payable",value:n(S)},{label:"Total Payment",value:n(k)}],years:w},E(w),v(w.map(h=>`Yr ${h.year}`),w.map(h=>h.numInvested),w.map(h=>h.numTotal))}else{e.querySelector("#lbl-val-1").textContent=n(c),e.querySelector("#lbl-val-2").textContent=`${m}%`,e.querySelector("#lbl-val-3").textContent=`${g} Years`;const f=c*(m/100/12)/(Math.pow(1+m/100/12,g*12)-1);e.querySelector("#res-main-label").textContent="Required Monthly Investment for Goal",e.querySelector("#res-main-value").textContent=n(f),e.querySelector("#res-badge-1").innerHTML=`<span class="material-symbols-outlined text-sm">savings</span> Target Corpus: ${n(c)}`,e.querySelector("#res-badge-2").textContent=`Expected CAGR: ${m}%`,e.querySelector("#val-sub-1").textContent=n(c),e.querySelector("#val-sub-2").textContent=n(f*12),e.querySelector("#val-sub-3").textContent=`${g} Yrs`;const C=[];for(let b=1;b<=g;b++){const I=f*((Math.pow(1+m/100/12,b*12)-1)/(m/100/12));C.push({year:b,annualInvested:Math.round(f*12),invested:n(f*12*b),returns:n(I-f*12*b),total:n(I),numInvested:Math.round(f*12*b),numReturns:Math.round(I-f*12*b),numTotal:Math.round(I)})}r={title:`${a.toUpperCase()} Plan Report (${g} Years)`,summary:[{label:"Target Corpus",value:n(c)},{label:"Required Monthly SIP",value:n(f)}],years:C},E(C),v(C.map(b=>`Yr ${b.year}`),C.map(b=>b.numInvested),C.map(b=>b.numTotal))}}function E(o){const i=e.querySelector("#matrix-tbody"),x=e.querySelector("#table-row-count");i&&(x&&(x.textContent=`Showing ${o.length} Years`),i.innerHTML=o.map(c=>`
      <tr class="hover:bg-white/[0.03] transition-colors">
        <td class="p-3.5 font-sans font-semibold text-white">Year ${c.year}</td>
        <td class="p-3.5 text-on-surface-variant">${n(c.annualInvested||0)}</td>
        <td class="p-3.5 text-white">${c.invested}</td>
        <td class="p-3.5 text-primary">${c.returns}</td>
        <td class="p-3.5 font-bold text-primary-fixed">${c.total}</td>
      </tr>
    `).join(""))}function v(o,i,x){const c=e.querySelector("#calc-chart-canvas");if(c&&(l&&l.destroy(),window.Chart)){const m=c.getContext("2d");l=new window.Chart(m,{type:d,data:{labels:o,datasets:[{label:"Invested Capital",data:i,borderColor:"#bbcabf",backgroundColor:"rgba(187, 202, 191, 0.2)",borderWidth:2,fill:!0,tension:.3},{label:"Total Future Value",data:x,borderColor:"#4edea3",backgroundColor:"rgba(78, 222, 163, 0.25)",borderWidth:3,fill:!0,tension:.3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:"#dce1fb",font:{family:"Inter",size:11}}},tooltip:{mode:"index",intersect:!1,backgroundColor:"rgba(12, 19, 36, 0.9)",titleColor:"#4edea3",bodyColor:"#dce1fb",borderColor:"rgba(255,255,255,0.1)",borderWidth:1}},scales:{x:{ticks:{color:"#bbcabf",font:{family:"JetBrains Mono",size:10}},grid:{color:"rgba(255,255,255,0.05)"}},y:{ticks:{color:"#bbcabf",font:{family:"JetBrains Mono",size:10}},grid:{color:"rgba(255,255,255,0.05)"}}}}})}}e.querySelector("#btn-toggle-chart-type").addEventListener("click",()=>{d=d==="line"?"bar":"line",L()}),e.querySelector("#btn-export-pdf").addEventListener("click",()=>{X(r.title,r.summary,r.years)}),e.querySelector("#btn-export-csv").addEventListener("click",()=>{const o=["Year","Cumulative Invested","Estimated Interest","Closing Total"],i=r.years.map(x=>[x.year,x.invested.replace(/,/g,""),x.returns.replace(/,/g,""),x.total.replace(/,/g,"")]);K("InvestIQ_Calculation_Projections",o,i)});const p=e.querySelector("#calc-toast");return e.querySelector("#btn-share-calc").addEventListener("click",()=>{navigator.clipboard.writeText(window.location.href),p.textContent="✓ Calculation link copied to clipboard!",p.classList.remove("hidden"),setTimeout(()=>p.classList.add("hidden"),3e3)}),e.querySelector("#btn-save-goal-calc").addEventListener("click",()=>{q.user.portfolioValue=r.summary[r.summary.length-1].value,q.notify(),p.textContent="✓ Saved to your Dashboard Goals!",p.classList.remove("hidden"),setTimeout(()=>p.classList.add("hidden"),3e3)}),u(a),()=>{l&&l.destroy()}}function ee(e){let a=null;if(e.innerHTML=`
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
              <span class="text-xs font-semibold text-primary uppercase tracking-widest block">10-Year Growth Benchmark (Initial ${n(1e6)})</span>
              <div class="flex items-baseline gap-3 mt-1">
                <span class="font-display text-3xl sm:text-5xl font-bold text-white" id="comp-peak-text">${n(384e4)}</span>
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
              <label class="text-on-surface-variant font-medium">Initial Capital (${U()})</label>
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
  `,window.Chart){const v=e.querySelector("#comp-chart-canvas");if(v){const p=v.getContext("2d"),o=[2015,2017,2019,2021,2023,2025];a=new window.Chart(p,{type:"line",data:{labels:o,datasets:[{label:"Equity SIP (14.2%)",data:[10,13,17,22.8,30.5,38.4],borderColor:"#4edea3",backgroundColor:"rgba(78, 222, 163, 0.1)",borderWidth:3,tension:.3},{label:"Real Estate (9.8%)",data:[10,12,14.5,17.5,21.2,25.4],borderColor:"#b8c4ff",borderWidth:2,tension:.3},{label:"Gold / SGB (10.5%)",data:[10,12.2,14.9,18.2,22.4,27.1],borderColor:"#ffb95f",borderWidth:2,tension:.3},{label:"Fixed Deposit (6.5%)",data:[10,11.3,12.8,14.5,16.5,18.7],borderColor:"#bbcabf",borderDash:[5,5],borderWidth:2,tension:.3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:"#dce1fb",font:{family:"Inter",size:11}}},tooltip:{callbacks:{label:i=>`${i.dataset.label}: ₹${i.raw} Lakhs`}}},scales:{x:{ticks:{color:"#bbcabf",font:{family:"JetBrains Mono",size:10}},grid:{color:"rgba(255,255,255,0.05)"}},y:{ticks:{color:"#bbcabf",font:{family:"JetBrains Mono",size:10},callback:i=>`₹${i}L`},grid:{color:"rgba(255,255,255,0.05)"}}}}})}}const l=e.querySelector("#modal-sim"),t=e.querySelector("#btn-open-sim"),s=e.querySelector("#btn-rebalance-hybrid"),r=e.querySelector("#close-sim");t.addEventListener("click",()=>l.classList.remove("hidden")),s&&s.addEventListener("click",()=>l.classList.remove("hidden")),r.addEventListener("click",()=>l.classList.add("hidden"));const d=e.querySelector("#sim-eq-pct"),u=e.querySelector("#sim-gold-pct"),L=e.querySelector("#lbl-eq-pct"),E=e.querySelector("#lbl-gold-pct");return d.addEventListener("input",v=>{const p=parseInt(v.target.value);L.textContent=`${p}%`,u.value=100-p,E.textContent=`${100-p}%`}),u.addEventListener("input",v=>{const p=parseInt(v.target.value);E.textContent=`${p}%`,d.value=100-p,L.textContent=`${100-p}%`}),e.querySelector("#btn-calc-hybrid").addEventListener("click",()=>{const v=parseFloat(e.querySelector("#sim-capital").value||1e6),p=parseFloat(d.value)/100,o=parseFloat(u.value)/100,i=p*.142+o*.105,x=v*Math.pow(1+i,10),c=e.querySelector("#sim-result-box"),m=e.querySelector("#sim-result-val");m.textContent=n(x),c.classList.remove("hidden")}),()=>{a&&a.destroy()}}const B=[{id:1,name:"Parag Parikh Flexi Cap Fund",category:"Flexi Cap",risk:"Moderate-High",return1Y:22.4,return3Y:18.6,return5Y:21.2,return10Y:19.5,nav:78.45,rating:5,expense:.62,aum:"₹64,200 Cr",brokerLink:"https://zerodha.com"},{id:2,name:"Quant Small Cap Fund",category:"Small Cap",risk:"Very High",return1Y:38.5,return3Y:28.4,return5Y:34.2,return10Y:24.1,nav:242.1,rating:5,expense:.77,aum:"₹21,800 Cr",brokerLink:"https://groww.in"},{id:3,name:"Nippon India Small Cap Fund",category:"Small Cap",risk:"Very High",return1Y:34.2,return3Y:26.1,return5Y:29.8,return10Y:22.8,nav:184.3,rating:5,expense:.68,aum:"₹52,400 Cr",brokerLink:"https://groww.in"},{id:4,name:"Mirae Asset Large Cap Fund",category:"Large Cap",risk:"Moderate",return1Y:16.8,return3Y:14.2,return5Y:15.6,return10Y:15.1,nav:112.6,rating:4,expense:.54,aum:"₹38,900 Cr",brokerLink:"https://zerodha.com"},{id:5,name:"UTI Nifty 50 Index Fund",category:"Index Fund",risk:"Moderate",return1Y:15.2,return3Y:13.8,return5Y:14.9,return10Y:13.6,nav:168.2,rating:5,expense:.21,aum:"₹18,500 Cr",brokerLink:"https://indmoney.com"},{id:6,name:"Mirae Asset Tax Saver (ELSS)",category:"ELSS Tax Saver",risk:"High",return1Y:19.4,return3Y:16.5,return5Y:18.2,return10Y:17.8,nav:45.3,rating:4,expense:.58,aum:"₹22,100 Cr",brokerLink:"https://zerodha.com"},{id:7,name:"HDFC Balanced Advantage Fund",category:"Hybrid",risk:"Moderate",return1Y:18.1,return3Y:17.4,return5Y:16.8,return10Y:14.9,nav:410.8,rating:5,expense:.72,aum:"₹78,900 Cr",brokerLink:"https://groww.in"},{id:8,name:"ICICI Prudential Corporate Bond Fund",category:"Debt",risk:"Low",return1Y:7.8,return3Y:7.2,return5Y:7.5,return10Y:8.1,nav:28.9,rating:4,expense:.32,aum:"₹24,500 Cr",brokerLink:"https://indmoney.com"}];function te(e){let a="ALL",l="",t=[];e.innerHTML=`
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
  `;const s=e.querySelector("#input-fund-search"),r=e.querySelectorAll(".fund-cat-btn");s.addEventListener("input",p=>{l=p.target.value.toLowerCase(),d()}),r.forEach(p=>{p.addEventListener("click",()=>{a=p.getAttribute("data-cat"),r.forEach(o=>o.className="fund-cat-btn px-4 py-2.5 rounded-xl glass-card text-on-surface-variant hover:text-white font-semibold whitespace-nowrap"),p.className="fund-cat-btn px-4 py-2.5 rounded-xl bg-primary text-[#0c1324] font-bold whitespace-nowrap",d()})});function d(){const p=e.querySelector("#funds-grid");if(!p)return;const o=B.filter(i=>{const x=a==="ALL"||i.category===a,c=l===""||i.name.toLowerCase().includes(l)||i.category.toLowerCase().includes(l);return x&&c});if(o.length===0){p.innerHTML=`
        <div class="col-span-full text-center py-12 glass-card rounded-3xl p-8">
          <span class="material-symbols-outlined text-4xl text-on-surface-variant mb-2">search_off</span>
          <p class="text-sm text-on-surface-variant">No mutual funds match your search query.</p>
        </div>
      `;return}p.innerHTML=o.map(i=>{const x=t.includes(i.id);return`
        <div class="glass-card glass-card-interactive rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 relative group">
          <div>
            <div class="flex items-start justify-between gap-2 mb-3">
              <span class="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">${i.category}</span>
              <div class="flex items-center gap-1 text-tertiary font-mono text-xs">
                <span class="material-symbols-outlined text-sm">star</span> ${i.rating}.0
              </div>
            </div>
            
            <h3 class="font-display text-lg font-bold text-white group-hover:text-primary transition-colors">${i.name}</h3>
            <p class="text-xs text-on-surface-variant mt-1">NAV: ${n(i.nav)} • AUM: ${i.aum} • Exp: ${i.expense}%</p>
          </div>

          <div class="grid grid-cols-3 gap-2 bg-surface-container/60 p-3 rounded-2xl border border-white/5 text-center font-mono">
            <div>
              <span class="text-[10px] text-on-surface-variant uppercase block">1Y</span>
              <span class="text-xs font-bold text-primary">+${i.return1Y}%</span>
            </div>
            <div>
              <span class="text-[10px] text-on-surface-variant uppercase block">3Y</span>
              <span class="text-xs font-bold text-primary-fixed">+${i.return3Y}%</span>
            </div>
            <div>
              <span class="text-[10px] text-on-surface-variant uppercase block">5Y</span>
              <span class="text-xs font-bold text-primary">+${i.return5Y}%</span>
            </div>
          </div>

          <div class="flex items-center justify-between gap-2 pt-2">
            <button class="btn-toggle-compare px-3 py-2 rounded-xl ${x?"bg-primary text-[#0c1324]":"bg-surface-container-high text-on-surface-variant hover:text-white"} text-xs font-semibold border border-white/10 transition-all" data-id="${i.id}">
              ${x?"✓ Compared":"+ Compare"}
            </button>

            <a href="${i.brokerLink}" target="_blank" rel="noopener" class="px-4 py-2 rounded-xl bg-primary text-[#0c1324] font-bold text-xs hover:scale-105 transition-all shadow-[0_0_12px_rgba(78,222,163,0.3)] flex items-center gap-1">
              <span>Invest Direct</span>
              <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      `}).join(""),p.querySelectorAll(".btn-toggle-compare").forEach(i=>{i.addEventListener("click",()=>{const x=parseInt(i.getAttribute("data-id"));if(t.includes(x))t=t.filter(c=>c!==x);else{if(t.length>=3){alert("You can compare up to 3 funds side-by-side.");return}t.push(x)}e.querySelector("#compare-count").textContent=t.length,d()})})}const u=e.querySelector("#modal-fund-compare"),L=e.querySelector("#btn-compare-modal-open"),E=e.querySelector("#close-fund-compare"),v=e.querySelector("#compare-modal-body");return L.addEventListener("click",()=>{if(t.length===0){alert("Please select at least 1 fund using the '+ Compare' button first.");return}const p=B.filter(o=>t.includes(o.id));v.innerHTML=`
      <div class="grid grid-cols-1 md:grid-cols-${p.length} gap-4">
        ${p.map(o=>`
          <div class="glass-card rounded-2xl p-4 space-y-3 text-xs border border-white/10">
            <h4 class="font-bold text-sm text-primary">${o.name}</h4>
            <div class="space-y-1 font-mono text-on-surface-variant">
              <p>Category: <span class="text-white">${o.category}</span></p>
              <p>Expense Ratio: <span class="text-white">${o.expense}%</span></p>
              <p>AUM: <span class="text-white">${o.aum}</span></p>
              <p>1Y Return: <span class="text-primary font-bold">+${o.return1Y}%</span></p>
              <p>3Y Return: <span class="text-primary font-bold">+${o.return3Y}%</span></p>
              <p>5Y Return: <span class="text-primary font-bold">+${o.return5Y}%</span></p>
              <p>10Y CAGR: <span class="text-primary-fixed font-bold">+${o.return10Y}%</span></p>
            </div>
            <a href="${o.brokerLink}" target="_blank" rel="noopener" class="block text-center w-full py-2 rounded-xl bg-primary text-[#0c1324] font-bold">Invest Now</a>
          </div>
        `).join("")}
      </div>
    `,u.classList.remove("hidden")}),E.addEventListener("click",()=>u.classList.add("hidden")),d(),()=>{}}function ae(e){e.innerHTML=`
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
  `;const a=e.querySelector("#r72-slider"),l=e.querySelector("#r72-rate-val"),t=e.querySelector("#r72-years-val");return a&&a.addEventListener("input",s=>{const r=parseFloat(s.target.value),d=(72/r).toFixed(1);l.textContent=`${r}%`,t.textContent=`${d} Years`}),e.querySelector("#btn-start-quiz").addEventListener("click",()=>{alert(`Financial IQ Quiz Question 1/3:
If you invest ₹10,000 in an ELSS Tax Saver fund under Section 80C, how long is the mandatory lock-in period?

Answer: 3 Years (Lowest lock-in among 80C options!)`)}),()=>{}}function se(e){const a=q.user;e.innerHTML=`
    <div class="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      <!-- User Welcome & Snapshot Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-card rounded-3xl p-5 sm:p-8 border border-white/10">
        <div class="flex items-center gap-3.5 sm:gap-4">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 border-2 border-primary/40 overflow-hidden flex items-center justify-center shadow-lg shrink-0">
            <img src="${a.avatar}" alt="${a.name}" class="w-full h-full object-cover"/>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs text-on-surface-variant font-medium">Welcome back,</span>
              <span class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">${a.tier}</span>
            </div>
            <h1 class="font-display text-xl sm:text-3xl font-bold text-white">${a.name}</h1>
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
            <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 sm:mt-3 tracking-tight">${n(12545670)}</h2>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div class="bg-surface-container/60 p-3.5 sm:p-4 rounded-2xl border border-white/5">
                <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium">Monthly Active SIP</p>
                <p class="font-mono text-lg sm:text-2xl font-semibold text-white mt-1">${n(25e3)}<span class="text-xs text-on-surface-variant font-normal">/mo</span></p>
              </div>
              <div class="bg-surface-container/60 p-3.5 sm:p-4 rounded-2xl border border-white/5">
                <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium">Active Goals</p>
                <p class="font-mono text-lg sm:text-2xl font-semibold text-white mt-1" id="goal-count-display">03 Goals</p>
              </div>
              <div class="bg-surface-container/60 p-3.5 sm:p-4 rounded-2xl border border-white/5 col-span-2 sm:col-span-1">
                <p class="text-[11px] sm:text-xs text-on-surface-variant font-medium">Est. 10Y Return</p>
                <p class="font-mono text-lg sm:text-2xl font-semibold text-primary mt-1">+${n(624e4)}</p>
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
                <span class="font-display text-2xl sm:text-3xl font-bold text-tertiary" id="savings-score-val">${a.savingsScore}</span>
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
                <p class="font-display text-xl sm:text-2xl font-bold text-white mt-1">${a.streakDays} Months</p>
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
            <p class="text-on-surface-variant text-xs mt-1">${n(128e5)} of ${n(2e7)} target</p>
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
            <p class="text-on-surface-variant text-xs mt-1">${n(38e5)} of ${n(1e7)} target</p>
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
            <p class="text-on-surface-variant text-xs mt-1">${n(425e4)} of ${n(5e6)} target</p>
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
  `,e.querySelector("#btn-dashboard-logout").addEventListener("click",()=>{q.logout(),window.location.hash="#login"});const l=e.querySelector("#modal-add-goal");return e.querySelector("#btn-add-goal").addEventListener("click",()=>l.classList.remove("hidden")),e.querySelector("#btn-close-modal").addEventListener("click",()=>l.classList.add("hidden")),e.querySelector("#form-new-goal").addEventListener("submit",t=>{t.preventDefault();const s=e.querySelector("#goal-title").value,r=parseFloat(e.querySelector("#goal-target").value),d=e.querySelector("#goals-container"),u=document.createElement("div");u.className="glass-card glass-card-interactive rounded-3xl p-5 sm:p-6 relative group border border-white/10",u.innerHTML=`
      <div class="flex justify-between items-start mb-4">
        <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
          <span class="material-symbols-outlined text-xl">savings</span>
        </div>
        <span class="bg-primary/20 text-primary-fixed px-2.5 py-1 rounded-full text-xs font-bold border border-primary/30">0%</span>
      </div>
      <h3 class="font-display text-lg font-bold text-white">${s}</h3>
      <p class="text-on-surface-variant text-xs mt-1">₹0 of ${n(r)} target</p>
      <div class="mt-5 h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div class="h-full bg-primary rounded-full shadow-[0_0_10px_#4edea3]" style="width: 2%"></div>
      </div>
    `,d.appendChild(u),e.querySelector("#goal-count-display").textContent="04 Goals",l.classList.add("hidden"),window.confetti&&window.confetti({particleCount:100,spread:70,origin:{y:.6}})}),()=>{}}function re(e){e.innerHTML=`
    <div class="relative min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden pt-20 pb-28 sm:pb-20">
      <!-- Background Glow Orbs -->
      <div class="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-secondary-container/20 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-md mx-auto">
        <!-- Logo & Header -->
        <div class="text-center mb-6 sm:mb-8">
          <div class="inline-flex items-center justify-center gap-3 mb-2.5">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container p-0.5 shadow-[0_0_20px_rgba(78,222,163,0.4)]">
              <div class="w-full h-full bg-[#0c1324] rounded-[10px] flex items-center justify-center">
                <span class="material-symbols-outlined text-primary text-2xl">trending_up</span>
              </div>
            </div>
            <span class="font-display text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-fixed to-primary">InvestIQ</span>
          </div>
          <p class="text-on-surface-variant text-xs sm:text-sm">Wealth Intelligence & Precision Financial Planning</p>
        </div>

        <!-- Main Auth Card -->
        <div class="glass-card rounded-3xl p-5 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
          <!-- Auth Tabs -->
          <div class="flex border-b border-white/10 mb-5 sm:mb-6">
            <button id="tab-login" class="flex-1 pb-3 text-center font-headline text-sm font-semibold text-primary border-b-2 border-primary transition-all">Sign In</button>
            <button id="tab-register" class="flex-1 pb-3 text-center font-headline text-sm font-semibold text-on-surface-variant hover:text-white transition-all">Create Account</button>
          </div>

          <!-- Quick Demo Login Banner -->
          <div class="bg-primary/10 border border-primary/20 rounded-2xl p-3.5 sm:p-4 mb-5 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="flex items-center gap-3 text-center sm:text-left">
              <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              </div>
              <div>
                <p class="text-xs font-semibold text-white">Instant Demo Access</p>
                <p class="text-[11px] text-on-surface-variant">Explore with pre-loaded ₹24.8L portfolio</p>
              </div>
            </div>
            <button id="btn-quick-demo" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-primary text-on-primary font-semibold text-xs hover:scale-105 transition-all shadow-[0_0_12px_rgba(78,222,163,0.3)] whitespace-nowrap">
              Quick Login
            </button>
          </div>

          <form id="auth-form" class="space-y-4">
            <!-- Name field (register only) -->
            <div id="field-name-group" class="hidden space-y-1.5">
              <label class="text-xs font-medium text-on-surface-variant">Full Name</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">person</span>
                <input type="text" id="input-name" placeholder="Alex Rivers" class="w-full min-h-[44px] pl-11 pr-4 py-2.5 rounded-xl bg-surface-container-lowest/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-white transition-all"/>
              </div>
            </div>

            <!-- Email field -->
            <div class="space-y-1.5">
              <label class="text-xs font-medium text-on-surface-variant">Email Address</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">mail</span>
                <input type="email" id="input-email" required value="alex.rivers@investiq.finance" placeholder="name@domain.com" class="w-full min-h-[44px] pl-11 pr-4 py-2.5 rounded-xl bg-surface-container-lowest/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-white transition-all"/>
              </div>
            </div>

            <!-- Password field -->
            <div class="space-y-1.5">
              <div class="flex justify-between items-center">
                <label class="text-xs font-medium text-on-surface-variant">Password</label>
                <a href="#" id="link-forgot" class="text-xs text-primary hover:underline">Forgot?</a>
              </div>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">lock</span>
                <input type="password" id="input-password" required value="••••••••••••" placeholder="Enter password" class="w-full min-h-[44px] pl-11 pr-11 py-2.5 rounded-xl bg-surface-container-lowest/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-white transition-all"/>
                <button type="button" id="btn-toggle-pwd" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-white transition-colors p-1">
                  <span class="material-symbols-outlined text-lg" id="icon-pwd-eye">visibility</span>
                </button>
              </div>
            </div>

            <!-- Options -->
            <div class="flex items-center justify-between pt-1">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked class="w-4 h-4 rounded bg-surface-container border-white/20 text-primary focus:ring-0 cursor-pointer"/>
                <span class="text-xs text-on-surface-variant">Remember this device</span>
              </label>
            </div>

            <!-- Submit Button -->
            <button type="submit" id="btn-submit" class="w-full min-h-[44px] py-3 rounded-xl bg-primary text-on-primary font-headline font-semibold text-sm hover:scale-[1.01] transition-transform active:scale-95 shadow-[0_0_20px_rgba(78,222,163,0.3)] flex items-center justify-center gap-2 mt-2">
              <span id="btn-submit-text">Sign In to Dashboard</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="relative my-5 sm:my-6 text-center">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-white/10"></div></div>
            <span class="relative px-3 bg-[#111728] text-[11px] text-on-surface-variant uppercase tracking-wider">Or continue with</span>
          </div>

          <!-- Social / Biometric Login -->
          <div class="grid grid-cols-2 gap-3">
            <button id="btn-google" class="min-h-[42px] py-2.5 px-4 rounded-xl bg-surface-container-high/50 border border-white/10 text-xs font-semibold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
              Google
            </button>
            <button id="btn-passkey" class="min-h-[42px] py-2.5 px-4 rounded-xl bg-surface-container-high/50 border border-white/10 text-xs font-semibold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-primary text-base">fingerprint</span>
              Passkey
            </button>
          </div>
        </div>

        <!-- Security Footer -->
        <div class="mt-5 text-center text-xs text-on-surface-variant flex items-center justify-center gap-4">
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-primary text-sm">security</span> 256-bit AES</span>
          <span>•</span>
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-primary text-sm">verified_user</span> ISO 27001</span>
        </div>
      </div>
    </div>
  `;const a=e.querySelector("#tab-login"),l=e.querySelector("#tab-register"),t=e.querySelector("#field-name-group"),s=e.querySelector("#btn-submit-text");a.addEventListener("click",()=>{a.className="flex-1 pb-3 text-center font-headline text-sm font-semibold text-primary border-b-2 border-primary transition-all",l.className="flex-1 pb-3 text-center font-headline text-sm font-semibold text-on-surface-variant hover:text-white transition-all",t.classList.add("hidden"),s.textContent="Sign In to Dashboard"}),l.addEventListener("click",()=>{l.className="flex-1 pb-3 text-center font-headline text-sm font-semibold text-primary border-b-2 border-primary transition-all",a.className="flex-1 pb-3 text-center font-headline text-sm font-semibold text-on-surface-variant hover:text-white transition-all",t.classList.remove("hidden"),s.textContent="Create Free Account"});const r=e.querySelector("#input-password"),d=e.querySelector("#btn-toggle-pwd"),u=e.querySelector("#icon-pwd-eye");return d.addEventListener("click",()=>{r.type==="password"?(r.type="text",u.textContent="visibility_off"):(r.type="password",u.textContent="visibility")}),e.querySelector("#btn-quick-demo").addEventListener("click",()=>{q.loginDemo(),window.location.hash="#dashboard"}),e.querySelector("#auth-form").addEventListener("submit",L=>{L.preventDefault();const E=e.querySelector("#input-email").value,v=r.value;q.login(E,v),window.location.hash="#dashboard"}),e.querySelector("#btn-google").addEventListener("click",()=>{q.login("alex.rivers@google.com","oauth"),window.location.hash="#dashboard"}),e.querySelector("#btn-passkey").addEventListener("click",()=>{q.loginDemo(),window.location.hash="#dashboard"}),()=>{}}function ne(e){e.innerHTML=`
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
  `,e.querySelectorAll(".faq-toggle").forEach(s=>{s.addEventListener("click",()=>{const r=s.nextElementSibling,d=s.querySelector(".icon-chevron");r.classList.contains("hidden")?(r.classList.remove("hidden"),d.style.transform="rotate(180deg)"):(r.classList.add("hidden"),d.style.transform="rotate(0deg)")})});const a=e.querySelector("#faq-search");a&&a.addEventListener("input",s=>{const r=s.target.value.toLowerCase();e.querySelectorAll(".faq-item").forEach(d=>{d.textContent.toLowerCase().includes(r)?d.style.display="block":d.style.display="none"})});const l=e.querySelector("#contact-form"),t=e.querySelector("#contact-toast");return l&&l.addEventListener("submit",s=>{s.preventDefault(),l.reset(),t.classList.remove("hidden"),setTimeout(()=>t.classList.add("hidden"),4e3)}),()=>{}}let R=null;const N={home:J,calculator:Z,compare:ee,funds:te,learn:ae,dashboard:se,login:re,contact:ne};function H(e){document.querySelectorAll(".nav-link").forEach(t=>{t.getAttribute("data-route")===e?t.className="nav-link text-primary font-bold border-b-2 border-primary pb-1 transition-all":t.className="nav-link text-on-surface-variant hover:text-primary transition-colors"}),document.querySelectorAll(".bottom-nav-item").forEach(t=>{const s=t.getAttribute("data-route");s==="compare"?e==="compare"?t.className="bottom-nav-item bg-primary text-[#0c1324] rounded-full p-3 scale-110 shadow-lg shadow-primary/40 flex items-center justify-center transition-all ring-2 ring-primary-fixed":t.className="bottom-nav-item bg-primary text-[#0c1324] rounded-full p-3 scale-110 shadow-lg shadow-primary/30 flex items-center justify-center active:scale-95 transition-all":s===e?t.className="bottom-nav-item text-primary bg-primary/10 rounded-full p-2.5 flex items-center justify-center transition-colors":t.className="bottom-nav-item text-on-surface-variant p-2.5 hover:text-primary transition-colors flex items-center justify-center active:scale-90"});const a=document.getElementById("nav-user-name"),l=document.getElementById("nav-user-avatar");a&&l&&(q.isLoggedIn?(a.textContent=q.user.name.split(" ")[0],l.src=q.user.avatar):a.textContent="Sign In")}function $(){const a=(window.location.hash.replace("#","")||"home").split("?")[0]||"home",l=N[a]?a:"home";typeof R=="function"&&(R(),R=null);const t=document.getElementById("app-view");if(!t)return;const s=N[l];R=s(t),H(l),window.scrollTo(0,0)}function le(){const e=document.getElementById("ambient-ticker-content");if(!e)return;const a=["NIFTY 50 24,850 ▲ +1.4%","SENSEX 81,300 ▲ +0.9%","GOLD ₹74,500/10g ▲ +0.5%","10Y NIFTY CAGR: 14.2%","REAL ESTATE CAGR: 9.8%","PPF RATE: 7.1% EEE","SGB RATE: 2.5% p.a. + GOLD GAIN","REINVESTMENT YIELD 1.8X","LTCG TAX SLAB 12.5% ABOVE ₹1.25L","USD/INR ₹83.65 ▼ -0.1%"],l=[...a,...a,...a].map(t=>`
    <span class="inline-flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
      <span>${t}</span>
    </span>
  `).join("");e.innerHTML=l}window.addEventListener("hashchange",$);window.addEventListener("currencyChange",$);window.addEventListener("DOMContentLoaded",()=>{W(),V(),le(),q.subscribe(()=>{H(window.location.hash.replace("#","").split("?")[0]||"home")}),$()});
