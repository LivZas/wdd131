const initializeFooter = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
};

const toggleMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
        menuToggle.textContent = navigation.classList.contains('active') ? '✖' : '☰';
    });
};

const loadFeedbackOptions = () => {
    const feedbackOptions = [
        { id: "positive", name: "Yes" },
        { id: "negative", name: "No" },
        { id: "indecisive", name: "It could get better" },
        { id: "opinion", name: "Other (write your review)" }
    ];

    const selectElement = document.getElementById('your-opinion');
    feedbackOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.id;
        optionElement.textContent = option.name;
        selectElement.appendChild(optionElement);
    });
};

const handleFormSubmit = () => {
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const feedbackData = {
            yourOpinion: form['your-opinion'].value,
            rating: form.rating.value,
            date: form['feedback-date'].value,
            features: Array.from(form.features).filter(feature => feature.checked).map(feature => feature.value),
            message: form.message.value,
            name: form.name.value
        };

        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(feedbackData);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);

        window.location.href = 'review.html';
    });
};

const init = () => {
    initializeFooter();
    toggleMenu();
    loadFeedbackOptions();
    handleFormSubmit();
};

document.addEventListener('DOMContentLoaded', init);
