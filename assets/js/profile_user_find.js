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
