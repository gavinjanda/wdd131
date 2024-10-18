

// Footer content
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;
const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = document.lastModified;
lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`