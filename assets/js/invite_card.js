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

let element_two = document.querySelector(".chart-div-three");
element_two.setAttribute("data-percent", findInvite["inviteLike"].length);
let chartTwoPara = document.querySelector(".second");
chartTwoPara.innerHTML = findInvite["inviteLike"].length + "%";

let element_three = document.querySelector(".chart-div-two");
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

//  invite like details showing function

let detailsDiv = document.querySelector(
  ".invite-details-showing-div-container"
);

let responseHeadPara = document.querySelector(".response-head-para");

let memberPara = document.querySelector(".member-para");

let heartDiv = document.querySelector(".chart-div");

let registerData = JSON.parse(localStorage.getItem("register"));

heartDiv.addEventListener("click", (event) => {
  event.preventDefault();

  if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
  } else {
    detailsDiv.style.display = "none";
  }

  // remove previous responce

  let responseCardElement = document.querySelectorAll(".responce-card");

  if (responseCardElement !== null) {
    for (let resCard of responseCardElement) {
      resCard.remove();
    }
  }

  let heartResponce = findInvite["inviteHeart"];
  console.log(heartResponce);
  console.log(heartResponce.length);

  //  setting the respective head for the response

  responseHeadPara.innerHTML = "Like response details";

  memberPara.innerHTML = heartResponce.length + " Members";

  // Getting the heart response datas

  let heartData = [];

  for (let heart of heartResponce) {
    for (let regisPerson of registerData) {
      if (regisPerson["userId"] == heart) {
        heartData.push(regisPerson);
      }
    }
  }

  console.log(heartData);

  for (let heartDetail of heartData) {
    let responseCard = document.createElement("div");
    responseCard.setAttribute("class", "responce-card");

    let insideResponseCardDiv = document.createElement("div");
    insideResponseCardDiv.setAttribute("class", "inside-response-card-div");
    responseCard.append(insideResponseCardDiv);

    let responseImageDiv = document.createElement("div");
    responseImageDiv.setAttribute("class", "response-image-div");
    insideResponseCardDiv.append(responseImageDiv);

    let responseImage = document.createElement("img");
    responseImage.setAttribute("class", "response-image");
    responseImage.setAttribute("alt", "user-image");
    responseImage.setAttribute("src", heartDetail["avatarUrl"]);
    responseImageDiv.append(responseImage);

    let responsePersonAboutDiv = document.createElement("div");
    responsePersonAboutDiv.setAttribute("class", "response-person-about-div");
    insideResponseCardDiv.append(responsePersonAboutDiv);

    let nameH3 = document.createElement("h3");
    nameH3.setAttribute("class", "name-h3");
    nameH3.innerHTML = heartDetail["userName"];
    responsePersonAboutDiv.append(nameH3);

    let personTheme = document.createElement("p");
    personTheme.setAttribute("class", "person-theme");
    personTheme.innerHTML = heartDetail["userTheme"];
    responsePersonAboutDiv.append(personTheme);

    document.querySelector(".invite-inside-response-div").append(responseCard);
  }
});

// Invite dislike details showing function

let likeDiv = document.querySelector(".chart-div-three");

