// getting value from the logIn javascript

let logIn = document.getElementById("form");

let doSomething = [];
logIn.addEventListener("submit", (event) => {
  event.preventDefault();
  let defaultData = JSON.parse(localStorage.getItem("register"));
  console.log(defaultData);

  let userEmail = document.getElementById("inputemail").value.trim();
  let password = document.getElementById("password").value.trim();
  let comfirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  let match = false;

  let successUser;

  for (let i = 0; i < defaultData.length; i++) {
    if (
      userEmail == defaultData[i]["Email"] &&
      password == defaultData[i]["password"]
    ) {
      if (password !== comfirmPassword) {
        alert("Confirm password is not matched");
        return;
      }
      match = true;

      successUser = defaultData[i];

      let which = doSomething.push(defaultData[i]);
      console.log(which);

      let logString = JSON.stringify(doSomething);
      window.localStorage.setItem("user_data", logString);
      break;
    }
  }

  if (match == true) {
    alert("Success");
    window.location.href = "../pages/home.html?user=" + successUser["userId"];
  } else {
    alert("Failed");
  }
});

// password showing funciton

// password showing funciton

let passwordInput = document.querySelector("#password");

let eyeIcon = document.querySelector(".bi-eye-slash");
console.log(eyeIcon);
let confirmEyeDiv = document.querySelector(".confirm-eye-slash-div");

let eyeDiv = document.querySelector(".eye-slash-div");

eyeDiv.addEventListener("click", (e) => {
  console.log(e.target);
  let eyeButton = e.target;
  console.log("yes");
  if (passwordInput.type === "password") {
    // eye hide element creation
    eyeButton.remove("bi bi-eye-slash");

    let eyeHide = document.createElement("i");
    eyeHide.setAttribute("class", "bi bi-eye");
    document.querySelector(".eye-slash-div").append(eyeHide);
    passwordInput.type = "text";
  } else {
    eyeButton.remove("bi bi-eye");

    let eyeIcon = document.createElement("i");
    eyeIcon.setAttribute("class", "bi bi-eye-slash");
    document.querySelector(".eye-slash-div").append(eyeIcon);
    passwordInput.type = "password";
  }
});

// confirm password input div
confirmEyeDiv.addEventListener("click", (e) => {
  console.log(e.target);
  let eyeButton = e.target;
  console.log("yes");
  if (passwordInput.type === "password") {
    // eye hide element creation
    eyeButton.remove("bi bi-eye-slash");

    let eyeHide = document.createElement("i");
    eyeHide.setAttribute("class", "bi bi-eye");
    document.querySelector(".confirm-eye-slash-div").append(eyeHide);
    passwordInput.type = "text";
  } else {
    eyeButton.remove("bi bi-eye");

    let eyeIcon = document.createElement("i");
    eyeIcon.setAttribute("class", "bi bi-eye-slash");
    document.querySelector(".confirm-eye-slash-div").append(eyeIcon);
    passwordInput.type = "password";
  }
});
