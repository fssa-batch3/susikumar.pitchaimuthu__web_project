// This element for create user profile

let profileNameDiv = document.createElement("div");
profileNameDiv.setAttribute("class", "profile-user-nmae-div");
document.querySelector(".invite-inside-profile-div").append(profileNameDiv);

let profileName = document.createElement("p");
profileName.setAttribute("class", "prfile-user-name");
profileName.innerHTML = findUser["userName"];
profileNameDiv.append(profileName);

let profileDiv = document.createElement("div");
profileDiv.setAttribute("class", "user-profile-div");
document.querySelector(".invite-inside-profile-div").append(profileDiv);

let profileImg = document.createElement("img");
profileImg.setAttribute("class", "profile-image");
profileImg.setAttribute("src", findUser["avatarUrl"]);
profileDiv.append(profileImg);

// profile page redirect

let profilePage = document.querySelector(".user-profile-div");

profilePage.addEventListener("click", () => {
  window.location.href = "../pages/profile.html";
});

// invite image reader function

let inviteImage = document.getElementById("party_image");

let image;
inviteImage.addEventListener("change", function () {
  let choosePhoto = this.files[0];
  console.log("manisha");
  if (choosePhoto) {
    let reader = new FileReader();
    // console.log(reader.result);

    reader.addEventListener("load", function () {
      image = reader.result;
      console.log(image);
    });

    reader.readAsDataURL(choosePhoto);
  }
});

console.log(image);

// Writing EventListner for store user invites data
let inviteForm = document.querySelector("#invite-form");

inviteForm.addEventListener("submit", () => {
  let inviteArr = [];

  if (localStorage.getItem("userInvites") !== null) {
    inviteArr = JSON.parse(localStorage.getItem("userInvites"));
  }

  let inviteName = document.getElementById("party_name").value.trim();

  let inviteTime = document.getElementById("party_time").value.trim();

  let inviteDate = document.getElementById("party_date").value.trim();
  let specialPerson = document.getElementById("special_person").value.trim();
  let inviteGlimpse = document.getElementById("party_short_note").value.trim();
  let inviteExplanation = document
    .getElementById("party_expand_passage")
    .value.trim();

  let inviteId = Date.now();

  let inviteObj = {
    inviteName,
    inviteDate,
    inviteImage: image,
    inviteTime,
    specialPerson,
    inviteGlimpse,
    inviteExplanation,
    inviteId,
  };

  console.log(inviteObj);

  inviteArr.push(inviteObj);

  localStorage.setItem("userInvites", JSON.stringify(inviteArr));
});
