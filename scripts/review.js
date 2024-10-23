const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

const reviewCount = localStorage.getItem('reviewCount') || 0;
document.getElementById('review-count').textContent = reviewCount;
