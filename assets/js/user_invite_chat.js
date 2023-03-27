// user friends showing div container

function inviteChatNotification(noti) {
  console.log(noti);

  let inviteNotificationArr = [];

  if (localStorage.getItem("inviteNotificationData") !== null) {
    inviteNotificationArr = JSON.parse(
      localStorage.getItem("inviteNotificationData")
    );
  }

  let findCurrentUser = JSON.parse(localStorage.getItem("userFriendsInvites"));

  let findObjectInvites = findCurrentUser.find(
    (inviteObj) => inviteObj["invite_id"] == noti
  );
  console.log(findObjectInvites);

  let inviteChat = document.getElementById("invite-reply-input").value;

  let inviteNotiId = Date.now();
  let inviteTime = moment().format("LT");
  let inviteDate = moment().format("L");
  let invite_person_url = findObjectInvites["inviter_url"];
  let inviter_person = findObjectInvites["invite_user"];
  let inviter_id = findObjectInvites["invite_id"];

  let inviteObject = {
    inviteChat,
    inviteNotiId,
    inviteTime,
    inviteDate,
    inviter_person,
    invite_person_url,
    inviter_id: inviter_id + inviteNotiId,
  };

  console.log(inviteObject);
  inviteNotificationArr.push(inviteObject);

  localStorage.setItem(
    "inviteNotificationData",
    JSON.stringify(inviteNotificationArr)
  );
}
