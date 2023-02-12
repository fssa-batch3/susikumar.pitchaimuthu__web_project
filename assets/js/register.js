const signUpFrom = document.getElementById("form");
signUpFrom.addEventListener("submit", function (event) {
  event.preventDefault();

  let userData = [];
  if (localStorage.getItem("register") != null) {
    userData = JSON.parse(localStorage.getItem("register"));
  }
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const userName = document.getElementById("username").value.trim();
  const userEmail = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const number = document.getElementById("mobilenumber").value.trim();
  const age = document.getElementById("age").value.trim();

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

  if (match === true) {
    alert("User already exit");
  } else {
    let userObj = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      Email: userEmail.toLowerCase(),
      password: password,
      mobileNumber: number,
      age: age,
    };

    userData.push(userObj);
    const str = JSON.stringify(userData);
    localStorage.setItem("register", str);
    alert("Success");
    window.location.href = "./login.html";
  }
});
