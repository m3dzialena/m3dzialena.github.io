document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul li a');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInsideNav && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Obsługa przycisku "Zobacz wszystko" - bez zmian
  const toggleBtn = document.getElementById('toggle-btn');
  const dodatkowyTekst = document.getElementById('dodatkowyTekst');

  if (toggleBtn && dodatkowyTekst) {
    toggleBtn.addEventListener('click', function() {
      dodatkowyTekst.classList.toggle('hidden');

      if (dodatkowyTekst.classList.contains('hidden')) {
        toggleBtn.textContent = 'Zobacz wszystko';
      } else {
        toggleBtn.textContent = 'Zobacz mniej';
      }
    });
  }
});