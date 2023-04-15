// Profile user element value set creations

let uname = (document.querySelector(".userName").innerHTML =
  findUser["userName"]);

let head = (document.getElementById("profile-head").innerText =
  "Hello" + "   " + findUser["userName"]);

let userTheme = (document.querySelector(".user-theme").innerHTML =
  findUser["userTheme"]);

// profile image

let profileImage = (document.querySelector("#profile-image").src =
  findUser["avatarUrl"]);

console.log(profileImage);

// create element for show the use last activity

let allActivity = JSON.parse(localStorage.getItem("userInvites"));

let userActivity = allActivity.filter(
  (e) => e["inviterId"] == findUser["userId"]
);
console.log(userActivity[0]);

let users = JSON.parse(localStorage.getItem("register"));

let activityHead = document.querySelector(".activity-head");

if (userActivity[0] !== undefined) {
  activityHead.innerHTML = "User last activity";

  for (let i = 0; i < userActivity.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card-div-container");
    card.innerHTML = `<div class="card-inside-div">
<div class="user-activity-image-div">
  <img
    class="activity-image"
    src="${userActivity[i]["inviteImage"]}"
    alt="activity-image"
  />
</div>

<div class="user-activity-name-div">
  <h3>${userActivity[i]["inviteName"]}"y</h3>
  <p>${userActivity[i]["inviteGlimpse"]}"</p>
</div>

<div>
  <button class="connect-button">View</button>
</div>
</div>`;

    document.querySelector(".card-inside-control-div").append(card);
  }
} else {
  activityHead.innerHTML = "Suggested friends";

  for (let i = 0; i < users.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card-div-container");
    card.innerHTML = `<div class="card-inside-div">
<div class="user-activity-image-div">
  <img
    class="activity-image"
    src="${users[i]["avatarUrl"]}"
    alt="activity-image"
  />
</div>

<div class="user-activity-name-div">
   <div class="user-name-div">
       <h3 class="user-name">${users[i]["userName"]}</h3>
   </div>

    <div class="user-theme-div">
       <p class="user-theme">${users[i]["userTheme"]}</p>
    </div>
</div>

<div>
  <button class="connect-button" id=${users[i]["userId"]}>View</button>
</div>
</div>`;

    document.querySelector(".card-inside-control-div").append(card);
  }
}

// profile page redirection eventListener

let profileEdit = document.querySelector(".hero-section-button");

profileEdit.addEventListener("click", () => {
  window.location.href =
    "../pages/profile-edit.html?user=" + findUser["userId"];
});
// profile image update js

// profile option

let file = document.getElementById("file");

let image = document.getElementById("profile-image");
console.log(image);

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

      ProfileImagesChange.push(findUser["avatarUrl"]);

      localStorage.setItem(
        "profileImagesData",
        JSON.stringify(ProfileImagesChange)
      );

      console.log(userProfileObj);

      let avatarUrlAssaign = Object.assign(findUser, userProfileObj);
      console.log(avatarUrlAssaign);

      info[userIndex] = avatarUrlAssaign;

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

  let imageUrlAssaign = Object.assign(findUser, currentUrl);

  console.log(imageUrlAssaign);

  info[foundIndex] = imageUrlAssaign;

  localStorage.setItem("register", JSON.stringify(info));
}
