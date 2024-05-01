document.addEventListener('DOMContentLoaded', function() {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  // Toggle dropdown menu
  dropdownButton.addEventListener('click', function() {
      const expanded = dropdownButton.getAttribute('aria-expanded') === 'true';
      dropdownButton.setAttribute('aria-expanded', String(!expanded));
      dropdownMenu.setAttribute('aria-hidden', String(expanded));
  });
});