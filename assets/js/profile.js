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

let showingArr = [];

let users = JSON.parse(localStorage.getItem("register"));

let SuggestedUsers = users.filter((e) => e["userId"] !== findUser["userId"]);
console.log(SuggestedUsers);

for (let i = 0; i < SuggestedUsers.length; i++) {
  let card = document.createElement("div");
  card.setAttribute("class", "card-div-container");
  card.innerHTML = `<div class="card-inside-div">
<div class="user-activity-image-div">
  <img
    class="activity-image"
    src="${SuggestedUsers[i]["avatarUrl"]}"
    alt="activity-image"
  />
</div>

<div class="user-activity-name-div">
   <div class="user-name-div">
       <h3 class="user-name">${SuggestedUsers[i]["userName"]}</h3>
   </div>

    <div class="user-theme-div">
       <p class="user-theme">${SuggestedUsers[i]["userTheme"]}</p>
    </div>
</div>

<div>
  <button class="connect-button" onclick="showDetails(this.id)" id=${SuggestedUsers[i]["userId"]}>View</button>
</div>
</div>`;

  document.querySelector(".card-inside-control-div").append(card);
}

// Writing function for suggestion and activity card

let activityHead = document.querySelector(".activity-head");

let suggestionHead = document.querySelector(".suggestion-head");

activityHead.addEventListener("click", () => {
  // creating for loop for delete all the cards

  let cardDivContainer = document.querySelectorAll(".card-div-container");
  console.log(cardDivContainer);

  if (cardDivContainer[0] !== undefined) {
    for (let j = 0; j < cardDivContainer.length; j++)
      cardDivContainer[j].remove();
  }

  let userActivityData = JSON.parse(localStorage.getItem("userInvites"));
  console.log(userActivityData);

  let findUserActivity;
  if (userActivityData !== null) {
    findUserActivity = userActivityData.filter(
      (e) => e["inviterId"] == findUser["userId"]
    );

    console.log(findUserActivity);

    if (findUserActivity !== null) {
      for (let i = 0; i < findUserActivity.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card-div-container");
        card.innerHTML = `<div class="card-inside-div">
      <div class="user-activity-image-div">
        <img
          class="activity-image"
          src="${findUserActivity[i]["inviteImage"]}"
          alt="activity-image"
        />
      </div>
      
      <div class="user-activity-name-div">
         <div class="user-name-div">
             <h3 class="user-name">${findUserActivity[i]["inviteName"]}</h3>
         </div>
      
          <div class="user-theme-div">
             <p class="user-theme">${findUserActivity[i]["inviteGlimpse"]}</p>
          </div>
      </div>
      
      <div>
        <button class="connect-button" onclick="showDetails(this.id)" id=${SuggestedUsers[i]["iniviteId"]}>View</button>
      </div>
      </div>`;

        document.querySelector(".card-inside-control-div").append(card);
      }
    }
  }
});

// suggestion showing div element creations

suggestionHead.addEventListener("click", (e) => {
  // creating for loop for delete all the cards

  let suggestedCardDiv = document.querySelectorAll(".card-div-container");
  console.log(suggestedCardDiv);

  if (suggestedCardDiv[0] !== undefined) {
    for (let j = 0; j < suggestedCardDiv.length; j++)
      suggestedCardDiv[j].remove();
  }

  console.log(SuggestedUsers);

  for (let i = 0; i < SuggestedUsers.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card-div-container");
    card.innerHTML = `<div class="card-inside-div">
  <div class="user-activity-image-div">
    <img
      class="activity-image"
      src="${SuggestedUsers[i]["avatarUrl"]}"
      alt="activity-image"
    />
  </div>
  
  <div class="user-activity-name-div">
     <div class="user-name-div">
         <h3 class="user-name">${SuggestedUsers[i]["userName"]}</h3>
     </div>
  
      <div class="user-theme-div">
         <p class="user-theme">${SuggestedUsers[i]["userTheme"]}</p>
      </div>
  </div>
  
  <div>
    <button class="connect-button" onclick="showDetails(this.id)" id=${SuggestedUsers[i]["userId"]}>View</button>
  </div>
  </div>`;

    document.querySelector(".card-inside-control-div").append(card);
  }
});

// }

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
  console.log(findUser);

  let firstElement = findUser["firstName"];

  let avatarText = firstElement.toUpperCase().charAt(0);
  console.log(avatarText);

  // avatar create

  let avatarCanva = document.createElement("canvas");
  let avatarContext = avatarCanva.getContext("2d");

  avatarCanva.width = 200;
  avatarCanva.height = 200;

  // draw background
  avatarContext.fillStyle = "#00B4FF";
  avatarContext.fillRect(0, 0, avatarCanva.width, avatarCanva.height);

  // draw text

  avatarContext.font = "bold 100px Assistant";
  avatarContext.textAlign = "center";
  avatarContext.textBaseline = "middle";
  avatarContext.fillStyle = "#fff";
  avatarContext.fillText(
    avatarText,
    avatarCanva.width / 2,
    avatarCanva.height / 2
  );

  // return

  let imageUrl = avatarCanva.toDataURL("image/png");

  let changeImage = {
    avatarUrl: imageUrl,
  };

  // let asingning the data to the profile user object

  let assingImage = Object.assign(findUser, changeImage);

  console.log(assingImage);

  info[userIndex] = assingImage;

  localStorage.setItem("register", JSON.stringify(info));
}
