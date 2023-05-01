let signUpFrom = document.getElementById("form");
signUpFrom.addEventListener("submit", (event) => {
  event.preventDefault();

  let userData = [];

  if (localStorage.getItem("register") != null) {
    userData = JSON.parse(localStorage.getItem("register"));
  }

  let firstElement = document.getElementById("firstname").value.trim();
  let lastElememt = document.getElementById("lastname").value.trim();
  let userName = document.getElementById("username").value.trim();
  let userEmail = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let cryptoValue = Date.now();

  //avatar text
  let avatarText = firstElement.toUpperCase().charAt(0);
  console.log(avatarText);

  // avatar create

  let avatarCanva = document.createElement("canvas");
  let avatarContext = avatarCanva.getContext("2d");

  avatarCanva.width = 200;
  avatarCanva.height = 200;

  // draw background
  avatarContext.fillStyle = "blue";
  avatarContext.fillRect = (0, 0, avatarCanva.width, avatarCanva.height);

  // draw text

  avatarContext.font = "bold 100px Assistant";
  avatarContext.textAlign = "center";
  avatarContext.textBaseline = "middle";
  avatarContext.fillText(
    avatarText,
    avatarCanva.width / 2,
    avatarCanva.height / 2
  );
  avatarContext.fillStyle = "pink";

  // return

  let imageUrl = avatarCanva.toDataURL("image/png");

  // Writing function to create en dash to space of user name

  var spaceRegex = / /g;

  // Replace spaces with an end dash
  var dashedText = userName.replace(spaceRegex, "_");

  // return dashedText;

  console.log(dashedText);

  // let checkUser = JSON.parse(localStorage.getItem("register"));

  for (let i = 0; i < userData.length; i++) {
    if (userData[i]["Email"] === userEmail) {
      match = true;
      alert("user Email ID is already exist");
      return;
    } else if (userData[i]["userName"] == userName) {
      alert("user name already exist can you change your user name");
      return;
    }
  }

  let userObj = {
    userId: cryptoValue,
    firstName: firstElement,
    lastName: lastElememt,
    userName: dashedText,
    email: userEmail.toLowerCase(),
    password: password,
    avatarUrl: imageUrl,
    userTheme: "Hey! I am using fresh nest",
  };

  console.log(userObj);
  console.log(userData);

  userData.push(userObj);
  let str = JSON.stringify(userData);
  localStorage.setItem("register", str);
  alert("Success");
  window.location.href = "./birthday.html?user=" + cryptoValue;
});

// password showing funciton

let passwordInput = document.querySelector("#password");

let eyeIcon = document.querySelector(".bi-eye-slash");
console.log(eyeIcon);

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

// password strength calculation

let passwordStrength = document.querySelector("#password");

function calculatePasswordStrength(passwordStrength) {
  let strength = 0;
  console.log(strength);
  let hr = document.querySelector(".hr");
  let emojiSpan = document.querySelector(".emoji-span");
  let passwordContent = document.querySelector(".password-content");

  // Evaluate length

  if (passwordStrength.length <= 8) {
    strength += 1;
    hr.style.width = "25%";
    hr.style.backgroundColor = "red";
    emojiSpan.innerHTML = "&#128560;";
    passwordContent.innerHTML = "Weak. must contain atleast 8 letter";
  }
  if (passwordStrength.match(/[A-Z]+/) && passwordStrength.match(/[a-z]+/)) {
    strength += 1;
    hr.style.width = "50%";
    hr.style.backgroundColor = "#fada50";
    emojiSpan.innerHTML = "&#128542;";
    passwordContent.innerHTML =
      "So-so. Must contain at least 1 Upper and lower case";
  }
  if (
    passwordStrength.match(/[0-9]+/) &&
    passwordStrength.match(/[A-Z]+/) &&
    passwordStrength.match(/[a-z]+/)

    // contents
  ) {
    strength += 1;
    hr.style.width = "75%";
    hr.style.backgroundColor = "#005063";
    emojiSpan.innerHTML = "&#128521;";
    passwordContent.innerHTML = "Almost. Must contain one special character";
  }
  if (
    passwordStrength.match(/[$@#&!]+/) &&
    passwordStrength.match(/[0-9]+/) &&
    passwordStrength.match(/[A-Z]+/) &&
    passwordStrength.match(/[a-z]+/)
  ) {
    strength += 1;
    hr.style.width = "100%";
    hr.style.backgroundColor = "#39ff14";
    emojiSpan.innerHTML = "&#128526;";
    passwordContent.innerHTML = "Awesome. You have a secure password";
  }
}

// Example usage:

passwordStrength.addEventListener("keyup", function () {
  calculatePasswordStrength(passwordStrength.value);
});
