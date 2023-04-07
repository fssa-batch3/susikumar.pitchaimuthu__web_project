// Page redirection elements

let home = document.querySelector("#home");
let camera = document.querySelector("#camera");
let chat = document.querySelector("#chat");
let invite = document.querySelector("#invite");
let setting = document.querySelector("#setting");
let notification = document.querySelector("#notification");
let profile = document.querySelector(".image-text");
let logOut = document.querySelector(".logOut");

// home page direction location

home.addEventListener("click", () => {
  window.location.href = "../pages/after_home.html?user=" + findUser["userId"];
});

// camera page direction location

camera.addEventListener("click", () => {
  window.location.href = "../pages/webcam.html?user=" + findUser["userId"];
});

// notification page direction location

notification.addEventListener("click", () => {
  window.location.href =
    "../pages/notification.html?user=" + findUser["userId"];
});

// invite page direction location

invite.addEventListener("click", () => {
  window.location.href = "../pages/invite.html?user=" + findUser["userId"];
});

// settings page direction

setting.addEventListener("click", () => {
  window.location.href = "../pages/setting.html?user=" + findUser["userId"];
});

// chat page dirction location

chat.addEventListener("click", () => {
  window.location.href = "../pages/chat.html?user=" + findUser["userId"];
});

// profile picture direction

profile.addEventListener("click", () => {
  window.location.href = "../pages/profile.html";
});

// log out option javascript

logOut.addEventListener("click", () => {
  let logOutValue = JSON.parse(localStorage.getItem("user_data"));

  if (logOutValue !== null) {
    let message = confirm("Are sure to log out your account in Fresh Nest?");

    if (message !== true) {
      return;
    } else {
      logOutValue.splice(logOutValue[0], 1);
      localStorage.setItem("user_data", JSON.stringify(logOutValue));
      window.location.href = "../index.html";
    }
  }
});

// invite page event listener

// let addElement = document.querySelector(".invite-adding-div-container");

// addElement.addEventListener("click", () => {
//   window.location.href = "../pages/add_invite_form.html";
// });

// This function for redirect to notification page
