document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar ul');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('open');
    });
});
