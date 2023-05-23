let changes = document.getElementById("change-form");
changes.addEventListener("submit", function (e) {
  e.preventDefault();
  try {
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
      alert("Your data successfully changed");
    }
  } catch (error) {
    console.log("An error occurred while save profile edit data", error);
  }
});

// cancel button function

let cancelButton = document.querySelector("#cancel-button");

cancelButton.addEventListener("click", () => {
  try {
    window.location.href = "../pages/profile.html?user=" + findUser["userId"];
  } catch (error) {
    console.log("An error occurred while cancel edit :", error);
  }
});
