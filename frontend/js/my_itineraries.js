document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('#tripFilters .filter-tab-btn');
  const tripCards = document.querySelectorAll('#tripsContainer .trip-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      tripCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('d-none');
        } else {
          card.classList.add('d-none');
        }
      });
    });
  });
});
