document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('durationSlider');
  const durationValue = document.getElementById('durationValue');
  const projectedCost = document.getElementById('projectedCost');

  if (slider && durationValue && projectedCost) {
    slider.addEventListener('input', (e) => {
      const days = parseInt(e.target.value, 10);
      const calculated = Math.round(days * DashboardData.costProjection.baseDailyRate);
      
      durationValue.textContent = `${days} days`;
      projectedCost.textContent = formatCurrency(calculated);

      const dynamicSparkline = [
        calculated * 0.15,
        calculated * 0.35,
        calculated * 0.6,
        calculated * 0.8,
        calculated
      ];
      renderProjectionSparkline(dynamicSparkline);
    });
  }

  applySavedSettings();
});

const currencySymbols = {
  USD: '$',
  EUR: '€',
  JPY: '¥',
  GBP: '£'
};

function formatCurrency(amount) {
  const preferences = JSON.parse(localStorage.getItem('gt_preferences') || '{}');
  const symbol = currencySymbols[preferences.currency || 'USD'] || '$';
  return `${symbol}${amount.toLocaleString()}`;
}

function applySavedSettings() {
  const profile = JSON.parse(localStorage.getItem('gt_profile') || '{}');
  const fullName = [profile.firstName, profile.lastName].filter(Boolean).join(' ') || 'Alex Mercer';
  const avatar = profile.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80';

  document.getElementById('dashboardUserName').textContent = fullName;
  document.getElementById('cardholderName').textContent = fullName;
  document.getElementById('dashboardAvatar').src = avatar;
  document.getElementById('dashboardAvatar').alt = fullName;

  const preferences = JSON.parse(localStorage.getItem('gt_preferences') || '{}');
  const symbol = currencySymbols[preferences.currency || 'USD'] || '$';
  document.querySelectorAll('[data-money]').forEach((element) => {
    const amount = Number(element.dataset.money);
    element.textContent = formatCurrency(amount);
  });

  const distance = preferences.distance === 'kilometers'
    ? Math.round(14205 * 1.60934)
    : 14205;
  document.getElementById('distanceValue').textContent = distance.toLocaleString();
  const distanceUnit = document.getElementById('distanceUnit');
  if (distanceUnit) distanceUnit.textContent = preferences.distance === 'kilometers' ? 'km' : 'mi';

  document.querySelectorAll('[data-date]').forEach((element) => {
    const date = new Date(`${element.dataset.date}T00:00:00`);
    const format = preferences.dateFormat || 'MM/DD/YYYY';
    if (format === 'DD/MM/YYYY') {
      element.textContent = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    } else if (format === 'YYYY-MM-DD') {
      element.textContent = element.dataset.date;
    } else {
      element.textContent = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  });
}

window.addEventListener('storage', (event) => {
  if (['gt_profile', 'gt_preferences'].includes(event.key)) {
    applySavedSettings();
    if (event.key === 'gt_preferences' && window.Chart && typeof renderSpendAnalytics === 'function') {
      renderSpendAnalytics(DashboardData.spendAnalytics);
    }
  }
});
