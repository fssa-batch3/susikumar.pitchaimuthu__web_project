// get user from the url

let userUrl = window.location.search;
let userUrlParams = new URLSearchParams(userUrl);

console.log(userUrlParams);
let urlId = userUrlParams.get("user");
console.log(urlId);

let info = JSON.parse(window.localStorage.getItem("register"));

// usin find method for find the user

let findUser = info.find((user) => user["userId"] == urlId);
console.log(findUser);

// profile image and details adding elements

let profile_image = document.querySelector("#profile-image");
let profile_name = document.querySelector(".name");

profile_image.setAttribute("src", findUser["avatarUrl"]);
profile_name.innerHTML = findUser["userName"];

// profile picture direction

let profile = document.querySelector(".image-text");

profile.addEventListener("click", () => {
  window.location.href = "../pages/profile.html";
});
