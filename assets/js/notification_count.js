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

console.log(userNotifications);

if (othersData !== null) {
  for (let other of othersData) {
    if (other["requestReceiverId"] == findUser["userId"]) {
      userNotifications.push(other);
    }
  }
}

console.log(userNotifications);

let notificationCounts = userNotifications.length;

if (notificationCounts != 0) {
  let countElement = document.querySelector(".notification-para");

  countElement.innerHTML = notificationCounts;
}
