// Birthday page form element

let birthdayForm = document.querySelector("#birthday-form");

birthdayForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let arr = [];
  if (localStorage.getItem("dateOfBirth") != null) {
    userData = JSON.parse(localStorage.getItem("dateOfBirth"));
  }

  let birthday = document.getElementById("birthday").value.trim();
  let gender = document.getElementsByName("gender");
  console.log(gender);

  let userGen;

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      userGen = gender[i].value;
      console.log(userGen);
    }
  }

  let birthDayObject = {
    dateOfBirth: birthday,
    userGender: userGen,
  };
  console.log(birthDayObject);

  arr.push(birthDayObject);

  let str = JSON.stringify(arr);

  let birthdayObjectAssaign = Object.assign(findUserData, birthDayObject);
  console.log(birthdayObjectAssaign);

  allRegister[findIndexUser] = birthdayObjectAssaign;

  localStorage.setItem("register", JSON.stringify(allRegister));

  window.location.href = "../pages/logIn.html?user=" + findUserData["userId"];
});
