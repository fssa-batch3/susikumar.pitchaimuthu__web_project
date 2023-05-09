// writing find method to know who's notification is this

let followData = JSON.parse(localStorage.getItem("followNotificationData"));
console.log(followData);

let userFollowData;

let userFriends = JSON.parse(localStorage.getItem("userFriends"));
console.log(userFriends);

if (followData != null) {
  userFollowData = followData.filter(
    (e) => e["requestReceiverId"] == findUser["userId"]
  );

  console.log(userFollowData);

  // show the notification data of follow

  for (let i = 0; i < userFollowData.length; i++) {
    let followCardDivContainer = document.createElement("div");
    followCardDivContainer.setAttribute("class", "follow-card-div-container");
    followCardDivContainer.setAttribute(
      "id",
      userFollowData[i]["friendRequestId"]
    );
    followCardDivContainer.setAttribute(
      "onclick",
      "showFollowDetails(this.id)"
    );

    let followCardInsideContainer = document.createElement("div");
    followCardInsideContainer.setAttribute(
      "class",
      "follow-card-inside-container"
    );
    followCardDivContainer.append(followCardInsideContainer);

    let followImageDiv = document.createElement("div");
    followImageDiv.setAttribute("class", "follow-image-div");
    followCardInsideContainer.append(followImageDiv);

    let followImage = document.createElement("img");
    followImage.setAttribute("class", "follower-image");
    followImage.setAttribute("src", userFollowData[i]["requesterImage"]);
    followImageDiv.append(followImage);

    let followNameDiv = document.createElement("div");
    followNameDiv.setAttribute("class", "follow-name-div");
    followCardInsideContainer.append(followNameDiv);

    let followName = document.createElement("h3");
    followName.setAttribute("class", "follower-name");
    followName.innerHTML = userFollowData[i]["requesterName"];
    followNameDiv.append(followName);

    let ourPara = document.createElement("p");
    ourPara.setAttribute("class", "our-para");
    ourPara.innerHTML =
      "This user has started following you. But you didn't follow";
    followNameDiv.append(ourPara);

    document
      .querySelector(".mention-box-inside-container")
      .append(followCardDivContainer);
  }
}

// follow notification person details showing container

function showFollowDetails(followId) {
  console.log(followId);

  let findFollowUser = info.find((site) => site["userId"] == followId);

  console.log(findFollowUser);

  // Creating a for loop to check this user data is already in profile user friend datas

  console.log(userFriends);
  let profileUserFriendData;

  for (let i = 0; i < userFriends.length; i++) {
    for (let j = 0; j < userFriends[i].length; j++) {
      if (userFriends[i][j]["friendRequestId"] == findUser["userId"]) {
        profileUserFriendData = userFriends[i];
      }
    }
  }

  console.log(profileUserFriendData);

  // checking the friend in this friends profile data

  let match = false;
  if (profileUserFriendData != undefined) {
    for (let k = 0; k < profileUserFriendData.length; k++) {
      if (profileUserFriendData[k]["userId"] == followId) {
        match = true;
        break;
      }
    }
  }

  // according this element creation

  let followDetailsDivContainer = document.createElement("div");
  followDetailsDivContainer.setAttribute(
    "class",
    "follow-details-div-container"
  );

  let followDetailsInsideDiv = document.createElement("div");
  followDetailsInsideDiv.setAttribute("class", "follow-details-inside-div");
  followDetailsDivContainer.append(followDetailsInsideDiv);

  let detailsFollowerImageDiv = document.createElement("div");
  detailsFollowerImageDiv.setAttribute("class", "details-follower-image-div");
  followDetailsInsideDiv.append(detailsFollowerImageDiv);

  let detailsFollowerImage = document.createElement("img");
  detailsFollowerImage.setAttribute("class", "details-follower-image");
  detailsFollowerImage.setAttribute("src", findFollowUser["avatarUrl"]);
  detailsFollowerImageDiv.append(detailsFollowerImage);

  let followerButtonDivContainer = document.createElement("div");
  followerButtonDivContainer.setAttribute(
    "class",
    "follower-button-div-container"
  );
  followDetailsInsideDiv.append(followerButtonDivContainer);

  let followH4 = document.createElement("h4");
  followH4.setAttribute("class", "follower-name");
  followH4.innerHTML = findFollowUser["userName"];
  followerButtonDivContainer.append(followH4);

  let followPara = document.createElement("p");
  followPara.setAttribute("class", "follow-para");
  followPara.innerHTML = findFollowUser["userTheme"];
  followerButtonDivContainer.append(followPara);

  if (match == true) {
    let followingButtonBtn = document.createElement("button");
    followingButtonBtn.setAttribute("class", "following-button");
    followingButtonBtn.setAttribute("id", findFollowUser["userId"]);
    followingButtonBtn.innerHTML = "following";
    followerButtonDivContainer.append(followingButtonBtn);
  } else {
    let followBackBUtton = document.createElement("button");
    followBackBUtton.setAttribute("class", "follow-button");
    followBackBUtton.setAttribute("id", findFollowUser["userId"]);
    followBackBUtton.setAttribute("onclick", "followBack(this.id)");
    followBackBUtton.innerHTML = "follow back";
    followerButtonDivContainer.append(followBackBUtton);
  }
  document
    .querySelector(".display-container")
    .append(followDetailsDivContainer);
}

