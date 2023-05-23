// Here creating a function to find the user count

let totalUser = JSON.parse(localStorage.getItem("userFriends"));

let totalFriends;

for (let users of totalUser) {
  if (users[0]["frienderId"] == findUser["userId"]) {
    totalFriends = users;
  }
}

// Her user invite showing function creating

try {
  let GetInviteDetails = JSON.parse(localStorage.getItem("userInvites"));
  console.log(GetInviteDetails);

  // dynamanic user invite box creation
  let thisUserInvite;
  if (GetInviteDetails !== null) {
    thisUserInvite = GetInviteDetails.filter(
      (e) => e["inviterId"] == findUser["userId"]
    );

    for (let userInvite of thisUserInvite) {
      //   update option

      let anger = document.createElement("a");
      anger.setAttribute("class", "card-anger");
      anger.setAttribute(
        "href",
        "../pages/invite_card.html?inviteId=" +
          userInvite["inviteId"] +
          "&user=" +
          findUser["userId"]
      );

      let userInviteBox = document.createElement("div");
      userInviteBox.setAttribute("class", "user-invite-box-container");
      anger.append(userInviteBox);

      let userInviteDiv = document.createElement("div");
      userInviteDiv.setAttribute("class", "user-invite-div");
      userInviteBox.append(userInviteDiv);

      let inviteImageContentDiv = document.createElement("div");
      inviteImageContentDiv.setAttribute(
        "class",
        "invite-image-content-container"
      );
      userInviteDiv.append(inviteImageContentDiv);

      let inviteImageDiv = document.createElement("div");
      inviteImageDiv.setAttribute("class", "invite-image-div");
      inviteImageContentDiv.append(inviteImageDiv);

      let inviteImage = document.createElement("img");
      inviteImage.setAttribute("class", "invite-image");
      inviteImage.setAttribute("src", userInvite["inviteImage"]);
      inviteImageDiv.append(inviteImage);

      let inviteNameContentDiv = document.createElement("div");
      inviteNameContentDiv.setAttribute("class", "invite-name-content-div");
      inviteImageContentDiv.append(inviteNameContentDiv);

      let inviteH3 = document.createElement("h3");
      inviteH3.setAttribute("class", "invite-h3");
      inviteH3.innerHTML = userInvite["inviteName"];
      inviteNameContentDiv.append(inviteH3);

      let invitePara = document.createElement("p");
      invitePara.setAttribute("class", "invite-para");
      invitePara.innerHTML = userInvite["inviteGlimpse"];
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
      receiverPara.innerHTML = "Count";
      receiverDiv.append(receiverPara);

      let likeCount =
        (userInvite["inviteLike"].length / totalFriends.length) * 100;

      let okPercentageDiv = document.createElement("div");
      okPercentageDiv.setAttribute("class", "ok-percentage-div");
      okPercentageDiv.setAttribute("data-percent", likeCount);
      receiverEmojiContainer.append(okPercentageDiv);

      let okPercentageInsideDiv = document.createElement("div");
      okPercentageInsideDiv.setAttribute("class", "ok-percentage-inside-div");
      okPercentageDiv.append(okPercentageInsideDiv);

      let okPercentageI = document.createElement("i");
      okPercentageI.setAttribute("class", "bi bi-hand-thumbs-up ok-i");
      okPercentageInsideDiv.append(okPercentageI);

      let okPercentagep = document.createElement("p");
      okPercentagep.setAttribute("class", "ok-percentage-p");
      okPercentagep.innerHTML = likeCount + "%";
      okPercentageInsideDiv.append(okPercentagep);

      let noCount = (userInvite["inviteNo"].length / totalFriends.length) * 100;

      let noPercentageDiv = document.createElement("div");
      noPercentageDiv.setAttribute("class", "no-percentage-div");
      noPercentageDiv.setAttribute("data-percent", noCount);
      receiverEmojiContainer.append(noPercentageDiv);

      let noPercentageInsideDiv = document.createElement("div");
      noPercentageInsideDiv.setAttribute("class", "no-percentage-inside-div");
      noPercentageDiv.append(noPercentageInsideDiv);

      let noPercentageI = document.createElement("i");
      noPercentageI.setAttribute("class", "bi bi-hand-thumbs-down no-i");
      noPercentageInsideDiv.append(noPercentageI);

      let noPercentageP = document.createElement("p");
      noPercentageP.innerHTML = noCount + "%";
      noPercentageP.setAttribute("class", "no-percentage-p");
      noPercentageInsideDiv.append(noPercentageP);

      document
        .querySelector(".invitation-showing-area-container")
        .append(anger);
    }
  }
} catch (error) {
  console.log("An error occured while show the invite :", error);
}
// page redirection function for to redirect to invite add page

let invitePageElement = document.querySelector(".invite-inside-div-container");
console.log(invitePageElement);

invitePageElement.addEventListener("click", () => {
  try {
    window.location.href =
      "../pages/add_invite_form.html?user=" + findUser["userId"];
  } catch (error) {
    console.log("An error occured while invite redirection :", error);
  }
});
