// writing find method to know who's notification is this

let notiData = JSON.parse(localStorage.getItem("inviteNotificationData"));
console.log(notiData);

for (let i = 0; i < notiData.length; i++) {
  let whole_div = document.createElement("div");
  whole_div.setAttribute("class", "mention-box-div");
  whole_div.setAttribute("id", notiData[i]["inviter_id"]);
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
  pro_image.setAttribute("src", notiData[i]["invite_person_url"]);
  pro_image_div.append(pro_image);

  let name_content_div = document.createElement("div");
  name_content_div.setAttribute("class", "name-content-div");
  image_name_div.append(name_content_div);

  let h3 = document.createElement("h3");
  h3.innerHTML = notiData[i]["inviter_person"];
  name_content_div.append(h3);

  let p = document.createElement("p");
  p.innerHTML = notiData[i]["inviteChat"];
  name_content_div.append(p);

  let user_mention_media_div = document.createElement("div");
  user_mention_media_div.setAttribute("class", "user-mention-media-div");
  mention_box_insie.append(user_mention_media_div);

  let image = document.createElement("img");
  image.setAttribute("class", "user-mention-media");
  user_mention_media_div.append(image);

  document.querySelector(".mention-box-inside-container").append(whole_div);
}

// writing eventListner function to show invite details

function findInviteUser(e) {
  let userNotiId = e;
  console.log(userNotiId);
  console.log(userNotiId[0]);

  let findNoti = notiData.filter(
    (noti) => noti["inviter_id"][0] == userNotiId[0]
  );
  console.log(findNoti);

  let elseNoti = findNoti.find((eNoti) => eNoti["inviter_id"] == userNotiId);
  console.log(elseNoti);

  let findElseData = findNoti.filter(
    (noti) => noti["inviteNotiId"] !== elseNoti["inviteNotiId"]
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
  document.querySelector(".display-container").append(displayInsideDiv);

  let notificationProfileNameDiv = document.createElement("div");
  notificationProfileNameDiv.setAttribute(
    "class",
    "notification-profile-name-div"
  );
  displayInsideDiv.append(notificationProfileNameDiv);

  let notificationUserProfileDiv = document.createElement("div");
  notificationUserProfileDiv.setAttribute(
    "class",
    "notification-user-profile-div"
  );
  notificationProfileNameDiv.append(notificationUserProfileDiv);

  let profileImage = document.createElement("img");
  profileImage.setAttribute("class", "notification-person-image");
  profileImage.setAttribute("alt", "inviter-image");
  profileImage.setAttribute("src", elseNoti["invite_person_url"]);
  notificationUserProfileDiv.append(profileImage);

  let personNameDiv = document.createElement("div");
  personNameDiv.setAttribute("class", "person-name-div");
  notificationProfileNameDiv.append(personNameDiv);

  let personName = document.createElement("p");
  personName.setAttribute("class", "person-name");
  personName.innerHTML = elseNoti["inviter_person"];
  personNameDiv.append(personName);

  // notification show div container

  let notificationShowDivContainer = document.createElement("div");
  notificationShowDivContainer.setAttribute(
    "class",
    "notification-show-div-container"
  );
  displayInsideDiv.append(notificationShowDivContainer);

  let notificationPictureDiv = document.createElement("div");
  notificationPictureDiv.setAttribute("class", "notification-picture-div");
  notificationShowDivContainer.append(notificationPictureDiv);

  let notificationPicture = document.createElement("img");
  notificationPicture.setAttribute("class", "notification-picture");
  notificationPicture.setAttribute("alt", "invite-image");
  notificationPicture.setAttribute("src", elseNoti["invite_person_url"]);
  notificationPictureDiv.append(notificationPicture);

  let notificationSideDetailsDivContainer = document.createElement("div");
  notificationSideDetailsDivContainer.setAttribute(
    "class",
    "notification-side-details-div-container"
  );
  notificationShowDivContainer.append(notificationSideDetailsDivContainer);

  let notificationDataDiv = document.createElement("div");
  notificationDataDiv.setAttribute("class", "notification-data-div");
  notificationSideDetailsDivContainer.append(notificationDataDiv);

  let notificationH3 = document.createElement("h3");
  notificationH3.setAttribute("class", "notification-h3");
  notificationH3.innerHTML = elseNoti["inviteChat"];
  notificationDataDiv.append(notificationH3);

  let notificationP1 = document.createElement("p");
  notificationP1.setAttribute("class", "notification-para");
  notificationP1.innerHTML = elseNoti["inviteTime"];
  notificationDataDiv.append(notificationP1);

  let notificationP2 = document.createElement("p");
  notificationP2.setAttribute("class", "notification-para");
  notificationP2.innerHTML = elseNoti["inviteDate"];
  notificationDataDiv.append(notificationP2);

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
      userNameH3.innerHTML = findElseData[i]["inviter_person"];
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