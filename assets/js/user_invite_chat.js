// user friends showing div container

function inviteChatNotification(noti) {
  console.log(noti);

  let inviteNotificationArr = [];

  if (localStorage.getItem("inviteNotificationData") !== null) {
    inviteNotificationArr = JSON.parse(
      localStorage.getItem("inviteNotificationData")
    );
  }

  let findCurrentUser = JSON.parse(localStorage.getItem("userInvites"));

  let findObjectInvites = findCurrentUser.find(
    (inviteObj) => inviteObj["inviteId"] == noti
  );
  console.log(findObjectInvites);

  let inviteChat = document.getElementById("invite-reply-input").value;

  let inviteNotiId = Date.now();
  let inviteTime = moment().format("LT");
  let inviteDate = moment().format("L");
  let invite_person_url = findUser["avatarUrl"];
  let notification_person = findUser["userName"];
  let inviter_id = findObjectInvites["inviterId"];
  let notificationer_id = findUser["userId"];
  let notification_file = findObjectInvites["inviteImage"];

  let inviteObject = {
    inviteChat,
    inviteNotiId,
    inviteTime,
    inviteDate,
    notification_person,
    invite_person_url,
    notificationer_id,
    notification_receiver_id: inviter_id,
    notification_file,
  };

  console.log(inviteObject);
  inviteNotificationArr.push(inviteObject);

  localStorage.setItem(
    "inviteNotificationData",
    JSON.stringify(inviteNotificationArr)
  );
}

// invite reation showing function

let inviteDatas = JSON.parse(localStorage.getItem("userInvites"));
console.log(inviteDatas);

// heart function

function likeHeart(e) {
  console.log(e);

  let findInvite = inviteDatas.find((end) => end["inviteId"] == e);
  console.log(findInvite);

  let LikeIndex = inviteDatas.indexOf(findInvite);
  console.log(LikeIndex);

  let likeButton = document.querySelector(".heart-div").firstChild;
  console.log(likeButton);

  let buttonValue = likeButton.classList["value"];

  if (buttonValue == "bi bi-heart") {
    likeButton.remove("bi bi-heart");

    let likeFill = document.createElement("i");
    likeFill.setAttribute("class", "bi bi-heart-fill");
    document.querySelector(".heart-div").append(likeFill);

    let likeObject = {
      likeId: findUser["userId"],
    };

    let likeObjectAssaign = Object.assign(findInvite, likeObject);
    console.log(likeObjectAssaign);

    inviteDatas[LikeIndex] = likeObjectAssaign;

    localStorage.setItem("userInvites", JSON.stringify(inviteDatas));
    return;
  } else {
    likeButton.remove("bi bi-heart-fill");

    let likeFill = document.createElement("i");
    likeFill.setAttribute("class", "bi bi-heart");
    document.querySelector(".heart-div").append(likeFill);

    let likeObject = {
      likeId: "",
    };

    let likeObjectAssaign = Object.assign(findInvite, likeObject);
    console.log(likeObjectAssaign);

    inviteDatas[LikeIndex] = likeObjectAssaign;

    localStorage.setItem("userInvites", JSON.stringify(inviteDatas));
  }
}

// thumbs up function

function thumbsUp(e) {
  console.log(e);

  let findInvite = inviteDatas.find((end) => end["inviteId"] == e);
  console.log(findInvite);

  let LikeIndex = inviteDatas.indexOf(findInvite);
  console.log(LikeIndex);

  let okButton = document.querySelector(".ok-div").firstChild;

  let okValue = okButton.classList["value"];

  if (okValue == "bi bi-hand-thumbs-up") {
    okButton.remove(" bi bi-hand-thumbs-up");

    let likeFill = document.createElement("i");
    likeFill.setAttribute("class", "bi bi-hand-thumbs-up-fill");
    document.querySelector(".ok-div").append(likeFill);

    let okObject = {
      okId: findUser["userId"],
    };

    let likeObjectAssaign = Object.assign(findInvite, okObject);
    console.log(likeObjectAssaign);

    inviteDatas[LikeIndex] = likeObjectAssaign;

    localStorage.setItem("userInvites", JSON.stringify(inviteDatas));
  } else {
    okButton.remove(" bi bi-hand-thumbs-up-fill");

    let likeFill = document.createElement("i");
    likeFill.setAttribute("class", "bi bi-hand-thumbs-up");
    document.querySelector(".ok-div").append(likeFill);

    let okObject = {
      okId: "",
    };

    let likeObjectAssaign = Object.assign(findInvite, okObject);
    console.log(likeObjectAssaign);

    inviteDatas[LikeIndex] = likeObjectAssaign;

    localStorage.setItem("userInvites", JSON.stringify(inviteDatas));
  }
}

// thumbs down function

function thumbsDown(e) {
  console.log(e);

  let findInvite = inviteDatas.find((end) => end["inviteId"] == e);
  console.log(findInvite);

  let LikeIndex = inviteDatas.indexOf(findInvite);
  console.log(LikeIndex);

  let thumbsDownElement = document.querySelector(".sorry-div").firstChild;

  let sorryValue = thumbsDownElement.classList["value"];

  if (sorryValue == "bi bi-hand-thumbs-down") {
    thumbsDownElement.remove("bi bi-hand-thumbs-down");

    let likeFill = document.createElement("i");
    likeFill.setAttribute("class", "bi bi-hand-thumbs-down-fill");
    document.querySelector(".sorry-div").append(likeFill);

    let downObject = {
      downId: findUser["userId"],
    };

    let likeObjectAssaign = Object.assign(findInvite, downObject);
    console.log(likeObjectAssaign);

    inviteDatas[LikeIndex] = likeObjectAssaign;

    localStorage.setItem("userInvites", JSON.stringify(inviteDatas));
  } else {
    thumbsDownElement.remove("bi bi-hand-thumbs-down-fill");

    let likeFill = document.createElement("i");
    likeFill.setAttribute("class", "bi bi-hand-thumbs-down");
    document.querySelector(".sorry-div").append(likeFill);

    let downObject = {
      downId: "",
    };

    let likeObjectAssaign = Object.assign(findInvite, downObject);
    console.log(likeObjectAssaign);

    inviteDatas[LikeIndex] = likeObjectAssaign;

    localStorage.setItem("userInvites", JSON.stringify(inviteDatas));
  }
}
