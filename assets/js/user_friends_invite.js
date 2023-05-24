// dynamic card creation

let friendsInvitesData = JSON.parse(localStorage.getItem("userInvites"));
console.log(friendsInvitesData);
try {
  let friendsInvites = friendsInvitesData.filter(
    (e) => e["inviterId"] !== findUser["userId"]
  );

  console.log(friendsInvites);

  for (let friendInv of friendsInvites) {
    let friendInviteContainer = document.createElement("div");
    friendInviteContainer.setAttribute(
      "class",
      "user-card-container" + " " + friendInv["inviterName"]
    );
    friendInviteContainer.setAttribute("id", friendInv["inviteId"]);
    friendInviteContainer.setAttribute("onclick", "showInvite(this.id)");

    let friendInviteInsideContainer = document.createElement("div");
    friendInviteInsideContainer.setAttribute(
      "class",
      "friends-invite-inside-container"
    );
    friendInviteContainer.append(friendInviteInsideContainer);

    // invite name image showing container

    let pictureNameDivContainer = document.createElement("div");
    pictureNameDivContainer.setAttribute(
      "class",
      "picture-and-name-div-container"
    );
    friendInviteInsideContainer.append(pictureNameDivContainer);

    let friendInviteImageDiv = document.createElement("div");
    friendInviteImageDiv.setAttribute("class", "friends-invites-image-div");
    pictureNameDivContainer.append(friendInviteImageDiv);

    let friendsInviteImage = document.createElement("img");
    friendsInviteImage.setAttribute("class", "friends-invite-image");
    friendsInviteImage.setAttribute("src", friendInv["inviterImage"]);
    friendInviteImageDiv.append(friendsInviteImage);

    // inviting user name slogan

    let friendsPartyNameGlimpseDiv = document.createElement("div");
    friendsPartyNameGlimpseDiv.setAttribute(
      "class",
      "friends-party-name-glimpse-div"
    );
    pictureNameDivContainer.append(friendsPartyNameGlimpseDiv);

    let invitingUserNameH3 = document.createElement("h3");
    invitingUserNameH3.setAttribute("class", "inviting-user-name");
    invitingUserNameH3.innerHTML = friendInv["inviterName"];
    friendsPartyNameGlimpseDiv.append(invitingUserNameH3);

    let invitingGlimpsePara = document.createElement("p");
    invitingGlimpsePara.setAttribute("class", "invite-glimpse");
    invitingGlimpsePara.innerHTML = friendInv["inviteName"];
    friendsPartyNameGlimpseDiv.append(invitingGlimpsePara);

    // invite name and time showing container

    let inviteAndTimgingDiv = document.createElement("div");
    inviteAndTimgingDiv.setAttribute("class", "invite-showing-div-container");
    friendInviteInsideContainer.append(inviteAndTimgingDiv);

    let inviteInsideDiv = document.createElement("div");
    inviteInsideDiv.setAttribute("class", "invite-inside-div");
    inviteAndTimgingDiv.append(inviteInsideDiv);

    // chatTiming

    let chatTimeDiv = document.createElement("div");
    chatTimeDiv.setAttribute("class", "chat-time-div");
    inviteInsideDiv.append(chatTimeDiv);

    let chatTime = document.createElement("p");
    chatTime.setAttribute("class", "invite-chat-time-para");
    chatTime.innerHTML = friendInv["inviteTime"];
    chatTimeDiv.append(chatTime);

    document
      .querySelector(".friends-inside-invite-and-details-showing-container")
      .append(friendInviteContainer);
  }
} catch (error) {
  console.log("An error occurred while creating a user invite card :", error);
}
