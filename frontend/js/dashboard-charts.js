document.addEventListener('DOMContentLoaded', () => {
  const spendCtx = document.getElementById('spendAnalyticsChart');
  if (spendCtx && window.Chart) {
    new Chart(spendCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Budget',
            data: [700, 1100, 850, 1450, 1200, 1400, 1800, 1400],
            borderColor: '#0d9488',
            backgroundColor: 'rgba(13, 148, 136, 0.05)',
            tension: 0.4,
            fill: true,
            pointRadius: 0
          },
          {
            label: 'Actual',
            data: [650, 1200, 800, 1350, 1250, 1350, 1750, 1300],
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
            ticks: {
              callback: (value) => `$${value}`
            }
          }
        }
      }
    });
  }

  const budgetCtx = document.getElementById('budgetDonutChart');
  if (budgetCtx && window.Chart) {
    new Chart(budgetCtx, {
      type: 'doughnut',
      data: {
        labels: ['Stay', 'Transport', 'Food'],
        datasets: [{
          data: [720, 310, 210],
          backgroundColor: ['#0d9488', '#f59e0b', '#0ea5e9'],
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
});
