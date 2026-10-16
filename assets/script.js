const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('header nav ul');

function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
}

hamburgerBtn.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('header nav ul a');

function closeMenu() {
    navMenu.classList.remove('active');
    hamburgerBtn.classList.remove('active');
}

navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) closeMenu();
});
