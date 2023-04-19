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
}

let databaseData = firebase.database().ref("freshchat");
databaseData.once("value").then(function (snapshot) {
  let data = snapshot.val();
  console.log(data);

  for (let objKey in data) {
    chatDataArray.push(data[objKey]);
  }
  console.log(chatDataArray);

  for (let i = 0; i < chatDataArray.length; i++) {}

  // Element creatin for the chat elment

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
  chatInsideDiv.append(chatContentTimeInsideDiv);

  let chatContentDiv = document.createElement("div");
  chatContentDiv.setAttribute("class", "chat-content-div");
  chatContentTimeInsideDiv.append(chatContentDiv);

  let chatContent = document.createElement("p");
  chatContent.setAttribute("class", "chat-content");
  chatContentDiv.append(chatContent);

  let chatTimeDiv = document.createElement("div");
  chatTimeDiv.setAttribute("class", "chat-time-div");
  chatContentTimeInsideDiv.append(chatTimeDiv);

  let timePara = document.createElement("p");
  timePara.setAttribute("class", "time-para");
  chatTimeDiv.append(timePara);

  let userProfileDiv = document.createElement("div");
  userProfileDiv.setAttribute("class", "user-profile-div");
  chatInsideDiv.append(userProfileDiv);

  let usrImage = document.createElement("img");
  usrImage.setAttribute("alt", "chat-image");
  usrImage.setAttribute("class", "chatter-image");
  usrImage.setAttribute("src", "");
  userProfileDiv.append(usrImage);

  document.querySelector(".right-side-container").append(chatDivUser);
});
console.log(chatDataArray);
