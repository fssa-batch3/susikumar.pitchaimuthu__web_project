// create user profile div creation

let profileNameDiv = document.createElement("div");
profileNameDiv.setAttribute("class", "profile-user-nmae-div");
document.querySelector(".invite-inside-profile-div").append(profileNameDiv);

let profileName = document.createElement("p");
profileName.setAttribute("class", "prfile-user-name");
profileName.innerHTML = findUser["userName"];
profileNameDiv.append(profileName);

let profileDiv = document.createElement("div");
profileDiv.setAttribute("class", "user-profile-div");
document.querySelector(".invite-inside-profile-div").append(profileDiv);

let profileImg = document.createElement("img");
profileImg.setAttribute("class", "profile-image");
profileImg.setAttribute("src", findUser["avatarUrl"]);
profileDiv.append(profileImg);

// using url parameters for get a invite id

let inviteUrl = window.location.search;

let inviteUrlParam = new URLSearchParams(inviteUrl);

let urlinviteId = inviteUrlParam.get("inviteId");
console.log(urlinviteId);

// using find method get show invite deatails
let getinviteData = JSON.parse(localStorage.getItem("userInvites"));
console.log(getinviteData);

let findInvite = getinviteData.find((e) => e.inviteId == urlinviteId);
console.log(findInvite);

// first element chart div

let element = document.querySelector(".chart-div");
element.setAttribute("data-percent", findInvite["inviteHeart"].length);
let chartOnePara = document.querySelector(".first");
console.log(chartOnePara);
console.log(findInvite["inviteHeart"]);
chartOnePara.innerHTML = findInvite["inviteHeart"].length + "%";

let element_two = document.querySelector(".chart-div-two");
element_two.setAttribute("data-percent", findInvite["inviteLike"].length);
let chartTwoPara = document.querySelector(".second");
chartTwoPara.innerHTML = findInvite["inviteLike"].length + "%";

let element_three = document.querySelector(".chart-div-three");
element_three.setAttribute("data-percent", findInvite["inviteNo"].length);
let chartThreePara = document.querySelector(".three");
chartThreePara.innerHTML = findInvite["inviteNo"].length + "%";

// create element for showing the invite

let invite_image = document.createElement("img");
invite_image.setAttribute("class", "invite-image");
invite_image.setAttribute("src", findInvite["inviteImage"]);
document.querySelector(".invite-inside-div").append(invite_image);

// this elements for show the invite details

let inviteName = (document.getElementById("inviteName").value =
  findInvite["inviteName"]);

let inviteDate = (document.getElementById("inviteDate").value =
  findInvite["inviteDate"]);

let inviteTime = (document.getElementById("inviteTime").value =
  findInvite["inviteTime"]);

let specialPerson = (document.getElementById("specialPerson").value =
  findInvite["specialPerson"]);

let inviteGlimpse = (document.getElementById("inviteGlimpse").value =
  findInvite["inviteGlimpse"]);
let inviteExpand = (document.getElementById("inviteExplanation").value =
  findInvite["inviteExplanation"]);
