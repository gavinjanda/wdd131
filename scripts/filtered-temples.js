const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
      templeName: "Las Vegas Nevada",
      location: "Las Vegas, Nevada",
      dedicated: "1985, November, 30",
      area: 80350,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-35604-main.jpg"
    },
    {
      templeName: "Idaho Falls Idaho",
      location: "Idaho Falls, Idaho",
      dedicated: "1940, October, 19",
      area: 85624,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-31085-main.jpg"
    },
    {
      templeName: "San Diego California",
      location: "San Diego, California",
      dedicated: "1988, February, 27",
      area: 72000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    }
  ];

const navLinks = document.querySelectorAll('nav a');
const h2Title = document.getElementById('current');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault()
        const clickedAnchor = event.target.textContent;
        h2Title.textContent = `${clickedAnchor}`
    })
});

const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = document.lastModified;

lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`;

const hamburger = document.getElementById('menu');
const mainnav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hamburger.classList.toggle('open');
});

const templeCardElement = document.getElementById('templeCards');

function displayTemples(minYear = null, maxYear = null, minArea = null, maxArea = null) {
    const filteredTemplesHTML = temples.filter(temple => {

        // year conditions
        const year = parseInt(temple.dedicated.split(',')[0]);
        const isYearValidOld = (minYear != null) ? year < minYear : true;
        const isYearValidNew = (maxYear != null) ? year > maxYear : true;

        // area conditions
        const isAreaValidSmall = (minArea != null) ? temple.area < minArea : true;
        const isAreaValidLarge = (maxArea != null) ? temple.area > maxArea : true;

        return (minYear != null && isYearValidOld) ||
               (maxYear != null && isYearValidNew) ||
               (minArea != null && isAreaValidSmall) ||
               (maxArea != null && isAreaValidLarge) ||
               (minYear == null && maxYear == null && minArea == null && maxArea == null);
    })
    .map(temple => {
        return `
            <div class="templecard">
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Date Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="Picture of ${temple.templeName}" max-width="400px" max-height="200px" loading="lazyload">
            </div>
            `;
    }).join('');

    templeCardElement.innerHTML = filteredTemplesHTML;
}

window.onload = () => displayTemples(null,null, null, null);

document.getElementById('home').addEventListener('click', () => displayTemples(null, null, null, null));
document.getElementById('filterold').addEventListener('click', () => displayTemples(1950, null, null, null));
document.getElementById('filternew').addEventListener('click', () => displayTemples(null, 2000, null, null));
document.getElementById('filterlarge').addEventListener('click', () => displayTemples(null, null, null, 90000));
document.getElementById('filtersmall').addEventListener('click', () => displayTemples(null, null, 10000, null));
