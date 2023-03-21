// home page direction location

function home() {
  window.location.href = "../index.html";
}

// camera page direction location

function freshCam() {
  window.location.href = "../pages/webcam.html";
}
// mention page direction location

function mention() {
  window.location.href = "../pages/mention.html";
}

// notification page direction location

function notification() {
  window.location.href = "../pages/notification.html";
}
// invite page direction location

function invite() {
  window.location.href = "../pages/invite.html";
}

// settings page direction

function setting() {
  window.location.href = "../pages/support.html";
}
// chat page dirction location

function freshChat() {
  // let pop = document.getElementById("chat-agree-box");
  // let accept = document.getElementById("accept");
  // let close = document.getElementById("close");

  // pop.style.display = "block";

  // accept.addEventListener("click", () => {
  window.location.href = "../pages/chat.html";
  // });

  // close.addEventListener("click", () => {
  //   return;
  // });
}

// profile picture direction

function profile() {
  window.location.href = "../pages/profile.html";
}

// log out option javascript

function logOutUser() {
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
}

// invite page event listener

let addElement = document.querySelector(".invite-adding-div-container");

addElement.addEventListener("click", () => {
  window.location.href = "../pages/add_invite_form.html";
});

// This function for redirect to notification page
