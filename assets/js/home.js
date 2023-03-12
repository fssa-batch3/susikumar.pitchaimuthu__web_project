// user profile image

let currentUserData = JSON.parse(localStorage.getItem("user_data"));
console.log(currentUserData);

let currentUserRegisterData = JSON.parse(localStorage.getItem("register"));

let findCurrentUser = currentUserRegisterData.find(
  (e) => e.Email == currentUserData[0]["Email"]
);

let userProfileImage = document.getElementById("user-image");
userProfileImage.src = findCurrentUser["avatarUrl"];
