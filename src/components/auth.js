class AuthManager {
  constructor() {
    const saved = localStorage.getItem('investiq_auth');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.user = parsed.user;
        this.isLoggedIn = parsed.isLoggedIn;
      } catch (e) {
        this.resetDefault();
      }
    } else {
      this.resetDefault();
    }
    this.listeners = [];
  }

  resetDefault() {
    this.user = {
      name: "Alex Rivers",
      email: "alex.rivers@investiq.finance",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3nJ60haWp8Qx_7cxsBxEE6jj52llF5mSfu1DWPL2QCaG-JO-F6nGv7HXgP8ZcVZOrhLY8vZ49UOJC1_LXPo-4eNG_ydnwNUsUEpYhpIvbN-WM5CIJhkqJCRLfgmuGdTcKm6682FlJhqmi5-YzSe8G8-lGClt84K0sDkscMYd8YmusehJ7BjSBdauKLfVhDndCTm2mt3kXOyNlkWQldrZde_W_NW1OIQ-jA1PoB3xH3x_BSkHqbhJYKyNc1v6oIgiBNQcn4Fl-N_mm",
      portfolioValue: "₹24,85,900",
      savingsScore: 850,
      streakDays: 12,
      tier: "InvestIQ Pro"
    };
    this.isLoggedIn = true; // Default logged in for easy testing, but toggleable
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    localStorage.setItem('investiq_auth', JSON.stringify({
      user: this.user,
      isLoggedIn: this.isLoggedIn
    }));
    this.listeners.forEach(l => l(this.isLoggedIn, this.user));
  }

  login(email, password) {
    this.user.email = email || "alex.rivers@investiq.finance";
    if (email && email.split('@')[0]) {
      const parts = email.split('@')[0].split('.');
      this.user.name = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    }
    this.isLoggedIn = true;
    this.notify();
    return true;
  }

  loginDemo() {
    this.resetDefault();
    this.isLoggedIn = true;
    this.notify();
    return true;
  }

  logout() {
    this.isLoggedIn = false;
    this.notify();
  }
}

export const auth = new AuthManager();
