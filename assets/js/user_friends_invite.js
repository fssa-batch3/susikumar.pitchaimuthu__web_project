getInvitesData = JSON.parse(localStorage.getItem("userInvites"));

let userFriendsInvites = [
  {
    invite_name: "Loversday Party",
    invite_time: "7.22 PM",
    invite_user: "Manisha",
    invite_id: "1",
    inviter_url: "../assets/images/Hero section/User-review/1.jpg",
  },
  {
    invite_name: "Birday Party",
    invite_time: "6.22 PM",
    invite_user: "Akalya",
    invite_id: "2",
    inviter_url: "../assets/images/Hero section/User-review/2.jpg",
  },
  {
    invite_name: "Friends Party",
    invite_time: "8.22 PM",
    invite_user: "Ranjitha",
    invite_id: "3",
    inviter_url: "../assets/images/Hero section/User-review/3.jpg",
  },
  {
    invite_name: "Loversday",
    invite_time: "9.00 PM",
    invite_user: "Pooja",
    invite_id: "4",
    inviter_url: "../assets/images/Hero section/User-review/4.jpg",
  },
  {
    invite_name: "Loversday Party",
    invite_time: "7.22 PM",
    invite_user: "Jaya prakash",
    invite_id: "5",
    inviter_url:
      "https://ca.slack-edge.com/T032648LE-U042JUKD4CQ-32cf205d0162-512",
  },
  {
    invite_name: "Birday Party",
    invite_time: "6.22 PM",
    invite_user: "Ajaikumar",
    invite_id: "6",
    inviter_url: "../assets/images/Hero section/User-review/2.jpg",
  },
  {
    invite_name: "Friends Party",
    invite_time: "8.22 PM",
    invite_user: "Rubiya",
    invite_id: "7",
    inviter_url: "../assets/images/Hero section/User-review/3.jpg",
  },
  {
    invite_name: "Loversday",
    invite_time: "9.00 PM",
    invite_user: "Riya",
    invite_id: "8",
    inviter_url: "../assets/images/Hero section/User-review/4.jpg",
  },
];

localStorage.setItem("userFriendsInvites", JSON.stringify(userFriendsInvites));

// dynamic card creation

let friendsInvites = JSON.parse(localStorage.getItem("userFriendsInvites"));

for (let i = 0; i < friendsInvites.length; i++) {
  let friendInviteContainer = document.createElement("div");
  friendInviteContainer.setAttribute("class", "friends-invites-container");
  friendInviteContainer.setAttribute("id", friendsInvites[i]["invite_id"]);
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
  friendsInviteImage.setAttribute("src", friendsInvites[i]["inviter_url"]);
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
  invitingUserNameH3.innerHTML = friendsInvites[i]["invite_user"];
  friendsPartyNameGlimpseDiv.append(invitingUserNameH3);

  let invitingGlimpsePara = document.createElement("p");
  invitingGlimpsePara.setAttribute("class", "invite-glimpse");
  invitingGlimpsePara.innerHTML = "Welcome to my lovers day";
  friendsPartyNameGlimpseDiv.append(invitingGlimpsePara);

  // invite name and time showing container

  let inviteAndTimgingDiv = document.createElement("div");
  inviteAndTimgingDiv.setAttribute("class", "invite-showing-div-container");
  friendInviteInsideContainer.append(inviteAndTimgingDiv);

  let inviteInsideDiv = document.createElement("div");
  inviteInsideDiv.setAttribute("class", "invite-inside-div");
  inviteAndTimgingDiv.append(inviteInsideDiv);

  let inviteYesNoDiv = document.createElement("div");
  inviteYesNoDiv.setAttribute("class", "invite-yes-no-div");
  inviteInsideDiv.append(inviteYesNoDiv);

  let inviteButton = document.createElement("button");
  inviteButton.setAttribute("class", "invite-button");
  inviteButton.innerHTML = "Lovers day";
  inviteYesNoDiv.append(inviteButton);

  // chatTiming

  let chatTimeDiv = document.createElement("div");
  chatTimeDiv.setAttribute("class", "chat-time-div");
  inviteInsideDiv.append(chatTimeDiv);

  let chatTime = document.createElement("p");
  chatTime.setAttribute("class", "invite-chat-time-para");
  chatTime.innerHTML = friendsInvites[i]["invite_time"];
  chatTimeDiv.append(chatTime);

  document
    .querySelector(".friends-inside-invite-and-details-showing-container")
    .append(friendInviteContainer);
}
