const reelProfile = [
  { reelImage: "../assets/images/still/Snaps/1.jfif", alt: "user-image" },
];

for (let i = 0; i < reelProfile.length; i++) {
  const trendingBirdDiv = document.createElement("div");
  trendingBirdDiv.setAttribute("class", "reel-member-div");

  const trendingBirdDivImage = document.createElement("img");
  trendingBirdDivImage.setAttribute("class", "reel-member-div-image");
  trendingBirdDivImage.setAttribute("src", reelProfile[i].reelImage);
  trendingBirdDiv.append(trendingBirdDivImage);

  document.querySelector(".reel-container").append(trendingBirdDiv);
}

// let user profile data using the getItem

let userDetailsForChatBox = JSON.parse(localStorage.getItem("user_data"));
console.log(userDetailsForChatBox);

let infoRegis = JSON.parse(window.localStorage.getItem("register"));
// console.log(info);

const foundChatter = infoRegis.find(function (what) {
  let thinkEmail = what["Email"];
  if (userDetailsForChatBox[0]["Email"] == thinkEmail) {
    return true;
  }
});

console.log(foundChatter);
// user chat box div

let sender = JSON.parse(localStorage.getItem("senderMessage"));

//

// first div
const div = document.createElement("div");
div.setAttribute("class", "members");
div.setAttribute("id", foundChatter["id"]);
div.setAttribute("onclick", "userSelector(this.id)");

// second div

const image_div = document.createElement("div");
image_div.setAttribute("class", "image-name");
// document.querySelector(".members").append(image_div);
div.append(image_div);

// third div

const image = document.createElement("div");
image.setAttribute("class", "image");
// document.querySelector(".image-name").append(image);
image_div.append(image);

// image attribute

const img = document.createElement("img");
img.setAttribute("class", "member-image");
// img.setAttribute("src", userChatBox["image"]);
// document.querySelector(".image").append(img);
image.append(img);

// name div

const nameOne = document.createElement("div");
nameOne.setAttribute("class", "name");
// document.querySelector(".image-name").append(name);
image_div.append(nameOne);

// name para attribute

const para = document.createElement("p");
para.innerText = foundChatter["userName"];
// document.querySelector(".name").append(para);
nameOne.append(para);

// chat para attribute

const paragraph = document.createElement("p");
paragraph.innerText = sender[0]["chat"];
// document.querySelector(".name").append(paragraph);
nameOne.append(paragraph);

// Last seen div

const timeAgo = document.createElement("div");
timeAgo.setAttribute("id", "time-ago");
// document.querySelector(".members").append(timeAgo);
div.append(timeAgo);

// Last seen paragraph

const time = document.createElement("p");
// time.innerText = userChatBox["lastseen"];
// document.querySelector(".time-ago").append(time);
timeAgo.append(time);

document.querySelector(".chat-member-container").append(div);

// chatuser select option

function userSelector(userSelect) {
  console.log(userSelect);

  let userSelectionParse = JSON.parse(localStorage.getItem("register"));

  let userSelectionIdFind = userSelectionParse.find((e) => e.id == userSelect);
  console.log(userSelectionIdFind);

  console.log(userSelectionIdFind["userName"]);

  let checkUserData = document.querySelector(".user-name-lastseen-div");

  if (checkUserData !== null) {
    return;
  } else {
    // Elelements are created for showing chat user Datails in the top of the chat

    let checkUserBox = document.querySelector(".user-name-lastseen-div");

    let userNameDiv = document.createElement("div");
    userNameDiv.setAttribute("class", "user-name-lastseen-div");

    document.querySelector(".chat-member-option-div").append(userNameDiv);

    let chatPersonDiv = document.createElement("div");
    chatPersonDiv.setAttribute("class", "chat-person-profile-div");
    userNameDiv.append(chatPersonDiv);

    let chatUserImage = document.createElement("img");
    chatUserImage.setAttribute("class", "chat-user-image");
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
    document
      .querySelector(".chat-member-option-div")
      .append(profileOptionContainer);

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
  }
  //  function chatsend(event)
}

// chat user showing container

// chat sender message popup javascript

function chatsend(event) {
  let arr = [];

  if (localStorage.getItem("senderMessage") != null) {
    arr = JSON.parse(localStorage.getItem("senderMessage"));
  }

  const chat = document.getElementById("chat-input").value;
  console.log(chat);

  if (chat === "" || chat === null) {
    return;
  } else {
    const d = new Date();
    console.log(d);
    let jsonTime = (document.getElementById("time-ago").innerHTML =
      d.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }));

    let chatId = Date.now();

    let chatObj = {
      chat: chat,
      timing: jsonTime,
      chatId: chatId,
    };

    console.log(chatObj);
    arr.push(chatObj);

    let str = JSON.stringify(arr);
    console.log(str);
    localStorage.setItem("senderMessage", str);
  }
}

// send the message fro the chat sender message

