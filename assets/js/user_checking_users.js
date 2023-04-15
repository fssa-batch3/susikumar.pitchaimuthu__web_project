let clickDetails = document.querySelector(".clicking-card-whole-container");

function showDetails(sd) {
  console.log(sd);

  let detailsDiv = document.querySelector(".clicking-inside-div");

  if (detailsDiv !== null) {
    detailsDiv.remove();
  }

  let findDetails = SuggestedUsers.find((e) => e["userId"] == sd);
  console.log(findDetails);

  if ((clickDetails.style.display = "none")) {
    clickDetails.style.display = "block";
  }

  let clickingInsideDiv = document.createElement("div");
  clickingInsideDiv.setAttribute("class", "clicking-inside-div");
  clickingInsideDiv.innerHTML = `   
  <div class="click-details-remove-div">
      <div class="remove-div" onclick="removeDetails()"><i class="bi bi-x-circle"></i></div>
  </div>
  <div class="card-image-and-details-div-container">
    <div class="image-and-details-inside-div">
      <div class="card-image-div">
        <img
          class="card-image"
          src="${findDetails["avatarUrl"]}"
          alt="user-profile"
        />
      </div>

      <div class="card-details-div">
        <h3 class="suggestion-name">${findDetails["userName"]}</h3>
        <p class="suggestion-theme">${findDetails["userTheme"]}</p>
        <p class="suggestion-name">${findDetails["city"]}</p>

        <button onclick="getFollow(this.id)" class="connect-button" id="${findDetails["userId"]}">Follow</button>
      </div>
    </div>
  </div>

  <!-- div for suggestion  -->

  <div class="suggestion-head-and-details-div">
    <div class="suggestion-inside-div">
      <div class="suggestion-head-div">
        <h4>suggested for you</h4>
      </div>

      <div class="user-suggestion-div-container">
        <div class="user-suggestion-inside-div">
          <div class="suggestion-div-container">
            <div class="suggestion-side-inside-div">
              <div class="suggestion-image-div">
                <img
                  class="suggested-image"
                  src="${findDetails["avatarUrl"]}"
                  alt="user-profile"
                />
              </div>

              <div class="user-name-div-container">
                <h4 class="suggestion-name">${findDetails["userName"]}</h4>
                <p class="suggestion-theme">${findDetails["userTheme"]}</p>
              </div>
            </div>

            <div class="follow-button-div">
              <button onclick="getFollow(this.id)" class="connect-button" id="${findDetails["userId"]}">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  document
    .querySelector(".clicking-inside-div-container")
    .append(clickingInsideDiv);
}

// Writing function for remove the details div

function removeDetails() {
  if ((clickDetails.style.display = "block")) {
    clickDetails.style.display = "none";
  }
}

// Writing function for add users to the current profile user

function getFollow(es) {
  let userFriends = JSON.parse(localStorage.getItem("userFriends"));
  console.log(userFriends);

  if (userFriends !== null) {
    for (let i = 0; i < userFriends.length; i++) {
      if (userFriends[i]["userId"] == es) {
        console.log("susi");
        return;
      }
    }
  }
  let gatherUser = info.find((e) => e["userId"] == es);

  let userFriendsArr = [];

  if (userFriends !== null) {
    userFriendsArr = JSON.parse(localStorage.getItem("userFriends"));
  }

  let frienderObj = {
    frienderId: findUser["userId"],
  };

  let friendsAssaign = Object.assign(gatherUser, frienderObj);

  userFriendsArr.push(friendsAssaign);

  localStorage.setItem("userFriends", JSON.stringify(userFriendsArr));
}
