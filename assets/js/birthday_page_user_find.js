let getUser = window.location.search;

let userParams = new URLSearchParams(getUser);

let urlId = userParams.get("user");
console.log(urlId);

// Getting all register data to know the user

let allRegister = JSON.parse(localStorage.getItem("register"));

let findUserData = allRegister.find((e) => e["userId"] == urlId);
console.log(findUserData);

let findIndexUser = allRegister.indexOf(findUserData);
console.log(findIndexUser);
