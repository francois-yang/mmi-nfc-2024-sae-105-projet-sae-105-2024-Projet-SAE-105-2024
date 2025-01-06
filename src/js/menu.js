const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const menu = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked'); 
    menu.classList.add('menu--active');
});

menuClose.addEventListener('click', () => {
    console.log('Menu close clicked');
    menu.classList.remove('menu--active');
});

document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', (event) => {
        console.log(`Menu item clicked: ${event.target.textContent}`); 
    });
});