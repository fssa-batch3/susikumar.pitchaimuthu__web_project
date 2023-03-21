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
