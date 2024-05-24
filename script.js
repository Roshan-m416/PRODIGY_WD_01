window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#222'; // Darker color when scrolled
    } else {
      navbar.style.backgroundColor = '#333'; // Original color at the top
    }
  });