window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const menuContainer = document.querySelector('.menu-container');
    
    if (scrollPosition > 0) {
      menuContainer.classList.add('scrolled');
    } else {
      menuContainer.classList.remove('scrolled');
    }
  });


