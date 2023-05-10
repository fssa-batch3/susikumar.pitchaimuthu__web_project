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

// console.log(database);

let firstParent = document.querySelector(".chat-input-option-div");

async function setData(userReceiver) {
  let chatReceiverId = userReceiver;
  let chatMessage = document.querySelector("#chat-input").value.trim();
  console.log(chatMessage);

  let userName = findUser["userName"];
  console.log(userName);

  let personId = findUser["userId"];

  let chatTime = moment().format("LT");
  let dateChat = moment().format("l");
  let chatId = Date.now();

  // Generate a new unique key using push()
  let chatRef = push(ref(database, "freshchat/"));

  let chatData = {
    chatPerson: userName,
    chat: chatMessage,
    chatTime: chatTime,
    chatReceiverId: chatReceiverId,
    chatDate: dateChat,
    chatterId: personId,
    chatId: chatId,
    chatSenderImage: findUser["avatarUrl"],
    isRead: false,
  };

  try {
    await set(chatRef, chatData);

    console.log("Data updated successfully!");
    // Proceed with further actions or data retrieval here
  } catch (error) {
    console.error("Error updating data:", error);
  }
  document.querySelector("#chat-input").value = "";
}

// Attach the click event listener to the document object using event delegation
firstParent.addEventListener("click", async function (event) {
  let target = event.target;

  console.log(target);

  let userReceiver = target.id;
  // Check if the event target is the chat-submit button inside the chat-submit-button-div
  if (target.matches(".submit-span")) {
    try {
      await setData(userReceiver);
      console.log("Data set successfully");
    } catch (error) {
      console.error(error);
    }
  }
});
