document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];
  
    const selectElement = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
  
    const rangeInput = document.getElementById('rating');
    if (rangeInput) {
        rangeInput.addEventListener('input', (e) => {
            console.log(`Valor seleccionado: ${e.target.value}`);
        });
    }
  
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
            reviewCount++;
            localStorage.setItem('reviewCount', reviewCount);
            window.location.href = 'review.html';
        });
    }
});
