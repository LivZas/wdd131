document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img[loading="lazy"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s forwards';
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => observer.observe(img));
});


const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;