for (let i = 0; i < sender.length; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "reply-msg");

  const replyChatPara = document.createElement("p");
  replyChatPara.setAttribute("id", "reply-msg-chat");
  replyChatPara.innerText = sender[i]["chat"];
  div.append(replyChatPara);

  const replyChatTime = document.createElement("p");
  replyChatTime.setAttribute("class", "reply-msg-time");
  replyChatTime.innerText = sender[i]["timing"];
  div.append(replyChatTime);

  let chatidPara = document.createElement("p");
  chatidPara.setAttribute("class", "chatId");
  chatidPara.innerText = sender[i]["chatId"];
  div.append(chatidPara);

  let chatEditdiv = document.createElement("div");
  chatEditdiv.setAttribute("class", "edit-option-div");
  div.append(chatEditdiv);

  let emojiFa = document.createElement("i");
  emojiFa.setAttribute("class", "bi bi-emoji-heart-eyes-fill");
  emojiFa.setAttribute("onclick", "emoji(this.id)");
  chatEditdiv.append(emojiFa);

  let editFa = document.createElement("i");
  editFa.setAttribute("class", "bi bi-pen-fill");
  editFa.setAttribute("id", sender[i]["chatId"]);
  editFa.setAttribute("onclick", "updateChat(this.id)");
  chatEditdiv.append(editFa);

  let deleteFa = document.createElement("i");
  deleteFa.setAttribute("class", "bi bi-trash");
  deleteFa.setAttribute("id", sender[i]["chatId"]);
  deleteFa.setAttribute("onclick", "deleteChat(this.id)");
  chatEditdiv.append(deleteFa);

  // chat Edit input feild

  document.querySelector(".right-side-container").append(div);
}

// edit data getting through this function

function chatEditForm(eventChat) {
  let EditChatArray = [];

  if (localStorage.getItem("editChatData") !== null) {
    EditChatArray = JSON.parse(localStorage.getItem("editChatData"));
  }

  let getEditChat = document
    .querySelector("#chat-edit-input-area")
    .value.trim();

  if (getEditChat == "" || getEditChat == null) {
    return;
  } else {
    console.log(getEditChat);

    let chatEditObject = {
      chat: getEditChat,
    };
    console.log(chatEditObject);
    EditChatArray.push(chatEditObject);
    let EditDataStringify = JSON.stringify(EditChatArray);
    console.log(EditDataStringify);

    let EdiTDataStoreLocal = localStorage.setItem(
      "editChatData",
      EditDataStringify
    );
  }
}

// mouseOver function for chat options

let chatcontent = document.querySelector(".reply-msg");

chatcontent.addEventListener("mouseover", () => {
  let editOptionDiv = document.querySelector(".edit-option-div");
  if (editOptionDiv.style.disply == "none") {
    editOptionDiv.style.disply == "block";
  }
});

// update chat option

function updateChat(e) {
  console.log(e);

  let chatDataParse = JSON.parse(localStorage.getItem("senderMessage"));
  console.log(chatDataParse);

  let chatIdFind = chatDataParse.find((f) => f.chatId == e);

  console.log(chatIdFind);

  chatEditInput();

  chatEditForm();

  let editChatParse = JSON.parse(localStorage.getItem("editChatData"));
  console.log(editChatParse);

  let lastEditData = editChatParse[editChatParse.length - 1];
  console.log(lastEditData);

  let assaignEditObjData = Object.assign(chatIdFind, lastEditData);
  console.log(assaignEditObjData);

  let findChatIndex = chatDataParse.indexOf(chatIdFind);
  console.log(findChatIndex);
  chatDataParse[findChatIndex] = assaignEditObjData;

  localStorage.setItem("senderMessage", JSON.stringify(chatDataParse));
  // location.reload();
}

// /*

// Chat edit option dynamic element creations

// */

// function chatEditInput() {
//   let setInputId = document.querySelector(".edit-option-div");
//   // console.log(setInputId);

//   let chatEditInputDiv = document.createElement("div");
//   chatEditInputDiv.setAttribute("id", "chat-input-container");
//   setInputId.append(chatEditInputDiv);

//   let chatEditForm = document.createElement("form");
//   chatEditForm.setAttribute("id", "chat-edit-form");
//   chatEditInputDiv.append(chatEditForm);

//   let chatEditInputArea = document.createElement("input");
//   chatEditInputArea.setAttribute("id", "chat-edit-input-area");
//   chatEditForm.append(chatEditInputArea);

//   let chatEditButton = document.createElement("button");
//   chatEditButton.setAttribute("id", "chatEditButton");
//   chatEditButton.setAttribute("onclick", "chatEditForm()");
//   chatEditButton.innerText = "Send";
//   chatEditForm.append(chatEditButton);
// }

// // delete chat

// function deleteChat(d) {
//   // console.log(d);

//   let deleteDataParse = JSON.parse(localStorage.getItem("senderMessage"));
//   console.log(deleteDataParse);

//   let deleteFind = deleteDataParse.find((e) => e.chatId == d);
//   console.log(deleteFind);

//   let deleteIndexFind = deleteDataParse.indexOf(deleteFind);
//   console.log(deleteIndexFind);

//   let deleteChat = confirm("Are sure to Delete your account in Fresh Nest?");

//   if (deleteChat !== true) {
//     return;
//   } else {
//     deleteDataParse.splice(deleteIndexFind, 1);
//     localStorage.setItem("senderMessage", JSON.stringify(deleteDataParse));
//     location.reload();
//   }
// }
