const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

//Create option list
document.addEventListener('DOMContentLoaded', function() {
  createProduct();

  function createProduct(){
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
      document.querySelector('#product').append(option);
    })
  }
});

if (!localStorage.getItem("clickCount")) {
  localStorage.setItem("clickCount", 0);
}

// Add event listener to the submit button on the first page
const submitButton = document.getElementById("submitButton");
if (submitButton) {
  submitButton.addEventListener("click", () => {
    let reviewNum = parseInt(localStorage.getItem("clickCount")) || 0;
    reviewNum++;
    localStorage.setItem("clickCount", reviewNum);
  });
}

// Update the span with the click count on the second page
const reviewsSpan = document.querySelector(".numReviews");
if (reviewsSpan) {
  const clickCount = localStorage.getItem("clickCount") || 0;
  reviewsSpan.textContent = `${clickCount}`;
}


// Footer content
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;
const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = document.lastModified;
lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`