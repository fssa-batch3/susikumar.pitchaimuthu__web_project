// first getting all the elements for the forms

let userNameP = document.querySelector(".profile-user-name");
let userSloganP = document.querySelector(".profile-user-slogan");
let profileImage = document.querySelector(".profile-image");
let fName = document.querySelector("#firstName");
let lName = document.querySelector("#lastName");
let uName = document.querySelector("#userName");
let bio = document.querySelector("#bio");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let gender = document.querySelectorAll("#gender");
let dateOfBirth = document.querySelector("#dateOfBirth");
let phoneNumber = document.querySelector("#phone");

// set the value to the all inputs

profileImage.src = findUser["avatarUrl"];
userNameP.innerHTML = findUser["userName"];
userSloganP.innerHTML = findUser["userTheme"];
fName.value = findUser["firstName"];
lName.value = findUser["lastName"];
uName.value = findUser["userName"];
bio.value = findUser["userTheme"];
email.value = findUser["email"];
city.value = findUser["city"];
phoneNumber.value = findUser["mobileNumber"];

for (let i = 0; i < gender.length; i++) {
  if (gender[i]["value"] === findUser["userGender"]) {
    gender[i].checked = true;
  }
}

dateOfBirth.value = findUser["dateOfBirth"];
