//  Get input element to know the input require content

let searchInput = document.querySelector("#person-adding-input");

searchInput.addEventListener("input", searchFilter);

// Getting the users data from the database

const results = JSON.parse(localStorage.getItem("register"));
const resultsArray = Array.from(results);

// search filte function

function searchFilter() {
  let searchText = searchInput.value.toLowerCase();

  resultsArray.forEach((result) => {
    const textContent = result.textContent.toLowerCase();
    if (textContent.includes(searchText)) {
      result.style.display = "";
    } else {
      result.style.display = "none";
    }
  });
}
searchInput.addEventListener("input", searchFilter);
