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
  //
  let avatarText = firstElement.charAt(0);
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
    Email: userEmail.toLowerCase(),
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
