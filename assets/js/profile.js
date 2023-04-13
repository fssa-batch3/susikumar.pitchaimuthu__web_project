// Profile user element value set creations

let name1 = (document.getElementById("firstName").value =
  findUser["firstName"]);

let name2 = (document.getElementById("lastName").value = findUser["lastName"]);
// console.log(name2);
let uname = (document.getElementById("userName").value = findUser["userName"]);
let mail = (document.getElementById("email").value = findUser["Email"]);

let head = (document.getElementById("profile-head").innerText =
  "Hello" + "   " + findUser["userName"]);

// console.log(head);

let phone = (document.getElementById("phone").value = findUser["mobileNumber"]);
// console.log(phone);

// profile image

let profileImage = (document.querySelector(".profile-image").src =
  findUser["avatarUrl"]);
console.log(profileImage);

let userTheme = (document.querySelector(".user-theme").innerHTML =
  findUser["userTheme"]);
