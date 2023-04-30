// getting all user datas from the database

let userData = JSON.parse(localStorage.getItem("register"));

let filterElseDate = userData.filter((e) => e["userId"] !== findUser["userId"]);
console.log(filterElseDate);

for (let i = 0; i < filterElseDate.length; i++) {
  let userCardContainer = document.createElement("div");
  userCardContainer.setAttribute("class", "user-card-container");
  userCardContainer.setAttribute("id", filterElseDate[i]["userName"]);

  let searchCard = document.createElement("div");
  searchCard.setAttribute("class", "user-card");
  userCardContainer.append(searchCard);

  let userCardInsideDiv = document.createElement("div");
  userCardInsideDiv.setAttribute("class", "user-card-inside-div");
  searchCard.append(userCardInsideDiv);

  let tinyImageContentContainer = document.createElement("div");
  tinyImageContentContainer.setAttribute(
    "class",
    "tiny-image-content-container"
  );
  userCardInsideDiv.append(tinyImageContentContainer);

  let tinyProfileDiv = document.createElement("div");
  tinyProfileDiv.setAttribute("class", "tiny-profile-div");
  tinyImageContentContainer.append(tinyProfileDiv);

  let tinyImage = document.createElement("img");
  tinyImage.setAttribute("alt", "user-profile");
  tinyImage.setAttribute("class", "tiny-image");
  tinyImage.setAttribute("src", filterElseDate[i]["avatarUrl"]);
  tinyProfileDiv.append(tinyImage);

  let tinyContentContainer = document.createElement("div");
  tinyContentContainer.setAttribute("class", "tiny-content-container");
  tinyImageContentContainer.append(tinyContentContainer);

  let tinyH3 = document.createElement("h3");
  tinyH3.setAttribute("class", "tiny-name");
  tinyH3.innerHTML = filterElseDate[i]["userName"];
  tinyContentContainer.append(tinyH3);

  let tinyP = document.createElement("p");
  tinyP.setAttribute("class", "tiny-para");
  tinyP.innerHTML = filterElseDate[i]["userTheme"];
  tinyContentContainer.append(tinyP);

  let viewBUttonDiv = document.createElement("div");
  viewBUttonDiv.setAttribute("class", "view-button-div");
  userCardInsideDiv.append(viewBUttonDiv);

  let viewButton = document.createElement("button");
  viewButton.setAttribute("class", "view");
  viewButton.innerHTML = "view";
  viewButton.setAttribute("id", filterElseDate[i]["userId"]);
  viewButton.setAttribute("onclick", "showUser(this.id)");
  viewBUttonDiv.append(viewButton);

  document
    .querySelector(".all-user-showing-inside-div")
    .append(userCardContainer);
}

// Getting the all friends data

let friendsDatas = JSON.parse(localStorage.getItem("userFriends"));
console.log(friendsDatas);

// creating a function for to show the user

