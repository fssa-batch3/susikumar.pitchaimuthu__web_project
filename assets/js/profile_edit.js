const disable = document.querySelectorAll(".disable-input");
console.log(disable);

// disable function

function edit() {
  for (i = 0; i < disable.length; i++) {
    console.log(disable[i]);
    disable[i].removeAttribute("disabled");
  }
}

const changes = document.getElementById("change-form");
changes.addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("firstName").value.trim();
  const lname = document.getElementById("lastName").value.trim();
  const u1name = document.getElementById("userName").value.trim();
  const gmail = document.getElementById("email").value.trim();
  const mobile = document.getElementById("phone").value.trim();
  const old = document.getElementById("age").value.trim();
  const nation = document.getElementById("nation").value.trim();

  const editObj = {
    firstName: fname,
    lastName: lname,
    userName: u1name,
    Email: gmail,
    mobileNumber: mobile,
    age: old,
    nationality: nation,
  };

  const returnData = JSON.parse(localStorage.getItem("user_data"));
  console.log(returnData);

  let check = returnData.find((e) => e.Email == gmail);

  if (check.Email != gmail) {
    alert("Email ID not found");
  } else {
    let objestAssign = Object.assign(found, editObj);
    console.log(objestAssign);
    let regisData = JSON.parse(localStorage.getItem("register"));

    let FEmail = regisData.find((e) => e.Email == check.Email);

    let finalFind = regisData.indexOf(FEmail);
    console.log(finalFind);

    regisData[finalFind] = objestAssign;

    localStorage.setItem("register", JSON.stringify(regisData));
  }
});

// function for delete details

function dele() {
  console.log(found);
  let findInd = info.indexOf(found);

  const whatMean = JSON.parse(localStorage.getItem("register"));

  let message = confirm("Are sure to Delete your account in Fresh Nest?");

  if (message !== true) {
    return;
  } else {
    whatMean.splice(findInd, 1);
    localStorage.setItem("register", JSON.stringify(whatMean));
  }
}

// profile option

let file = document.getElementById("file");

let image = document.getElementById("profile-image");

let ProfileOption = document.querySelector(".profile-option-div");

// onclick function for option display block

image.addEventListener("click", () => {
  if ((ProfileOption.style.display = "none")) {
    ProfileOption.style.display = "block";
  }
});

// profile photo chanage photo function

file.addEventListener("change", function () {
  let choosePhoto = this.files[0];

  console.log("Manisha");

  if (choosePhoto) {
    let reader = new FileReader();
    // console.log(reader.result);

    reader.addEventListener("load", function () {
      image.setAttribute("src", reader.result);

      let ProfileImagesChange = [];

      if (localStorage.getItem("profileImagesData") !== null) {
        ProfileImagesChange = JSON.parse(
          localStorage.getItem("profileImagesData")
        );
      }
      let userProfileObj = {
        avatarUrl: reader.result,
      };

      ProfileImagesChange.push(found["avatarUrl"]);

      localStorage.setItem(
        "profileImagesData",
        JSON.stringify(ProfileImagesChange)
      );

      console.log(userProfileObj);
      console.log(found);

      let avatarUrlAssaign = Object.assign(found, userProfileObj);
      console.log(avatarUrlAssaign);
      console.log(foundIndex);

      info[foundIndex] = avatarUrlAssaign;

      console.log((info[foundIndex] = avatarUrlAssaign));
      localStorage.setItem("register", JSON.stringify(info));
    });

    reader.readAsDataURL(choosePhoto);
  }
});

// Transform to default profile image

function defaultProfile() {
  console.log(found);

  let getImageUrl = JSON.parse(localStorage.getItem("profileImagesData"));
  console.log(getImageUrl);

  let currentUrl = getImageUrl[0];
  console.log(currentUrl);

  let imageUrlAssaign = Object.assign(found, currentUrl);

  console.log(imageUrlAssaign);

  info[foundIndex] = imageUrlAssaign;

  localStorage.setItem("register", JSON.stringify(info));
}
