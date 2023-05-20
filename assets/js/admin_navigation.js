// Getting the element to navigate the data to the each page

let dashboard = document.querySelector("#analytics");
let inquaries = document.querySelector("#inquaries");
let solvedQuaries = document.querySelector("#solved-inquaries");
let report = document.querySelector("#user");

// Creating a navigation function to the each page

dashboard.addEventListener("click", (event) => {
  event.preventDefault();

  window.location.href = "../pages/dashboard.html";
});

inquaries.addEventListener("click", (event) => {
  event.preventDefault();

  window.location.href = "../pages/inquaries.html";
});

solvedQuaries.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../pages/solved_quaries.html";
});

report.addEventListener("click", (event) => {
  event.preventDefault();

  window.location.href = "../pages/user.html";
});
