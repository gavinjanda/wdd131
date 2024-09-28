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