// follow back function

function followBack(e) {
  console.log(e);

  let findFollower = info.find((f) => f["userId"] == e);

  console.log(findFollower);

  // check there user friends array is there or not
  let friendArray = [];

  for (let i = 0; i < userFriends.length; i++) {
    for (let j = 0; j < userFriends[i].length; j++) {
      if (userFriends[i][j]["friendRequestId"] == findFollower["userId"]) {
        friendArray = userFriends[i];
      }
    }
  }
  console.log(friendArray.length);

  // lets create a function to send follow back mesage data

  let followBackArray = [];

  let followBackObject = {
    notiMoti: "back",
    friendRequestId: findUser["userId"],
    requestReceiverId: findFollower["userId"],
    requesterImage: findUser["avatarUrl"],
    requesterName: findUser["userName"],
  };

  followBackArray.push(followBackObject);

  followData.push(followBackArray);

  localStorage.setItem("followNotificationData", JSON.stringify(followData));

  // set the user data into the userFriends database

  if (friendArray.length == 0) {
    let createArray = [];

    let createObject = {
      friendRequestId: findUser["userId"],
      userId: findFollower["userId"],
      userName: findFollower["userName"],
      avatarUrl: findFollower["avatarUrl"],
      userTheme: findFollower["userTheme"],
      email: findFollower["email"],
    };

    createArray.push(createObject);

    userFriends.push(createArray);

    localStorage.setItem("userFriends", JSON.stringify(userFriends));
  }
}

// show the notification data of other activity

let notiData = JSON.parse(localStorage.getItem("inviteNotificationData"));

let userNotiData;
if (notiData != null) {
  userNotiData = notiData.filter(
    (e) => e["notification_receiver_id"] == findUser["userId"]
  );

  console.log(userNotiData);
  for (let i = 0; i < userNotiData.length; i++) {
    let whole_div = document.createElement("div");
    whole_div.setAttribute("class", "mention-box-div");
    whole_div.setAttribute("id", userNotiData[i]["inviteNotiId"]);
    whole_div.setAttribute("onclick", "findInviteUser(this.id)");

    let mention_box_insie = document.createElement("div");
    mention_box_insie.setAttribute("class", "mention-box-inside-div");
    whole_div.append(mention_box_insie);

    let image_name_div = document.createElement("div");
    image_name_div.setAttribute("class", "image-and-name-div");
    mention_box_insie.append(image_name_div);

    let pro_image_div = document.createElement("div");
    pro_image_div.setAttribute("class", "pro-image-div");
    image_name_div.append(pro_image_div);

    let pro_image = document.createElement("img");
    pro_image.setAttribute("class", "mention-profile-image");
    pro_image.setAttribute("src", userNotiData[i]["invite_person_url"]);
    pro_image_div.append(pro_image);

    let name_content_div = document.createElement("div");
    name_content_div.setAttribute("class", "name-content-div");
    image_name_div.append(name_content_div);

    let h3 = document.createElement("h3");
    h3.innerHTML = userNotiData[i]["notification_person"];
    name_content_div.append(h3);

    let p = document.createElement("p");
    p.innerHTML = userNotiData[i]["inviteChat"];
    name_content_div.append(p);

    let user_mention_media_div = document.createElement("div");
    user_mention_media_div.setAttribute("class", "user-mention-media-div");
    mention_box_insie.append(user_mention_media_div);

    let image = document.createElement("i");
    image.setAttribute("class", "bi bi-heart-fill");
    user_mention_media_div.append(image);

    document.querySelector(".mention-box-inside-container").append(whole_div);
  }
}

