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
