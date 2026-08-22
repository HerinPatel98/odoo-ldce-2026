document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('durationSlider');
  const durationValue = document.getElementById('durationValue');
  const projectedCost = document.getElementById('projectedCost');

  if (slider && durationValue && projectedCost) {
    slider.addEventListener('input', (e) => {
      const days = parseInt(e.target.value, 10);
      const calculated = Math.round(days * DashboardData.costProjection.baseDailyRate);
      
      durationValue.textContent = `${days} days`;
      projectedCost.textContent = `$${calculated.toLocaleString()}`;

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
});
