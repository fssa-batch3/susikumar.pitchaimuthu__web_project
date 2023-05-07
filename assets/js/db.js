// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

import {
  getDatabase,
  set,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByvONF3f6-tLWrigL42gKw2hGQxtbmYWc",
  authDomain: "freshchat-28154.firebaseapp.com",
  databaseURL: "https://freshchat-28154-default-rtdb.firebaseio.com",
  projectId: "freshchat-28154",
  storageBucket: "freshchat-28154.appspot.com",
  messagingSenderId: "469786534443",
  appId: "1:469786534443:web:ab0252cf738142d649806e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let database = getDatabase();

console.log(database);

export default database;

// getting data function from the database
// let firebaseDatabaseData = [];
// function getData() {
//   onValue(ref(database, `freshchat/`), (snapshot) => {
//     firebaseDatabaseData = Object.values(snapshot.val());
//     console.log(firebaseDatabaseData[0]["chat"]);
//     // Element creatin for the chat elment
//     console.log(firebaseDatabaseData);

//     for (let j = 0; j < firebaseDatabaseData.length; j++) {
//       if (firebaseDatabaseData[j]["chatSenderId"] == findUser["userId"]) {
//         let chatDivUser = document.createElement("div");
//         chatDivUser.setAttribute("class", "chat-div-for-user");

//         let chatUserInsideDiv = document.createElement("div");
//         chatUserInsideDiv.setAttribute("class", "chat-user-inside-div");
//         chatDivUser.append(chatUserInsideDiv);

//         let chatDiv = document.createElement("div");
//         chatDiv.setAttribute("class", "chat-div");
//         chatUserInsideDiv.append(chatDiv);

//         let chatInsideDiv = document.createElement("div");
//         chatInsideDiv.setAttribute("class", "chat-inside-div");
//         chatDiv.append(chatInsideDiv);

//         let chatContentTimeDiv = document.createElement("div");
//         chatContentTimeDiv.setAttribute("class", "chat-content-time-div");
//         chatInsideDiv.append(chatContentTimeDiv);

//         let chatContentTimeInsideDiv = document.createElement("div");
//         chatContentTimeInsideDiv.setAttribute(
//           "class",
//           "chat-content-time-inside-div"
//         );
//         chatContentTimeDiv.append(chatContentTimeInsideDiv);

//         let chatContentDiv = document.createElement("div");
//         chatContentDiv.setAttribute("class", "chat-content-div");
//         chatContentTimeInsideDiv.append(chatContentDiv);

//         let chatContent = document.createElement("p");
//         chatContent.setAttribute("class", "chat-content");
//         chatContent.innerHTML = firebaseDatabaseData[j]["chat"];
//         chatContentDiv.append(chatContent);

//         let chatTimeDiv = document.createElement("div");
//         chatTimeDiv.setAttribute("class", "chat-time-div");
//         chatContentTimeInsideDiv.append(chatTimeDiv);

//         let timePara = document.createElement("p");
//         timePara.setAttribute("class", "time-para");
//         timePara.innerHTML = firebaseDatabaseData[j]["chatTime"];
//         chatTimeDiv.append(timePara);

//         let userProfileDiv = document.createElement("div");
//         userProfileDiv.setAttribute("class", "user-profile-div");
//         chatInsideDiv.append(userProfileDiv);

//         let usrImage = document.createElement("img");
//         usrImage.setAttribute("alt", "chat-image");
//         usrImage.setAttribute("class", "chatter-image");
//         usrImage.setAttribute("src", findUser["avatarUrl"]);
//         userProfileDiv.append(usrImage);

//         document.querySelector(".right-side-container").append(chatDivUser);
//       } else {
//         console.log("friends");
//         let chatDivUser = document.createElement("div");
//         chatDivUser.setAttribute("class", "chat-div-for-user");

//         let chatUserInsideDiv = document.createElement("div");
//         chatUserInsideDiv.setAttribute("class", "chat-friends-inside-div");
//         chatDivUser.append(chatUserInsideDiv);

//         let chatDiv = document.createElement("div");
//         chatDiv.setAttribute("class", "chat-div");
//         chatUserInsideDiv.append(chatDiv);

//         let chatInsideDiv = document.createElement("div");
//         chatInsideDiv.setAttribute("class", "chat-inside-div");
//         chatDiv.append(chatInsideDiv);

//         let userProfileDiv = document.createElement("div");
//         userProfileDiv.setAttribute("class", "user-profile-div");
//         chatInsideDiv.append(userProfileDiv);

//         let usrImage = document.createElement("img");
//         usrImage.setAttribute("alt", "chat-image");
//         usrImage.setAttribute("class", "chatter-image");
//         usrImage.setAttribute(
//           "src",
//           firebaseDatabaseData[j]["chatReceiverImage"]
//         );
//         userProfileDiv.append(usrImage);

//         let chatContentTimeDiv = document.createElement("div");
//         chatContentTimeDiv.setAttribute("class", "chat-content-time-div");
//         chatInsideDiv.append(chatContentTimeDiv);

//         let chatContentTimeInsideDiv = document.createElement("div");
//         chatContentTimeInsideDiv.setAttribute(
//           "class",
//           "chat-content-time-inside-div"
//         );
//         chatContentTimeDiv.append(chatContentTimeInsideDiv);

//         let chatContentDiv = document.createElement("div");
//         chatContentDiv.setAttribute("class", "chat-content-div");
//         chatContentTimeInsideDiv.append(chatContentDiv);

//         let chatContent = document.createElement("p");
//         chatContent.setAttribute("class", "chat-content");
//         chatContent.innerHTML = firebaseDatabaseData[j]["chat"];
//         chatContentDiv.append(chatContent);

//         let chatTimeDiv = document.createElement("div");
//         chatTimeDiv.setAttribute("class", "chat-time-div");
//         chatContentTimeInsideDiv.append(chatTimeDiv);

//         let timePara = document.createElement("p");
//         timePara.setAttribute("class", "time-para");
//         timePara.innerHTML = firebaseDatabaseData[j]["chatTime"];
//         chatTimeDiv.append(timePara);

//         document.querySelector(".right-side-container").append(chatDivUser);
//       }
//     }
//   });
// }
// getData();

// console.log(database);

let firstParent = document.querySelector(".chat-input-option-div");

async function setData(userReceiver) {
  let chatReceiverId = userReceiver;
  let chatMessage = document.querySelector("#chat-input").value.trim();
  console.log(chatMessage);

  let userName = findUser["userName"];
  console.log(userName);

  let personId = findUser["userId"];

  let chatId = moment().format("LT");
  let dateChat = moment().format("l");

  // Generate a new unique key using push()
  let chatRef = push(ref(database, "freshchat/"));

  let chatData = {
    chatPerson: userName,
    chat: chatMessage,
    chatTime: chatId,
    chatReceiverId: chatReceiverId,
    chatDate: dateChat,
    chatterId: personId,
    chatSenderImage: findUser["avatarUrl"],
  };

  try {
    await set(chatRef, chatData);
    console.log("Data updated successfully!");
    // Proceed with further actions or data retrieval here
  } catch (error) {
    console.error("Error updating data:", error);
  }
}

// Attach the click event listener to the document object using event delegation
firstParent.addEventListener("click", function (event) {
  let target = event.target;

  console.log(target);

  let userReceiver = target.id;
  // Check if the event target is the chat-submit button inside the chat-submit-button-div
  if (target.matches(".submit-span")) {
    setData(userReceiver);
  }
});