likeDiv.addEventListener("click", (event) => {
  event.preventDefault();

  if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
  } else {
    detailsDiv.style.display = "none";
  }

  // remove previous responce
  let responseCardElement = document.querySelectorAll(".responce-card");

  if (responseCardElement !== null) {
    for (let resCard of responseCardElement) {
      resCard.remove();
    }
  }

  let okResponse = findInvite["inviteLike"];

  //  setting the respective head for the response

  responseHeadPara.innerHTML = "Ok response details";

  memberPara.innerHTML = okResponse.length + " Members";

  let okData = [];

  for (let ok of okResponse) {
    for (let regisPerson of registerData) {
      if (regisPerson["userId"] == ok) {
        okData.push(regisPerson);
      }
    }
  }

  // creting element of yes persons

  for (let okPerson of okData) {
    let responseCard = document.createElement("div");
    responseCard.setAttribute("class", "responce-card");

    let insideResponseCardDiv = document.createElement("div");
    insideResponseCardDiv.setAttribute("class", "inside-response-card-div");
    responseCard.append(insideResponseCardDiv);

    let responseImageDiv = document.createElement("div");
    responseImageDiv.setAttribute("class", "response-image-div");
    insideResponseCardDiv.append(responseImageDiv);

    let responseImage = document.createElement("img");
    responseImage.setAttribute("class", "response-image");
    responseImage.setAttribute("alt", "user-image");
    responseImage.setAttribute("src", okPerson["avatarUrl"]);
    responseImageDiv.append(responseImage);

    let responsePersonAboutDiv = document.createElement("div");
    responsePersonAboutDiv.setAttribute("class", "response-person-about-div");
    insideResponseCardDiv.append(responsePersonAboutDiv);

    let nameH3 = document.createElement("h3");
    nameH3.setAttribute("class", "name-h3");
    nameH3.innerHTML = okPerson["userName"];
    responsePersonAboutDiv.append(nameH3);

    let personTheme = document.createElement("p");
    personTheme.setAttribute("class", "person-theme");
    personTheme.innerHTML = okPerson["userTheme"];
    responsePersonAboutDiv.append(personTheme);

    document.querySelector(".invite-inside-response-div").append(responseCard);
  }
});

// Invite dislike details showing function

let dislikeDiv = document.querySelector(".chart-div-two");

dislikeDiv.addEventListener("click", (event) => {
  event.preventDefault();

  if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
  } else {
    detailsDiv.style.display = "none";
  }

  // remove previous responce

  let responseCardElement = document.querySelectorAll(".responce-card");

  if (responseCardElement !== null) {
    for (let resCard of responseCardElement) {
      resCard.remove();
    }
  }

  let noResponce = findInvite["inviteNo"];

  //  setting the respective head for the response

  responseHeadPara.innerHTML = "No response details";

  memberPara.innerHTML = noResponce.length + " Members";

  let noData = [];

  for (let no of noResponce) {
    for (let regisPerson of registerData) {
      if (regisPerson["userId"] == no) {
        noData.push(regisPerson);
      }
    }
  }

  // No person element creation

  for (let noDetails of noData) {
    let responseCard = document.createElement("div");
    responseCard.setAttribute("class", "responce-card");

    let insideResponseCardDiv = document.createElement("div");
    insideResponseCardDiv.setAttribute("class", "inside-response-card-div");
    responseCard.append(insideResponseCardDiv);

    let responseImageDiv = document.createElement("div");
    responseImageDiv.setAttribute("class", "response-image-div");
    insideResponseCardDiv.append(responseImageDiv);

    let responseImage = document.createElement("img");
    responseImage.setAttribute("class", "response-image");
    responseImage.setAttribute("alt", "user-image");
    responseImage.setAttribute("src", noDetails["avatarUrl"]);
    responseImageDiv.append(responseImage);

    let responsePersonAboutDiv = document.createElement("div");
    responsePersonAboutDiv.setAttribute("class", "response-person-about-div");
    insideResponseCardDiv.append(responsePersonAboutDiv);

    let nameH3 = document.createElement("h3");
    nameH3.setAttribute("class", "name-h3");
    nameH3.innerHTML = noDetails["userName"];
    responsePersonAboutDiv.append(nameH3);

    let personTheme = document.createElement("p");
    personTheme.setAttribute("class", "person-theme");
    personTheme.innerHTML = noDetails["userTheme"];
    responsePersonAboutDiv.append(personTheme);

    document.querySelector(".invite-inside-response-div").append(responseCard);
  }
});

// remove details card function

let removeDiv = document.querySelector(".remove-div");
console.log(removeDiv);
removeDiv.addEventListener("click", (e) => {
  e.preventDefault();
  if (detailsDiv.style.display === "block") {
    detailsDiv.style.display = "none";
  }
});
