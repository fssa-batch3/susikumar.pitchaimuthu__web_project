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

    const value = childSnapshot.val();

    let chatObject = {
      chatkey: key,
    };

    let chatAssign = Object.assign(value, chatObject);

    currentChatData.push(chatAssign);

    console.log(currentChatData);
  });
  addUser();
});

console.log(currentChatData);

// getting the user data from the database

function addUser() {
  let freshChatUsers = JSON.parse(localStorage.getItem("userFriends"));
  console.log(freshChatUsers);

  let allUSerFriendsData;

  let userCard = document.querySelectorAll(".user-card-container");

  if (userCard[0] != undefined) {
    for (let i = 0; i < userCard.length; i++) {
      userCard[i].remove();
    }
  }

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

      let numberCount = [];

      let unread = false;

      if (currentChatData != null) {
        for (let i = 0; i < currentChatData.length; i++) {
          if (
            currentChatData[i]["chatReceiverId"] == findUser["userId"] &&
            currentChatData[i]["isRead"] == unread
          ) {
            numberCount.push(currentChatData[i]);
          }
        }
      }

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

  chatCard();
}

function chatCard() {
  let chatPersonCard = document.querySelectorAll(".user-card-container");
  console.log(chatPersonCard);

  let userSelectId;

  for (let i = 0; i < chatPersonCard.length; i++) {
    chatPersonCard[i].addEventListener("click", function (chatEvent) {
      chatEvent.preventDefault();

      // remve emoji div container

      let emojiDivs = document.querySelector(".emoji-name-div-container");

      if (emojiDivs != null) {
        emojiDivs.remove();
      }

      userSelectId = chatEvent.target.id;
      console.log(userSelectId);

      let userSelectionParse = JSON.parse(localStorage.getItem("register"));

      let userSelectionIdFind = userSelectionParse.find(
        (e) => e["userId"] == userSelectId
      );

      console.log(userSelectionIdFind);

      let checkUserData = document.querySelector(".user-profile-show-div");

      if (checkUserData !== null) {
        document.querySelector(".user-profile-show-div").remove();
      }
      // Elelements are created for showing chat user Datails in the top of the chat

      let userNameDivContainer = document.createElement("div");
      userNameDivContainer.setAttribute("class", "user-profile-show-div");

      let userNameDiv = document.createElement("div");
      userNameDiv.setAttribute("class", "user-name-lastseen-div");
      userNameDivContainer.append(userNameDiv);

      let chatPersonDiv = document.createElement("div");
      chatPersonDiv.setAttribute("class", "chat-person-profile-div");
      userNameDiv.append(chatPersonDiv);

      let chatUserImage = document.createElement("img");
      chatUserImage.setAttribute("class", "chat-user-image");
      chatUserImage.setAttribute("src", userSelectionIdFind["avatarUrl"]);
      chatPersonDiv.append(chatUserImage);

      let chatPersonContentDiv = document.createElement(
        "div",
        "chat-person-name-lastseen-div"
      );
      chatPersonContentDiv.setAttribute(
        "class",
        "chat-person-name-lastseen-div"
      );
      userNameDiv.append(chatPersonContentDiv);

      let nameH3 = document.createElement("h3");
      nameH3.setAttribute("id", "chat-user-name");
      nameH3.innerHTML = userSelectionIdFind["userName"];
      chatPersonContentDiv.append(nameH3);

      let contentPara = document.createElement("p");
      contentPara.setAttribute("id", "chat-user-last-content");
      chatPersonContentDiv.append(contentPara);

      // profile setting and call option elements

      let profileOptionContainer = document.createElement("div");
      profileOptionContainer.setAttribute("class", "profile-option-container");
      userNameDivContainer.append(profileOptionContainer);

      let profileOptionDiv = document.createElement("div");
      profileOptionDiv.setAttribute("class", "profile-option-div");
      profileOptionContainer.append(profileOptionDiv);

      let biTelephone = document.createElement("i");
      biTelephone.setAttribute("class", "bi bi-telephone");
      profileOptionDiv.append(biTelephone);

      let biCamera = document.createElement("i");
      biCamera.setAttribute("class", "bi bi-camera-video");
      profileOptionDiv.append(biCamera);

      let biGear = document.createElement("i");
      biGear.setAttribute("class", "bi bi-gear");
      profileOptionDiv.append(biGear);

      document
        .querySelector(".chat-member-option-div")
        .append(userNameDivContainer);

      // write the code to null the data

      let nullInput = document.querySelector("#chat-input-form");

      if (nullInput !== null) {
        document.querySelector("#chat-input-form").remove();
      }

      // create dynamic element for the input field

      let inputForm = document.createElement("div");
      inputForm.setAttribute("id", "chat-input-form");

      let emojiDiv = document.createElement("div");
      emojiDiv.setAttribute("class", "emoji-div");
      inputForm.append(emojiDiv);

      let smileI = document.createElement("i");
      smileI.setAttribute("class", "fa-regular fa-face-smile");
      emojiDiv.append(smileI);

      let emojiInputDiv = document.createElement("div");
      emojiInputDiv.setAttribute("class", "emoji-input-div-container");
      emojiDiv.append(emojiInputDiv);

      let emojiInsideDiv = document.createElement("div");
      emojiInsideDiv.setAttribute("class", "emoji-input-inside-div-container");
      emojiInputDiv.append(emojiInsideDiv);

      let InputDiv = document.createElement("div");
      InputDiv.setAttribute("class", "input-div");
      emojiInsideDiv.append(InputDiv);

      let emojiInpt = document.createElement("input");
      emojiInpt.setAttribute("id", "emoji-input");
      emojiInpt.setAttribute("placeholder", "Search");
      InputDiv.append(emojiInpt);

      let emojiDivContainer = document.createElement("div");
      emojiDivContainer.setAttribute("class", "emoji-div-container");
      emojiInsideDiv.append(emojiDivContainer);

      let chatInputDiv = document.createElement("div");
      chatInputDiv.setAttribute("class", "chat-input-div");
      inputForm.append(chatInputDiv);

      let chatInput = document.createElement("input");
      chatInput.setAttribute("id", "chat-input");
      chatInputDiv.append(chatInput);

      let chatFileOptionDiv = document.createElement("div");
      chatFileOptionDiv.setAttribute("class", "chat-file-option-div");
      inputForm.append(chatFileOptionDiv);

      let fileI = document.createElement("i");
      fileI.setAttribute("class", "fa fa-file");
      chatFileOptionDiv.append(fileI);

      let mikeI = document.createElement("i");
      mikeI.setAttribute("class", "fa fa-microphone");
      chatFileOptionDiv.append(mikeI);

      let chatSubmitDiv = document.createElement("div");
      chatSubmitDiv.setAttribute("class", "chat-submit-button-div");
      inputForm.append(chatSubmitDiv);

      let sendButton = document.createElement("button");
      sendButton.setAttribute("class", "chat-submit");
      chatSubmitDiv.append(sendButton);

      let sendIcon = document.createElement("i");
      sendIcon.setAttribute("class", "bi bi-send");
      sendButton.append(sendIcon);

      let Span = document.createElement("span");
      Span.setAttribute("class", "submit-span");
      Span.setAttribute("id", userSelectionIdFind["userId"]);
      Span.innerHTML = "Submit";
      sendButton.append(Span);

      let sendI = document.createElement("i");
      sendI.setAttribute("class", "send-i");
      sendButton.append(sendI);

      document.querySelector(".chat-input-option-div").append(inputForm);

      // checking the chats for to show the respective chat to respective person

      console.log("susi");

      if (currentChatData == null) {
        return;
      }

      console.log("run");

      let unique = [];

      for (let firebaseData of currentChatData) {
        if (
          (firebaseData["chatterId"] == findUser["userId"] &&
            firebaseData["chatReceiverId"] == userSelectId) ||
          (firebaseData["chatReceiverId"] == findUser["userId"] &&
            firebaseData["chatterId"] == userSelectId)
        ) {
          unique.push(firebaseData);
        }
      }

      console.log(unique);

      let sender = unique.filter(
        (obj, index, self) =>
          index === self.findIndex((o) => o.chatkey === obj.chatkey)
      );

      console.log(sender);
      // adding read true to the all chats

      let chageChat = document.querySelectorAll(".chat-div-for-user");

      if (chageChat[0] != undefined) {
        for (let i = 0; i < chageChat.length; i++) {
          chageChat[i].remove();
        }
      }

      for (let senders of sender) {
        if (
          senders["chatReceiverId"] == userSelectId &&
          senders["chatterId"] == findUser["userId"]
        ) {
          let chatDivUser = document.createElement("div");
          chatDivUser.setAttribute("class", "chat-div-for-user");

          let chatUserInsideDiv = document.createElement("div");
          chatUserInsideDiv.setAttribute("class", "chat-user-inside-div");
          chatUserInsideDiv.setAttribute("id", senders["chatkey"]);
          chatDivUser.append(chatUserInsideDiv);

          let chatDiv = document.createElement("div");
          chatDiv.setAttribute("class", "chat-div");
          chatUserInsideDiv.append(chatDiv);

          let chatInsideDiv = document.createElement("div");
          chatInsideDiv.setAttribute("class", "chat-inside-div");
          chatDiv.append(chatInsideDiv);

          let chatContentTimeDiv = document.createElement("div");
          chatContentTimeDiv.setAttribute("class", "chat-content-time-div");
          chatInsideDiv.append(chatContentTimeDiv);

          let chatContentTimeInsideDiv = document.createElement("div");
          chatContentTimeInsideDiv.setAttribute(
            "class",
            "chat-content-time-inside-div"
          );
          chatContentTimeDiv.append(chatContentTimeInsideDiv);

          let chatContentDiv = document.createElement("div");
          chatContentDiv.setAttribute("class", "chat-content-div");
          chatContentTimeInsideDiv.append(chatContentDiv);

          let chatContent = document.createElement("p");
          chatContent.setAttribute("class", "chat-content");
          chatContent.innerHTML = senders["chat"];
          chatContentDiv.append(chatContent);

          let chatTimeDiv = document.createElement("div");
          chatTimeDiv.setAttribute("class", "chat-time-div");
          chatContentTimeInsideDiv.append(chatTimeDiv);

          let timePara = document.createElement("p");
          timePara.setAttribute("class", "time-para");
          timePara.innerHTML = senders["chatTime"];
          chatTimeDiv.append(timePara);

          let userProfileDiv = document.createElement("div");
          userProfileDiv.setAttribute("class", "user-profile-div");
          chatInsideDiv.append(userProfileDiv);

          let usrImage = document.createElement("img");
          usrImage.setAttribute("alt", "chat-image");
          usrImage.setAttribute("class", "chatter-image");
          usrImage.setAttribute("src", findUser["avatarUrl"]);
          userProfileDiv.append(usrImage);

          // chat update and delete option element

          let div = document.createElement("div");
          div.setAttribute("class", "update-delete-option-div");
          div.setAttribute("id", senders["chatkey"]);
          chatContentTimeDiv.prepend(div);

          let editOptionInsideDiv = document.createElement("div");
          editOptionInsideDiv.setAttribute("class", "edit-option-inside-div");
          div.append(editOptionInsideDiv);

          let chatEditdiv = document.createElement("div");
          chatEditdiv.setAttribute("class", "edit-option-div");
          chatEditdiv.setAttribute("id", senders["chatId"]);
          editOptionInsideDiv.append(chatEditdiv);

          let editFa = document.createElement("i");
          editFa.setAttribute("class", "bi bi-pencil-square");
          editFa.setAttribute("id", senders["chatkey"]);
          chatEditdiv.append(editFa);

          let deleteFa = document.createElement("i");
          deleteFa.setAttribute("class", "bi bi-trash");
          deleteFa.setAttribute("id", senders["chatkey"]);
          chatEditdiv.append(deleteFa);

          document.querySelector(".right-side-container").append(chatDivUser);
        } else {
          console.log("friends");
          let chatDivUser = document.createElement("div");
          chatDivUser.setAttribute("class", "chat-div-for-user");

          let chatUserInsideDiv = document.createElement("div");
          chatUserInsideDiv.setAttribute("class", "chat-friends-inside-div");
          chatDivUser.append(chatUserInsideDiv);

          let chatDiv = document.createElement("div");
          chatDiv.setAttribute("class", "chat-div");
          chatUserInsideDiv.append(chatDiv);

          let chatInsideDiv = document.createElement("div");
          chatInsideDiv.setAttribute("class", "chat-inside-div");
          chatDiv.append(chatInsideDiv);

          let userProfileDiv = document.createElement("div");
          userProfileDiv.setAttribute("class", "user-profile-div");
          chatInsideDiv.append(userProfileDiv);

          let usrImage = document.createElement("img");
          usrImage.setAttribute("alt", "chat-image");
          usrImage.setAttribute("class", "chatter-image");
          usrImage.setAttribute("src", senders["chatSenderImage"]);
          userProfileDiv.append(usrImage);

          let chatContentTimeDiv = document.createElement("div");
          chatContentTimeDiv.setAttribute("class", "chat-content-time-div");
          chatInsideDiv.append(chatContentTimeDiv);

          let chatContentTimeInsideDiv = document.createElement("div");
          chatContentTimeInsideDiv.setAttribute(
            "class",
            "chat-content-time-inside-div"
          );
          chatContentTimeDiv.append(chatContentTimeInsideDiv);

          let chatContentDiv = document.createElement("div");
          chatContentDiv.setAttribute("class", "chat-content-div");
          chatContentTimeInsideDiv.append(chatContentDiv);

          let chatContent = document.createElement("p");
          chatContent.setAttribute("class", "chat-content");
          chatContent.innerHTML = senders["chat"];
          chatContentDiv.append(chatContent);

          let chatTimeDiv = document.createElement("div");
          chatTimeDiv.setAttribute("class", "chat-time-div");
          chatContentTimeInsideDiv.append(chatTimeDiv);

          let timePara = document.createElement("p");
          timePara.setAttribute("class", "time-para");
          timePara.innerHTML = senders["chatTime"];
          chatTimeDiv.append(timePara);

          document.querySelector(".right-side-container").append(chatDivUser);
        }
      }
      // Scroll to the bottom of the chat container
      const chatContainer = document.querySelector(".right-side-container");
      chatContainer.scrollTop = chatContainer.scrollHeight;
    });
  }
}

// Deleting the unread count if the user saw the chat message
