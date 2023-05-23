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
  try {
    window.location.href = "../pages/profile.html";
  } catch (error) {
    console.log("error:", error.message);
  }
});

// Disable the past date function
// Get the current date
let currentDate = new Date().toISOString().split("T")[0];

// Set the minimum date for the input element
document.getElementById("party_date").setAttribute("min", currentDate);

// invite image reader function

let inviteFile = document.querySelector(".choose-file-button");

let imageSrc;

inviteFile.addEventListener("click", (e) => {
  try {
    e.preventDefault();

    let inviteImage = document.createElement("input");
    inviteImage.type = "file";

    inviteImage.click();

    inviteImage.addEventListener("change", function () {
      try {
        let choosePhoto = this.files[0];
        if (choosePhoto) {
          let reader = new FileReader();

          reader.addEventListener("load", function () {
            try {
              imageSrc = reader.result;
              console.log(imageSrc);
            } catch (error) {
              console.log("error:", error);
            }
          });

          reader.readAsDataURL(choosePhoto);
        }
      } catch (error) {
        console.log("error:", error);
      }
    });
  } catch (error) {
    console.log("error:", error);
  }
});

console.log(imageSrc);

// Writing EventListner for store user invites data
let inviteForm = document.querySelector("#invite-form");

inviteForm.addEventListener("submit", (sub) => {
  try {
    sub.preventDefault();
    let inviteArr = [];

    if (localStorage.getItem("userInvites") !== null) {
      inviteArr = JSON.parse(localStorage.getItem("userInvites"));
    }

    let inviteName = document.getElementById("party_name").value.trim();

    let inviteTime = document.getElementById("party_time").value.trim();

    let inviteDate = document.getElementById("party_date").value.trim();
    let specialPerson = document.getElementById("special_person").value.trim();
    let inviteGlimpse = document
      .getElementById("party_short_note")
      .value.trim();
    let inviteExplanation = document
      .getElementById("party_expand_passage")
      .value.trim();

    let inviteId = Date.now();

    let inviteLike = [];
    let inviteNo = [];
    let inviteHeart = [];

    // converting the reilway time local time

    let [hours, minutes] = inviteTime.split(":");
    let convertedHours = hours % 12;
    let period = hours >= 12 ? "PM" : "AM";
    let convertedTime = `${convertedHours}:${minutes} ${period}`;

    console.log(convertedTime);

    let inviteObj = {
      inviteName,
      inviteDate,
      inviteImage: imageSrc,
      inviteTime: convertedTime,
      specialPerson,
      inviteGlimpse,
      inviteExplanation,
      inviteId,
      inviterId: findUser["userId"],
      inviterName: findUser["userName"],
      inviterImage: findUser["avatarUrl"],
      inviteLike,
      inviteNo,
      inviteHeart,
    };

    console.log(inviteObj);

    inviteArr.push(inviteObj);

    localStorage.setItem("userInvites", JSON.stringify(inviteArr));
    window.location.href = "../pages/invite.html?user=" + findUser["userId"];
  } catch (error) {
    console.log("error: " + error.message);
  }
});
