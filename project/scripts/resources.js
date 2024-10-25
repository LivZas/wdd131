const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuToggle.textContent = navigation.classList.contains('active') ? '✖' : '☰';
});

document.querySelectorAll('img.fade').forEach(img => {
    img.onload = () => {
        img.classList.add('loaded');
    };
});
