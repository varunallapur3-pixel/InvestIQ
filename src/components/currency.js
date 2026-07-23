// Currency rates and formatting utilities

export const currencies = {
  INR: { symbol: '₹', rate: 1, name: 'Indian Rupee (INR)' },
  USD: { symbol: '$', rate: 0.012, name: 'US Dollar (USD)' },
  EUR: { symbol: '€', rate: 0.011, name: 'Euro (EUR)' },
  GBP: { symbol: '£', rate: 0.0093, name: 'British Pound (GBP)' }
};

let currentCurrency = localStorage.getItem('investiq_currency') || 'INR';

export function setCurrency(code) {
  if (currencies[code]) {
    currentCurrency = code;
    localStorage.setItem('investiq_currency', code);
    window.dispatchEvent(new CustomEvent('currencyChange', { detail: code }));
  }
}

export function getCurrency() {
  return currentCurrency;
}

export function getCurrencySymbol() {
  return (currencies[currentCurrency] || currencies.INR).symbol;
}

export function formatCurrency(amountINR) {
  const curr = currencies[currentCurrency] || currencies.INR;
  const num = typeof amountINR === 'number' ? amountINR : parseFloat(amountINR) || 0;
  const converted = num * curr.rate;
  
  if (currentCurrency === 'INR') {
    return `${curr.symbol} ${Math.round(converted).toLocaleString('en-IN')}`;
  }
  return `${curr.symbol} ${Math.round(converted).toLocaleString('en-US')}`;
}