let findClickingUser;
function showUser(s) {
  console.log(s);

  // user details showing element creation

  // getting element of creating element to remove

  let removingElement = document.querySelector(".details-inside-div-container");

  if (removingElement !== null) {
    document.querySelector(".details-inside-div-container").remove();
  }

  findClickingUser = userData.find((f) => f["userId"] == s);

  console.log(findClickingUser);

  let detailsInsideDivContainer = document.createElement("div");
  detailsInsideDivContainer.setAttribute(
    "class",
    "details-inside-div-container"
  );

  let removeDivContainer = document.createElement("div");
  removeDivContainer.setAttribute("class", "remove-div-container");
  detailsInsideDivContainer.append(removeDivContainer);

  let removeDiv = document.createElement("div");
  removeDiv.setAttribute("class", "remove-div");
  removeDiv.setAttribute("onclick", "removediv()");
  removeDivContainer.append(removeDiv);

  let removeI = document.createElement("i");
  removeI.setAttribute("class", "bi bi-x-circle-fill");
  removeDiv.append(removeI);

  let imageContentDivContainer = document.createElement("div");
  imageContentDivContainer.setAttribute("class", "image-content-div-container");
  detailsInsideDivContainer.append(imageContentDivContainer);

  let imageDivContainer = document.createElement("div");
  imageDivContainer.setAttribute("class", "image-div-container");
  imageContentDivContainer.append(imageDivContainer);

  let showingImage = document.createElement("img");
  showingImage.setAttribute("class", "showing-image");
  showingImage.setAttribute("src", findClickingUser["avatarUrl"]);
  showingImage.setAttribute("alt", "profile-image");
  imageDivContainer.append(showingImage);

  let contentContainer = document.createElement("div");
  contentContainer.setAttribute("class", "content-container");
  imageContentDivContainer.append(contentContainer);

  let contentInsideDiv = document.createElement("div");
  contentInsideDiv.setAttribute("class", "content-inside-div");
  contentContainer.append(contentInsideDiv);

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "showing-name");
  h3.innerHTML = findClickingUser["userName"];
  contentInsideDiv.append(h3);

  let showingPara = document.createElement("p");
  showingPara.setAttribute("class", "showing-para");
  showingPara.innerHTML = findClickingUser["userTheme"];
  contentInsideDiv.append(showingPara);

  // Creating for loop to get the this friends data

  let buttonFollow = false;
  console.log(friendsDatas);

  if (friendsDatas !== null) {
    for (let i = 0; i < friendsDatas.length; i++) {
      for (let j = 0; j < friendsDatas[i].length; j++) {
        if ((friendsDatas[i][j]["userId"] = s)) {
          buttonFollow = true;
        }
      }
    }
  }

  if (buttonFollow == true) {
    let followingButton = document.createElement("button");
    followingButton.setAttribute("class", "following-button");
    followingButton.setAttribute("id", findClickingUser["userId"]);
    followingButton.setAttribute("onclick", "removeFollow(this.id)");
    followingButton.innerHTML = "Following";
    contentInsideDiv.append(followingButton);
  } else {
    let followButton = document.createElement("button");
    followButton.setAttribute("class", "follow-button");
    followButton.setAttribute("id", findClickingUser["userId"]);
    followButton.setAttribute("onclick", "getFollow(this.id)");
    followButton.innerHTML = "Follow";
    contentInsideDiv.append(followButton);
  }

  // getting the userFriends data for show the all friends

  // filter the this user friends

  let userFriendsData = JSON.parse(localStorage.getItem("userFriends"));
  console.log(userFriendsData);

  let suggedData;

  if (userFriendsData !== null) {
    for (let i = 0; i < userFriendsData.length; i++) {
      if (userFriendsData[i][0]["frienderId"] == s) {
        suggedData = userFriendsData[i];
      }
    }
  }

  console.log(suggedData);

  // suggested friends element creation

  if (suggedData !== undefined) {
    for (let i = 0; i < suggedData.length; i++) {
      let personSuggestedFriendsDivContainer = document.createElement("div");
      personSuggestedFriendsDivContainer.setAttribute(
        "class",
        "person-suggested-friends-div-container"
      );
      detailsInsideDivContainer.append(personSuggestedFriendsDivContainer);

      let personSuggestedInsideDiv = document.createElement("div");
      personSuggestedInsideDiv.setAttribute(
        "class",
        "person-suggested-inside-div"
      );
      personSuggestedFriendsDivContainer.append(personSuggestedInsideDiv);

      let personcontainer = document.createElement("div");
      personcontainer.setAttribute("class", "person-container");
      personSuggestedInsideDiv.append(personcontainer);

      let personInsideDiv = document.createElement("div");
      personInsideDiv.setAttribute("class", "person-inside-div");
      personcontainer.append(personInsideDiv);

      let lastImageDiv = document.createElement("class", "last-image-div");
      lastImageDiv.setAttribute("class", "last-image-div");
      personInsideDiv.append(lastImageDiv);

      let lastImage = document.createElement("img");
      lastImage.setAttribute("class", "last-image");
      lastImage.setAttribute("alt", "profile-image");
      lastImage.setAttribute("src", suggedData[i]["avatarUrl"]);
      lastImageDiv.append(lastImage);

      let userNameThemeDiv = document.createElement("div");
      userNameThemeDiv.setAttribute("class", "user-name-theme-div");
      personInsideDiv.append(userNameThemeDiv);

      let h5 = document.createElement("h5");
      h5.setAttribute("class", "user-last-name");
      h5.innerHTML = suggedData[i]["userName"];
      userNameThemeDiv.append(h5);

      let lastPara = document.createElement("p");
      lastPara.setAttribute("class", "last-para");
      lastPara.innerHTML = suggedData[i]["userTheme"];

      userNameThemeDiv.append(lastPara);
    }
  }

  document
    .querySelector(".details-showing-container")
    .append(detailsInsideDivContainer);
}

// removing function

function removediv() {
  document.querySelector(".details-inside-div-container").remove();
}

// creationg function to folloe the user

function getFollow(es) {
  console.log(es);
  let userFriends = JSON.parse(localStorage.getItem("userFriends"));
  console.log(userFriends);

  let followButtonArea = document.querySelectorAll(".follow-button");
  console.log(followButtonArea);
  let thisButton;

  for (let i = 0; i < followButtonArea.length; i++) {
    if (followButtonArea[i]["id"] == es) {
      thisButton = followButtonArea[i];
    }
  }

  console.log(thisButton);

  if ((thisButton.value = "Follow")) {
    thisButton.remove("follow-button");

    let followingButtonElement = document.createElement("button");
    followingButtonElement.setAttribute("class", "following-button");
    followingButtonElement.innerHTML = "Following";
    document
      .querySelector(".content-inside-div")
      .append(followingButtonElement);
  }

  let gatherUser = info.find((e) => e["userId"] == es);
  console.log(gatherUser);

  let userArray;

  if (userFriends !== null) {
    for (let i = 0; i < userFriends.length; i++) {
      if (userFriends[i][0]["frienderId"] == findUser["userId"]) {
        userArray = userFriends[i];
      }
    }
  }

  console.log(userArray);

  if (userArray !== undefined) {
    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i]["userId"] == findClickingUser["userId"]) {
        return;
      }
    }

    let spliceIndex = userFriends.indexOf(userArray);

    userFriends.splice(spliceIndex);

    console.log(userFriends);

    let time = moment().format("LT");
    let date = moment().format("l");

    let userFriendObjest = {
      frienderId: findUser["userId"],
      time,
      date,
    };

    let userFriendsObjectAssaign = Object.assign(gatherUser, userFriendObjest);
    console.log(userFriendsObjectAssaign);

    userArray.push(userFriendsObjectAssaign);
    console.log(userArray);

    userFriends.push(userArray);

    localStorage.setItem("userFriends", JSON.stringify(userFriends));
    return;
  }

  let userFriendsArr = [];

  if (userFriends !== null) {
    userFriendsArr = userFriends;
  }

  let insideArray = [];

  let time = moment().format("LT");
  let date = moment().format("l");

  let frienderObj = {
    frienderId: findUser["userId"],
    time,
    date,
  };

  let friendsAssaign = Object.assign(gatherUser, frienderObj);

  insideArray.push(friendsAssaign);

  console.log(insideArray);

  userFriendsArr.push(insideArray);

  console.log(userFriendsArr);

  localStorage.setItem("userFriends", JSON.stringify(userFriendsArr));
}

// Writins the remove follow funciton to remove the friends into user

function removeFollow(r) {
  console.log(r);
}
