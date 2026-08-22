const DashboardData = {
  spendAnalytics: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    budget: [700, 1100, 850, 1450, 1200, 1400, 1800, 1400],
    actual: [650, 1200, 800, 1350, 1250, 1350, 1750, 1300]
  },
  budgetAllocation: {
    labels: ['Stay', 'Transport', 'Food'],
    amounts: [720, 310, 210],
    colors: ['#0d9488', '#f59e0b', '#0ea5e9']
  },
  costProjection: {
    baseDailyRate: 120.71,
    growthPoints: [200, 420, 750, 1100, 1420, 1690]
  }
};

let spendChartInstance = null;
let budgetChartInstance = null;
let projectionChartInstance = null;

function renderSpendAnalytics(data) {
  const ctx = document.getElementById('spendAnalyticsChart');
  if (!ctx || !window.Chart) return;

  if (spendChartInstance) spendChartInstance.destroy();

  spendChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Budget',
          data: data.budget,
          borderColor: '#0d9488',
          backgroundColor: 'rgba(13, 148, 136, 0.08)',
          tension: 0.4,
          fill: true,
          pointRadius: 0
        },
        {
          label: 'Actual',
          data: data.actual,
          borderColor: '#d97706',
          backgroundColor: 'transparent',
          tension: 0.4,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: {
          grid: { color: '#edf0f5' },
          ticks: { callback: (v) => `$${v}` }
        }
      }
    }
  });
}

function renderBudgetAllocation(data) {
  const ctx = document.getElementById('budgetDonutChart');
  if (!ctx || !window.Chart) return;

  if (budgetChartInstance) budgetChartInstance.destroy();

  budgetChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.labels,
      datasets: [{
        data: data.amounts,
        backgroundColor: data.colors,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '78%',
      plugins: { legend: { display: false } }
    }
  });
}

function renderProjectionSparkline(dataPoints) {
  const ctx = document.getElementById('projectionMiniChart');
  if (!ctx || !window.Chart) return;

  if (projectionChartInstance) projectionChartInstance.destroy();

  projectionChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataPoints.map((_, i) => i),
      datasets: [{
        data: dataPoints,
        borderColor: '#0d9488',
        backgroundColor: 'rgba(13, 148, 136, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSpendAnalytics(DashboardData.spendAnalytics);
  renderBudgetAllocation(DashboardData.budgetAllocation);
  renderProjectionSparkline(DashboardData.costProjection.growthPoints);
});
