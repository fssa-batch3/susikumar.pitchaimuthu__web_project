let changes = document.getElementById("change-form");
changes.addEventListener("submit", function (e) {
  e.preventDefault();

  let fname = document.getElementById("firstName").value.trim();
  let lname = document.getElementById("lastName").value.trim();
  let u1name = document.getElementById("userName").value.trim();
  let gmail = document.getElementById("email").value.trim();
  let mobile = document.getElementById("phone").value.trim();
  let old = document.getElementById("dateOfBirth").value.trim();
  let editBio = document.getElementById("bio").value.trim();
  let editCity = document.getElementById("city").value.trim();

  let currentGender;

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      currentGender = gender[i].value;
    }
  }

  let editObj = {
    firstName: fname,
    lastName: lname,
    userName: u1name,
    Email: gmail,
    mobileNumber: mobile,
    age: old,
    city: editCity,
    userTheme: editBio,
    userGender: currentGender,
  };

  let returnData = JSON.parse(localStorage.getItem("user_data"));
  console.log(returnData);

  let check = returnData.find((e) => e.Email == gmail);

  if (check.Email != gmail) {
    alert("You can't change your email");
  } else {
    let objestAssign = Object.assign(findUser, editObj);
    console.log(objestAssign);
    let regisData = JSON.parse(localStorage.getItem("register"));

    let FEmail = regisData.find((e) => e.Email == check.Email);

    let finalFind = regisData.indexOf(FEmail);
    console.log(finalFind);

    regisData[finalFind] = objestAssign;

    localStorage.setItem("register", JSON.stringify(regisData));
  }
});

// cancel button function

let cancelButton = document.querySelector("#cancel-button");

cancelButton.addEventListener("click", () => {
  window.location.href = "../pages/profile.html?user=" + findUser["userId"];
});
