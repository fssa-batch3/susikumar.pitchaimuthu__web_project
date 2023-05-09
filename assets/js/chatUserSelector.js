// importing firebase database data
import database from "./db.js";

import {
  onValue,
  ref,
  getDatabase,
  child,
  remove,
  update,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

console.log(database);

let firebaseDatabaseData = [];

onValue(ref(database, `freshchat/`), (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    // Get the key and value of each child node

    // firebaseDatabaseData = Object.values(snapshot.val());

    const key = childSnapshot.key;
    console.log(key);
    // let chatPushArray = [];

    const value = childSnapshot.val();

    let chatKey = {
      chatkey: key,
    };

    let chatAssign = Object.assign(value, chatKey);

    firebaseDatabaseData.push(chatAssign);

    console.log(firebaseDatabaseData);
  });
});

// writing a function get a indidual user by clicking their respective chat box

let chatPersonCard = document.querySelectorAll(".user-card-container");
console.log(chatPersonCard);

let userSelectId;

for (let i = 0; i < chatPersonCard.length; i++) {
  chatPersonCard[i].addEventListener("click", function (chatEvent) {
    chatEvent.preventDefault();

    userSelectId = chatEvent.target.id;
    console.log(userSelectId);

    let userSelectionParse = JSON.parse(localStorage.getItem("register"));

    let userSelectionIdFind = userSelectionParse.find(
      (e) => e["userId"] == userSelectId
    );

    console.log(userSelectionIdFind);

    let userChatters = [];

    if (localStorage.getItem("userChatSelectors") !== null) {
      userChatters = JSON.parse(localStorage.getItem("userChatSelectors"));
    }

    userChatters.push(userSelectionIdFind);
    localStorage.setItem("userChatSelectors", JSON.stringify(userChatters));

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
    chatPersonContentDiv.setAttribute("class", "chat-person-name-lastseen-div");
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

    if (firebaseDatabaseData == null) {
      return;
    }

    console.log("run");

    let sender = [];

    for (let firebaseData of firebaseDatabaseData) {
      if (
        (firebaseData["chatterId"] == findUser["userId"] &&
          firebaseData["chatReceiverId"] == userSelectId) ||
        (firebaseData["chatReceiverId"] == findUser["userId"] &&
          firebaseData["chatterId"] == userSelectId)
      ) {
        sender.push(firebaseData);
      }
    }
    console.log(userSelectId);
    console.log("susi");
    console.log(sender);

    // adding read true to the all chats

    let chageChat = document.querySelector(".right-side-container");
    console.log(chageChat);

    if (chageChat.hasChildNodes()) {
      let chatFistchild = document.querySelectorAll(".chat-div-for-user");

      for (let firstChild of chatFistchild) {
        firstChild.remove();
      }
    }

    console.log(sender);

    for (let senders of sender) {
      if (
        senders["chatReceiverId"] == userSelectId &&
        senders["chatterId"] == findUser["userId"]
      ) {
        let chatDivUser = document.createElement("div");
        chatDivUser.setAttribute("class", "chat-div-for-user");

        let chatUserInsideDiv = document.createElement("div");
        chatUserInsideDiv.setAttribute("class", "chat-user-inside-div");
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
        div.setAttribute("id", senders["chatId"]);
        // div.setAttribute("onmouseenter", "editOptionMouseOver(this.id)");
        // div.setAttribute("onmouseleave", "editoptionMouseOut()");
        chatContentTimeDiv.prepend(div);

        let chatEditdiv = document.createElement("div");
        chatEditdiv.setAttribute("class", "edit-option-div");
        chatEditdiv.setAttribute("id", senders["chatId"]);
        div.append(chatEditdiv);

        let editFa = document.createElement("i");
        editFa.setAttribute("class", "bi bi-pencil-square");
        editFa.setAttribute("id", senders["chatkey"]);
        chatEditdiv.append(editFa);

        let deleteFa = document.createElement("i");
        deleteFa.setAttribute("class", "bi bi-trash");
        deleteFa.setAttribute("id", senders["chatkey"]);
        // deleteFa.setAttribute("onclick", "chatDelete(this.id)");
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

    // // chat Edit input feild

    // document.querySelector(".right-side-container").append(div);
  });
}

// function deleteChatMessage(self) {
//   let messageId = self.getAttribute("id");
//   console.log(messageId);

//   database.ref("freshchat").child(messageId).remove();
// }

let chatContainer = document.querySelector(".right-side-container");
// console.log(trashButon);

// chat delete function
async function chatDelete(self) {
  console.log(self);
  // alert("Are you sure want to delete message");
  let messageId = self;

  console.log(messageId);

  let secondDatabase = getDatabase();

  console.log(secondDatabase);

  const objectRef = ref(secondDatabase, "freshchat");
  const objectKey = messageId; // Replace with the key of the object you want to delete

  // Navigate to the object you want to delete using the child() function
  const objectToDeleteRef = child(objectRef, objectKey);

  // Call remove() on the reference to delete the object
  remove(objectToDeleteRef)
    .then(() => {
      console.log("Object successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing object: ", error);
    });
}

// chat delete button add eventlistner function

chatContainer.addEventListener("click", async function (event) {
  let target = event.target;
  console.log(target);

  let currentChat = target.id;
  console.log(currentChat);

  if (target.matches(".bi-trash")) {
    try {
      await chatDelete(currentChat);
      console.log("Chat successfully got");
    } catch (error) {
      console.error(error);
    }
  }
});

// chat update function

async function chatUpdate(upsi) {
  console.log(upsi);

  let userInput = prompt("Please enter your update:", "");
  console.log(userInput);

  let updateKey = upsi;

  let thirdDatabase = getDatabase();
  let nodeRef = ref(thirdDatabase, "freshchat/" + updateKey);

  console.log(nodeRef);

  // let objectRef = ref(nodeRef, updateKey);

  // console.log(objectRef);

  let chatUpdateObject = {
    chat: userInput,
  };

  // Use the update() method to update the data at the specified node
  try {
    await update(nodeRef, chatUpdateObject);
    console.log("Data updated successfully");
  } catch (error) {
    console.log("Data update failed: ", error);
  }
}

// chat update function add eventlistner

chatContainer.addEventListener("click", async function (event) {
  let target = event.target;
  console.log(target);

  let currentChat = target.id;
  console.log(currentChat);

  if (target.matches(".bi-pencil-square")) {
    try {
      await chatUpdate(currentChat);
      console.log("Chat update element successfully got");
    } catch (error) {
      console.error(error);
    }
  }
});
