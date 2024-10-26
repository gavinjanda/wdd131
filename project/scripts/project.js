// Hamburger Menu
const hamburger = document.getElementById('menu');
const mainnav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// LocalStorage Saving Form information
const estimates = JSON.parse(localStorage.getItem('estimates')) || [];
const form = document.querySelector('.estimate-form');

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = {
            firstName: document.getElementById('fname')?.value || "N/A",
            lastName: document.getElementById('lname')?.value || "N/A",
            email: document.getElementById('email')?.value || "N/A",
            phone: document.getElementById('phone')?.value || "N/A",
            trade: document.querySelector('input[name="trade"]:checked')?.value || "N/A",
            description: document.getElementById('description')?.value || "N/A",
        };

        estimates.push(formData);

        localStorage.setItem('estimates', JSON.stringify(estimates));

        window.location.href = 'thanks.html';
    });
});

// Display in thanks.html
const lastEstimate = estimates[estimates.length-1];

const thankYou = document.getElementById('confirmation-message');
if(lastEstimate) {
    thankYou.innerHTML =`
        <h2 class="thanks-title">Request Sent!</h2>
        <p class="thanks-description">Thank you, ${lastEstimate.firstName} for choosing us!<br>
        We've received your request and we will reach out to you the soonest we can at ${lastEstimate.email}.</p>
        `
    };