const slider = document.getElementById('durationSlider');
const durationValue = document.getElementById('durationValue');
const projectedCost = document.getElementById('projectedCost');

if (slider) {
  slider.addEventListener('input', (e) => {
    const days = parseInt(e.target.value, 10);
    durationValue.textContent = `${days} days`;
    const cost = Math.round(days * 120.71);
    projectedCost.textContent = `$${cost.toLocaleString()}`;
  });
}