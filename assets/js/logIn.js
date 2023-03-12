// getting value from the logIn javascript

let logIn = document.getElementById("form");

let doSomething = [];
logIn.addEventListener("submit", (event) => {
  event.preventDefault();
  let defaultData = JSON.parse(localStorage.getItem("register"));
  console.log(defaultData);

  let userEmail = document.getElementById("inputemail").value.trim();
  let password = document.getElementById("password").value.trim();

  let match = false;

  for (let i = 0; i < defaultData.length; i++) {
    if (
      userEmail == defaultData[i]["Email"] &&
      password == defaultData[i]["password"]
    ) {
      match = true;

      let which = doSomething.push(defaultData[i]);
      console.log(which);

      let logString = JSON.stringify(doSomething);
      window.localStorage.setItem("user_data", logString);
      break;
    } else {
      match = false;
    }
  }

  if (match == true) {
    alert("Success");
    window.location.href = "after_home.html";
  } else {
    alert("Failed");
  }
});