// writing eventListner function to show invite details

function findInviteUser(e) {
  let userNotiId = e;
  console.log(userNotiId);

  let findNoti = userNotiData.find(
    (noti) => noti["inviteNotiId"] == userNotiId
  );
  console.log(findNoti);

  let findElseData = userNotiData.filter(
    (noti) => noti["inviteNotiId"] !== findNoti["inviteNotiId"]
  );
  console.log(findElseData);

  // if say to remove attribute

  let removeNoti = document.querySelector(".display-inside-div");

  if (removeNoti !== null) {
    document.querySelector(".display-inside-div").remove();
  }
  // writing function for create a dynamic element to show the notification details

  let displayInsideDiv = document.createElement("div");
  displayInsideDiv.setAttribute("class", "display-inside-div");
  displayInsideDiv.innerHTML = `  <div class="details-display-inside-container">
  <div class="details-inside-align-container">
    <!-- profile div -->

    <div class="profile-and-name-div-container">
      <!-- profile div -->
      <div class="profile-div">
        <img
          class="profile-image"
          src="${findNoti["invite_person_url"]}"
          alt=""
        />
      </div>

      <div>
        <p>${findNoti["notification_person"]}</p>
      </div>
    </div>

    <!-- content div -->

    <div class="details-content-div-container">
      <div class="details-content-inside-div">
        <div class="content-div">
          <h4>text</h4>
          <p>${findNoti["inviteChat"]}</p>
        </div>

        <div class="content-div">
          <h4>date</h4>
          <p>${findNoti["inviteTime"]}</p>
        </div>

        <div class="content-div">
          <h4>Time</h4>
          <p>${findNoti["inviteDate"]}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- notification div -->
  <div class="notification-file-showing-div-container">
    <!-- inside div for media -->
    <div class="notification-file-div">
      <img
        class="notification-file"
        src="${findNoti["notification_file"]}"
        alt=""
      />
    </div>
  </div>
</div>`;
  document.querySelector(".display-container").append(displayInsideDiv);

  // let notificationProfileNameDiv = document.createElement("div");
  // notificationProfileNameDiv.setAttribute(
  //   "class",
  //   "notification-profile-name-div"
  // );
  // displayInsideDiv.append(notificationProfileNameDiv);

  // let notificationUserProfileDiv = document.createElement("div");
  // notificationUserProfileDiv.setAttribute(
  //   "class",
  //   "notification-user-profile-div"
  // );
  // notificationProfileNameDiv.append(notificationUserProfileDiv);

  // let profileImage = document.createElement("img");
  // profileImage.setAttribute("class", "notification-person-image");
  // profileImage.setAttribute("alt", "inviter-image");
  // profileImage.setAttribute("src", findNoti["invite_person_url"]);
  // notificationUserProfileDiv.append(profileImage);

  // let personNameDiv = document.createElement("div");
  // personNameDiv.setAttribute("class", "person-name-div");
  // notificationProfileNameDiv.append(personNameDiv);

  // let personName = document.createElement("p");
  // personName.setAttribute("class", "person-name");
  // personName.innerHTML = findNoti["notification_person"];
  // personNameDiv.append(personName);

  // // notification show div container

  // let notificationShowDivContainer = document.createElement("div");
  // notificationShowDivContainer.setAttribute(
  //   "class",
  //   "notification-show-div-container"
  // );
  // displayInsideDiv.append(notificationShowDivContainer);

  // let notificationPictureDiv = document.createElement("div");
  // notificationPictureDiv.setAttribute("class", "notification-picture-div");
  // notificationShowDivContainer.append(notificationPictureDiv);

  // let notificationPicture = document.createElement("img");
  // notificationPicture.setAttribute("class", "notification-picture");
  // notificationPicture.setAttribute("alt", "invite-image");
  // notificationPicture.setAttribute("src", findNoti["notification_file"]);
  // notificationPictureDiv.append(notificationPicture);

  // let notificationSideDetailsDivContainer = document.createElement("div");
  // notificationSideDetailsDivContainer.setAttribute(
  //   "class",
  //   "notification-side-details-div-container"
  // );
  // notificationShowDivContainer.append(notificationSideDetailsDivContainer);

  // let notificationDataDiv = document.createElement("div");
  // notificationDataDiv.setAttribute("class", "notification-data-div");
  // notificationSideDetailsDivContainer.append(notificationDataDiv);

  // let notificationH3 = document.createElement("h3");
  // notificationH3.setAttribute("class", "notification-h3");
  // notificationH3.innerHTML = findNoti["inviteChat"];
  // notificationDataDiv.append(notificationH3);

  // let notificationP1 = document.createElement("p");
  // notificationP1.setAttribute("class", "notification-para");
  // notificationP1.innerHTML = findNoti["inviteTime"];
  // notificationDataDiv.append(notificationP1);

  // let notificationP2 = document.createElement("p");
  // notificationP2.setAttribute("class", "notification-para");
  // notificationP2.innerHTML = findNoti["inviteDate"];
  // notificationDataDiv.append(notificationP2);

  // create if else condition for showing that person realted notification

  if (findElseData == null) {
    return;
  } else {
    // relate notification head div

    let relatedHeadDiv = document.createElement("div");
    relatedHeadDiv.setAttribute("class", "related-head-div");
    displayInsideDiv.append(relatedHeadDiv);

    let relatedHead = document.createElement("h3");
    relatedHead.setAttribute("class", "related-div");
    relatedHead.innerHTML = "This person related notification";
    relatedHeadDiv.append(relatedHead);

    // related notification related div container

    let relatedNotificationDivContainer = document.createElement("div");
    relatedNotificationDivContainer.setAttribute(
      "class",
      "related-notification-div-container"
    );
    displayInsideDiv.append(relatedNotificationDivContainer);

    let relatedNotificationInsideDiv = document.createElement("div");
    relatedNotificationInsideDiv.setAttribute(
      "class",
      "related-notification-inside-div"
    );
    relatedNotificationDivContainer.append(relatedNotificationInsideDiv);

    // create for loop to show all the notification

    for (let i = 0; i < findElseData.length; i++) {
      let notificationDivContainer = document.createElement("div");
      notificationDivContainer.setAttribute(
        "id",
        findElseData[i]["inviter_id"]
      );

      notificationDivContainer.setAttribute(
        "class",
        "notification-div-container"
      );
      relatedNotificationInsideDiv.append(notificationDivContainer);

      let notificationInsideDiv = document.createElement("div");
      notificationInsideDiv.setAttribute("class", "notification-inside-div");
      notificationDivContainer.append(notificationInsideDiv);

      // user related name div

      let userProfileAndNameDiv = document.createElement("div");
      userProfileAndNameDiv.setAttribute("class", "user-profile-and-name-div");
      notificationInsideDiv.append(userProfileAndNameDiv);

      let userProfileDiv = document.createElement("div");
      userProfileDiv.setAttribute("class", "user-profile-div");
      userProfileAndNameDiv.append(userProfileDiv);

      let userProfileImage = document.createElement("img");
      userProfileImage.setAttribute("class", "user-profile-image");
      userProfileImage.setAttribute("alt", "inviter-image");
      userProfileImage.setAttribute(
        "src",
        findElseData[i]["invite_person_url"]
      );
      userProfileDiv.append(userProfileImage);

      let userNameAndNotiDiv = document.createElement("div");
      userNameAndNotiDiv.setAttribute("class", "user-name-and-noti-div");
      userProfileAndNameDiv.append(userNameAndNotiDiv);

      let userNameH3 = document.createElement("h3");
      userNameH3.setAttribute("class", "user-name-h3");
      userNameH3.innerHTML = findElseData[i]["notification_person"];
      userNameAndNotiDiv.append(userNameH3);

      let userNameP = document.createElement("p");
      userNameP.setAttribute("class", "user-name-p");
      userNameP.innerHTML = findElseData[i]["inviteChat"];
      userNameAndNotiDiv.append(userNameP);

      // invite Image div

      let userInviteImageDiv = document.createElement("div");
      userInviteImageDiv.setAttribute("class", "user-invite-image-div");
      notificationInsideDiv.append(userInviteImageDiv);

      let imageOfInvite = document.createElement("img");
      imageOfInvite.setAttribute("class", "image-of-invite");
      imageOfInvite.setAttribute("alt", "user-invite-image");
      imageOfInvite.setAttribute("src", findElseData[i]["invite_person_url"]);
      userInviteImageDiv.append(imageOfInvite);
    }
  }
}
