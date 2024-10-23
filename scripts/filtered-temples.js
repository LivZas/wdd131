const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        year: 2005,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        year: 1888,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        year: 2015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        year: 2020,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        year: 1974,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 9600,
        year: 1986,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        year: 1983,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Panama City Panama",
        location: "Ancon, Panama Province, Panama",
        dedicated: "2008, August, 10",
        area: 18943,
        year: 2008,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/400x250/panama-city-temple-lds-569185-wallpaper.jpg"
    },
    {
        templeName: "Seoul Korea",
        location: "Seoul, South Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        year: 1985,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Friedrichsdorf, Germany",
        dedicated: "1987, August, 28",
        area: 32895,
        year: 1987,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-germany-temple-lds-82734-wallpaper.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    createTempleCard(temples);

    document.querySelector('a[title="Home"]').addEventListener('click', (event) => {
        event.preventDefault();
        createTempleCard(temples);
    });

    document.querySelector('a[title="Old"]').addEventListener('click', (event) => {
        event.preventDefault();
        const oldTemples = temples.filter(temple => temple.year < 1900);
        createTempleCard(oldTemples);
    });

    document.querySelector('a[title="New"]').addEventListener('click', (event) => {
        event.preventDefault();
        const newTemples = temples.filter(temple => temple.year > 2000);
        createTempleCard(newTemples);
    });

    document.querySelector('a[title="Large"]').addEventListener('click', (event) => {
        event.preventDefault();
        const largeTemples = temples.filter(temple => temple.area > 90000);
        createTempleCard(largeTemples);
    });

    document.querySelector('a[title="Small"]').addEventListener('click', (event) => {
        event.preventDefault();
        const smallTemples = temples.filter(temple => temple.area < 10000);
        createTempleCard(smallTemples);
    });
});

function createTempleCard(filteredTemples) {
    const templeGrid = document.querySelector("#temple-grid");
    templeGrid.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-grid");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);

        templeGrid.appendChild(card);
    });
}
