let GetInviteDetails = JSON.parse(localStorage.getItem("userInvites"));
console.log(GetInviteDetails);

// dynamanic user invite box creation
for (let i = 0; i < GetInviteDetails.length; i++) {
  let userInviteBox = document.createElement("div");
  userInviteBox.setAttribute("class", "user-invite-box-container");

  let userInviteDiv = document.createElement("div");
  userInviteDiv.setAttribute("class", "user-invite-div");
  userInviteBox.append(userInviteDiv);

  let inviteImageContentDiv = document.createElement("div");
  inviteImageContentDiv.setAttribute("class", "invite-image-content-container");
  userInviteDiv.append(inviteImageContentDiv);

  let inviteImageDiv = document.createElement("div");
  inviteImageDiv.setAttribute("class", "invite-image-div");
  inviteImageContentDiv.append(inviteImageDiv);

  let inviteImage = document.createElement("img");
  inviteImage.setAttribute("class", "invite-image");
  inviteImage.setAttribute("src", GetInviteDetails[i]["inviteImage"]);
  inviteImageDiv.append(inviteImage);

  let inviteNameContentDiv = document.createElement("div");
  inviteNameContentDiv.setAttribute("class", "invite-name-content-div");
  inviteImageContentDiv.append(inviteNameContentDiv);

  let inviteH3 = document.createElement("h3");
  inviteH3.setAttribute("class", "invite-h3");
  inviteH3.innerHTML = GetInviteDetails[i]["inviteName"];
  inviteNameContentDiv.append(inviteH3);

  let invitePara = document.createElement("p");
  invitePara.setAttribute("class", "invite-para");
  invitePara.innerHTML = GetInviteDetails[i]["inviteGlimpse"];
  inviteNameContentDiv.append(invitePara);

  // reciever div container

  let receiverEmojiContainer = document.createElement("div");
  receiverEmojiContainer.setAttribute(
    "class",
    "receivers-notification-emoji-container"
  );
  userInviteDiv.append(receiverEmojiContainer);

  let receiverDiv = document.createElement("div");
  receiverDiv.setAttribute("class", "receivers-div");
  receiverEmojiContainer.append(receiverDiv);

  let receiverPara = document.createElement("h3");
  receiverPara.setAttribute("class", "receiver-name");
  receiverPara.innerHTML = "Receivers";
  receiverDiv.append(receiverPara);

  let receiverCount = document.createElement("p");
  receiverCount.setAttribute("class", "receiver-count");
  receiverCount.innerHTML = GetInviteDetails.length;
  receiverDiv.append(receiverCount);

  // receiver Notification count

  let notificationDiv = document.createElement("div");
  notificationDiv.setAttribute("class", "notification-div");
  notificationDiv.setAttribute("onclick", "notification()");
  receiverEmojiContainer.append(notificationDiv);

  let notificationI = document.createElement("i");
  notificationI.setAttribute("class", "bi bi-bell");
  notificationDiv.append(notificationI);

  // reaction

  let reactionDiv = document.createElement("div");
  reactionDiv.setAttribute("class", "reaction-div");
  reactionDiv.setAttribute("onclick", "notification()");
  receiverEmojiContainer.append(reactionDiv);

  let reactionI = document.createElement("i");
  reactionI.setAttribute("class", "bi bi-emoji-heart-eyes-fill");
  reactionDiv.append(reactionI);

  //   update option

  let anger = document.createElement("a");
  anger.setAttribute(
    "href",
    "../pages/invite_card.html?inviteId=" + GetInviteDetails[i]["inviteId"]
  );

  receiverEmojiContainer.append(anger);

  let updateOptionDiv = document.createElement("div");
  updateOptionDiv.setAttribute("class", "update-option-div");

  anger.append(updateOptionDiv);

  let updateI = document.createElement("i");
  updateI.setAttribute("class", "bi bi-credit-card-2-front");
  updateOptionDiv.append(updateI);

  document
    .querySelector(".invitation-showing-area-container")
    .append(userInviteBox);
}
