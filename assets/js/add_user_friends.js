// importing firebase data to show the user how much data are unread

import database from "./db.js";

import {
  onValue,
  ref,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

console.log(database);

// getting the firebase database data

let currentChatData = [];

onValue(ref(database, `freshchat/`), (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    // Get the key and value of each child node
    const key = childSnapshot.key;
    console.log(key);

    const value = childSnapshot.val();

    let chatObject = {
      chatkey: key,
    };

    let chatAssign = Object.assign(value, chatObject);

    currentChatData.push(chatAssign);

    console.log(currentChatData);
  });
});

console.log(currentChatData);

// getting the user data from the database

let freshChatUsers = JSON.parse(localStorage.getItem("userFriends"));
console.log(freshChatUsers);

// let allSendChats = JSON.parse(localStorage.getItem("senderMessage"));
// console.log(allSendChats);

let allUSerFriendsData;

//  Creating a for loop for find user friends

for (const freshChatUser of freshChatUsers) {
  if (freshChatUser[0]["frienderId"] == findUser["userId"]) {
    allUSerFriendsData = freshChatUser;
    break;
  }
}
console.log(allUSerFriendsData);

if (allUSerFriendsData !== undefined) {
  for (const friendData of allUSerFriendsData) {
    let div = document.createElement("div");
    div.setAttribute(
      "class",
      "user-card-container" + " " + friendData["userName"]
    );

    let usercardContainerInsideDiv = document.createElement("div");
    usercardContainerInsideDiv.setAttribute(
      "class",
      "user-card-inside-container"
    );
    usercardContainerInsideDiv.setAttribute("id", friendData["userId"]);

    div.append(usercardContainerInsideDiv);

    let image_div = document.createElement("div");

    image_div.setAttribute("class", "image-name");
    usercardContainerInsideDiv.append(image_div);

    let image = document.createElement("div");
    image.setAttribute("class", "image");
    image_div.append(image);

    let img = document.createElement("img");
    img.setAttribute("class", "member-image");
    img.setAttribute("src", friendData["avatarUrl"]);
    image.append(img);

    let nameOne = document.createElement("div");
    nameOne.setAttribute("class", "name");
    image_div.append(nameOne);

    let para = document.createElement("p");
    para.innerHTML = friendData["userName"];
    nameOne.append(para);

    let paragraph = document.createElement("p");
    paragraph.innerText = friendData["userTheme"];
    nameOne.append(paragraph);

    let timeCountDiv = document.createElement("div");
    timeCountDiv.setAttribute("class", "chat-count-div");
    usercardContainerInsideDiv.append(timeCountDiv);

    let countContainer = document.createElement("div");
    countContainer.setAttribute("class", "count-container");
    timeCountDiv.append(countContainer);

    // creating for loop to show the user unread chat count

    let chatterAccountId = friendData["userId"];
    console.log(chatterAccountId);

    let numberCount = [];

    let unread = false;

    if (currentChatData != null) {
      console.log(currentChatData);
      for (let i = 0; i < currentChatData.length; i++) {
        console.log(currentChatData[i]["chatReceiverId"]);
        console.log(findUser["userId"]);
        if (
          // currentChatData[i]["chatReceiverId"] == findUser["userId"] &&
          currentChatData[i]["isread"] === unread
        ) {
          numberCount.push(currentChatData[i]);
          console.log(numberCount.length);
        }
      }
    }

    console.log(numberCount.length);

    if (numberCount != 0) {
      let countDiv = document.createElement("div");
      countDiv.setAttribute("class", "count-div");
      countContainer.append(countDiv);

      let countPara = document.createElement("p");
      countPara.setAttribute("class", "count-para");
      countPara.innerText = numberCount.length;
      countDiv.append(countPara);
    }

    let timeAgo = document.createElement("div");
    timeAgo.setAttribute("id", "time-ago");
    timeCountDiv.append(timeAgo);

    let time = document.createElement("p");
    time.innerHTML = friendData["time"];
    timeAgo.append(time);

    document.querySelector(".chat-member-inside-container").append(div);
  }
}
