// Birthday page form element

let birthdayForm = document.querySelector("#birthday-form");

birthdayForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let birthday = document.getElementById("birthday").value.trim();
  let gender = document.getElementsByName("gender");
  console.log(gender);

  let birthdate = new Date(birthday);

  // Get today's date
  let today = new Date();

  // Calculate the user's age in milliseconds
  let ageInMilliseconds = today - birthdate;

  // Convert the age to years
  let ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;

  if (ageInYears <= 18) {
    alert("Your should be more than 18");
    return;
  }

  let userGen;

  for (let genders of gender) {
    if (gender[i].checked) {
      userGen = gender[i].value;
    }
  }

  let birthDayObject = {
    dateOfBirth: birthday,
    userGender: userGen,
  };
  console.log(birthDayObject);

  let birthdayObjectAssaign = Object.assign(findUserData, birthDayObject);
  console.log(birthdayObjectAssaign);

  allRegister[findIndexUser] = birthdayObjectAssaign;

  localStorage.setItem("register", JSON.stringify(allRegister));

  window.location.href = "../pages/logIn.html?user=" + findUserData["userId"];
});
