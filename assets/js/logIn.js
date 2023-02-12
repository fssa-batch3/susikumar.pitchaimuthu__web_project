let logIn = document.getElementById("form");
let dosomething = [];
logIn.addEventListener("submit", (event) => {
  event.preventDefault();
  let defaultData = JSON.parse(localStorage.getItem("register"));
  console.log(defaultData);

  let username = document.getElementById("inputemail").value.trim();
  let password = document.getElementById("password").value.trim();

  let match = false;

  for (let i = 0; i < defaultData.length; i++) {
    if (
      username == defaultData[i]["Email"] &&
      password == defaultData[i]["password"]
    ) {
      match = true;
      dosomething.push(defaultData[i]);
      window.localStorage.setItem("user_data", JSON.stringify(dosomething));
      break;
    } else {
      match = false;
    }
  }

  if (match == true) {
    alert("Success");
    window.location.href = "home.html";
  } else {
    alert("Failed");
  }
});
