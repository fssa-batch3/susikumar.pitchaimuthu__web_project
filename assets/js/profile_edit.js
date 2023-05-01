let changes = document.getElementById("change-form");
changes.addEventListener("submit", function (e) {
  e.preventDefault();

  let fname = document.getElementById("firstName").value.trim();
  let lname = document.getElementById("lastName").value.trim();
  let u1name = document.getElementById("userName").value.trim();
  let gmail = document.getElementById("email").value.trim();
  let mobile = document.getElementById("phone").value;
  let old = document.getElementById("dateOfBirth").value.trim();
  let editBio = document.getElementById("bio").value.trim();
  let editCity = document.getElementById("city").value.trim();

  let currentGender;

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      currentGender = gender[i].value;
    }
  }

  console.log(mobile);

  // Check if the input contains any non-digit characters
  if (mobile.length !== 10) {
    alert("Please enter a valid phone number.");
    return;
  }

  // var expr = /^(0|91)?[6-9][0-9]{9}$/;
  // if (!expr.test(mobile)) {
  //   alert("Invalid Mobile Number.");
  //   return;
  // }

  let editObj = {
    firstName: fname,
    lastName: lname,
    userName: u1name,
    mobileNumber: mobile,
    age: old,
    city: editCity,
    userTheme: editBio,
    userGender: currentGender,
  };

  if (findUser["email"] !== gmail) {
    alert("You can't change your email");
    return;
  } else {
    let objestAssign = Object.assign(findUser, editObj);
    console.log(objestAssign);

    info[userIndex] = objestAssign;

    localStorage.setItem("register", JSON.stringify(info));
  }
});

// cancel button function

let cancelButton = document.querySelector("#cancel-button");

cancelButton.addEventListener("click", () => {
  window.location.href = "../pages/profile.html?user=" + findUser["userId"];
});
