const hamburger = document.getElementById('btn');
const navbar = document.getElementById('nav');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('fa-minus');
    navbar.classList.toggle('active');
});


