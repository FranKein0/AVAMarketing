// Detectar el evento de desplazamiento y cambiar la clase de la barra de navegación
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// MenuHamburguesa

const btnMenu = document.getElementsByClassName("btn-menu");
const body = document.body
for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
    });
}

function toggleNav() {
    const navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle("menu-open");
    }
}


