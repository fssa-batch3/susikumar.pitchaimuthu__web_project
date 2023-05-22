// getting value from the logIn javascript

let logIn = document.getElementById("form");

let doSomething = [];
logIn.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    let defaultData = JSON.parse(localStorage.getItem("register"));
    console.log(defaultData);

    let userEmail = document.getElementById("inputemail").value.trim();
    let password = document.getElementById("password").value.trim();

    // Here checking the user is a admit or not

    let adminEmail = "admin143.freshnest@gmail.com";
    let adminPassword = "1234@SMsm";

    if (userEmail == adminEmail && password == adminPassword) {
      window.location.href = "../pages/dashboard.html";
      return;
    }

    let match = false;

    let usercheck = defaultData.find((e) => e["email"] == userEmail);
    console.log(usercheck);

    if (usercheck == undefined) {
      alert("Email id not found");
      return;
    } else if (usercheck["password"] !== password) {
      alert("Password is not correct");
      return;
    } else {
      match = true;

      let which = doSomething.push(usercheck);
      console.log(which);

      let logString = JSON.stringify(doSomething);
      window.localStorage.setItem("user_data", logString);
    }

    if (match == true) {
      alert("You are successfully get into freshnest");
      window.location.href = "../pages/home.html?user=" + usercheck["userId"];
    }
  } catch (error) {
    console.log("Error " + error.message);
  }
});

// password showing funciton

// password showing funciton

let passwordInput = document.querySelector("#password");

let eyeIcon = document.querySelector(".bi-eye-slash");
console.log(eyeIcon);
let confirmEyeDiv = document.querySelector(".confirm-eye-slash-div");

let eyeDiv = document.querySelector(".eye-slash-div");

let confirmPasswordInput = document.querySelector("#confirm-password");

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
