const signUpFrom = document.getElementById("form");
signUpFrom.addEventListener("submit", (event) => {
  event.preventDefault();

  let userData = [];
  console.log(userData);
  console.log(userData);

  if (localStorage.getItem("register") != null) {
    userData = JSON.parse(localStorage.getItem("register"));
  }

  let firstElement = document.getElementById("firstname").value.trim();
  let lastElememt = document.getElementById("lastname").value.trim();
  const userName = document.getElementById("username").value.trim();
  const userEmail = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
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
  avatarContext.fillStyle = "#fff";

  // return

  let imageUrl = avatarCanva.toDataURL("image/png");

  // let checkUser = JSON.parse(localStorage.getItem("register"));

  let match = false;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i]["Email"] === userEmail) {
      match = true;
      break;
    } else {
      match = false;
    }
  }

  // console.log(register);

  if (match === true) {
    alert("User already exit");
  } else {
    let userObj = {
      userId: cryptoValue,
      firstName: firstElement,
      lastName: lastElememt,
      userName: userName,
      Email: userEmail.toLowerCase(),
      password: password,
      avatarUrl: imageUrl,
      userTheme: "Hey! I am using fresh nest",
    };

    console.log(userObj);
    console.log(userData);

    userData.push(userObj);
    const str = JSON.stringify(userData);
    localStorage.setItem("register", str);
    alert("Success");
    window.location.href = "./birthday.html?user=" + cryptoValue;
  }
});
