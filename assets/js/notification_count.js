let notificationDatas = JSON.parse(
  localStorage.getItem("followNotificationData")
);
console.log(notificationDatas);

let othersData = JSON.parse(localStorage.getItem("inviteNotificationData"));
console.log(othersData);

let userNotifications = [];

if (notificationDatas !== null) {
  for (let follow of notificationDatas) {
    if (
      follow["requestReceiverId"] == findUser["userId"] &&
      follow["isRead"] == "false"
    ) {
      userNotifications.push(follow);
    }
  }
}

let userNotificationLength = userNotifications.length;

console.log(userNotifications);

let otherDataArray = [];

if (othersData !== null) {
  for (let other of othersData) {
    if (
      other["message_receiver_id"] == findUser["userId"] &&
      other["isRead"] == "false"
    ) {
      otherDataArray.push(other);
    }
  }
}

console.log(userNotifications);

let otherNotificationLength = otherDataArray.length;

let notificationCounts = otherNotificationLength + userNotificationLength;

if (notificationCounts != 0) {
  let countElement = document.querySelector(".notification-para");

  countElement.innerHTML = notificationCounts;
}
