let chatDataArray = [];

function getUser(event) {
  console.log(event);
  let chatReceiver = event;

  let chatMessage = document.querySelector("#chat-input").value.trim();
  console.log(chatMessage);

  let userName = findUser["userName"];
  console.log(userName);

  let personId = findUser["userId"];

  let db = firebase.database().ref("freshchat");
  let chatId = moment().format("LT");
  let dateChat = moment().format("l");

  //  message sending to the firebase set function

  db.push().set({
    chatPerson: userName,
    chat: chatMessage,
    chatTime: chatId,
    chatReceiverId: chatReceiver,
    chatDate: dateChat,
    chatterId: personId,
  });

  // Get data from the database

  let databaseData = firebase.database().ref("freshchat");
  databaseData.once("value").then(function (snapshot) {
    let data = snapshot.val();
    console.log(data);

    for (let objKey in data) {
      chatDataArray.push(data[objKey]);
    }
    console.log(chatDataArray);

    // Element creatin for the chat elment
  });
}

console.log(chatDataArray);
