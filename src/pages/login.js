import { auth } from '../components/auth.js';

export function renderLoginPage(container) {
  container.innerHTML = `
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
  `;

  // Tab switching logic
  let isLoginTab = true;
  const tabLogin = container.querySelector('#tab-login');
  const tabRegister = container.querySelector('#tab-register');
  const fieldName = container.querySelector('#field-name-group');
  const btnSubmitText = container.querySelector('#btn-submit-text');

  tabLogin.addEventListener('click', () => {
    isLoginTab = true;
    tabLogin.className = "flex-1 pb-3 text-center font-headline text-sm font-semibold text-primary border-b-2 border-primary transition-all";
    tabRegister.className = "flex-1 pb-3 text-center font-headline text-sm font-semibold text-on-surface-variant hover:text-white transition-all";
    fieldName.classList.add('hidden');
    btnSubmitText.textContent = "Sign In to Dashboard";
  });

  tabRegister.addEventListener('click', () => {
    isLoginTab = false;
    tabRegister.className = "flex-1 pb-3 text-center font-headline text-sm font-semibold text-primary border-b-2 border-primary transition-all";
    tabLogin.className = "flex-1 pb-3 text-center font-headline text-sm font-semibold text-on-surface-variant hover:text-white transition-all";
    fieldName.classList.remove('hidden');
    btnSubmitText.textContent = "Create Free Account";
  });

  // Password toggle
  const pwdInput = container.querySelector('#input-password');
  const btnTogglePwd = container.querySelector('#btn-toggle-pwd');
  const iconPwdEye = container.querySelector('#icon-pwd-eye');

  btnTogglePwd.addEventListener('click', () => {
    if (pwdInput.type === 'password') {
      pwdInput.type = 'text';
      iconPwdEye.textContent = 'visibility_off';
    } else {
      pwdInput.type = 'password';
      iconPwdEye.textContent = 'visibility';
    }
  });

  // Quick Demo Login Button
  container.querySelector('#btn-quick-demo').addEventListener('click', () => {
    auth.loginDemo();
    window.location.hash = '#dashboard';
  });

  // Form submit
  container.querySelector('#auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#input-email').value;
    const password = pwdInput.value;
    auth.login(email, password);
    window.location.hash = '#dashboard';
  });

  // Social Buttons
  container.querySelector('#btn-google').addEventListener('click', () => {
    auth.login("alex.rivers@google.com", "oauth");
    window.location.hash = '#dashboard';
  });

  container.querySelector('#btn-passkey').addEventListener('click', () => {
    auth.loginDemo();
    window.location.hash = '#dashboard';
  });

  return () => {};
}
