function calculateWindChill(temperature, velocity) {
    if(temperature >= 10 || velocity < 4.8) {
        return "N/A";
    }

    const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(velocity, 0.16)) + (0.3965 * temperature * Math.pow(velocity, 0.16));

    return windChill.toFixed(2);
}

const temperatureElement = document.getElementById('temperature');

const velocityElement = document.getElementById('velocity');

const temperature = parseFloat(temperatureElement.textContent);
const velocity = parseFloat(velocityElement.textContent);

const actWindChill = calculateWindChill(temperature, velocity);

document.getElementById("actWindChill").innerHTML = `<span>${actWindChill}</span>`



const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified");

const lastModifiedDate = document.lastModified;

lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`