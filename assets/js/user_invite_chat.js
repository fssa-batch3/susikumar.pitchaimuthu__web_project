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
