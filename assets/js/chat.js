const reelProfile = [
  { reelImage: "../assets/images/still/Snaps/1.jfif", alt: "user-image" },
];

for (let i = 0; i < reelProfile.length; i++) {
  const trendingBirdDiv = document.createElement("div");
  trendingBirdDiv.setAttribute("class", "reel-member-div");

  const trendingBirdDivImage = document.createElement("img");
  trendingBirdDivImage.setAttribute("class", "reel-member-div-image");
  // console.log(reelProfile[i]["reelImage"]);
  trendingBirdDivImage.setAttribute("src", reelProfile[i].reelImage);
  trendingBirdDiv.append(trendingBirdDivImage);

  document.querySelector(".reel-container").append(trendingBirdDiv);
}

// chat user chat box JSON details

const userChatBox = [
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Amma",
    chat: "How are you mother",
    lastseen: "1 minutes ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "My sister",
    chat: "How are you sis",
    lastseen: "10 minutes ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Naveena sri",
    chat: "Naina ma enna pantringa",
    lastseen: "1 hour ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Ramesh machi",
    chat: "Enna pantra machi",
    lastseen: "6 hours ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Logesh Bharathi",
    chat: "Enna pantra da",
    lastseen: "1 day ago",
  },

  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "kamalesh",
    chat: "hiiiii",
    lastseen: "10 day ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Gowtham",
    chat: " how are you",
    lastseen: "10 day ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Gowtham",
    chat: " how are you",
    lastseen: "10 day ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Gowtham",
    chat: " how are you",
    lastseen: "10 day ago",
  },

  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Gowtham",
    chat: " how are you",
    lastseen: "10 day ago",
  },
];

// user chat box div

for (let i = 0; i < userChatBox.length; i++) {
  // first div
  const div = document.createElement("div");
  div.setAttribute("class", "members");

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
  img.setAttribute("src", userChatBox[i]["image"]);
  // document.querySelector(".image").append(img);
  image.append(img);

  // name div

  const name = document.createElement("div");
  name.setAttribute("class", "name");
  // document.querySelector(".image-name").append(name);
  image_div.append(name);

  // name para attribute

  const para = document.createElement("p");
  para.innerText = userChatBox[i]["name"];
  // document.querySelector(".name").append(para);
  name.append(para);

  // chat para attribute

  const paragraph = document.createElement("p");
  paragraph.innerText = userChatBox[i]["chat"];
  // document.querySelector(".name").append(paragraph);
  name.append(paragraph);

  // Last seen div

  const timeAgo = document.createElement("div");
  timeAgo.setAttribute("id", "time-ago");
  // document.querySelector(".members").append(timeAgo);
  div.append(timeAgo);

  // Last seen paragraph

  const time = document.createElement("p");
  time.innerText = userChatBox[i]["lastseen"];
  // document.querySelector(".time-ago").append(time);
  timeAgo.append(time);

  document.querySelector(".chat-member-container").append(div);
}

// chat sender message popup javascript

function chatsend() {
  event.preventDefault();
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
      // timing: jsonTime,
    };

    console.log(chatObj);
    arr.push(chatObj);

    let str = JSON.stringify(arr);
    console.log(str);
    localStorage.setItem("senderMessage", str);
    location.reload();
  }
}

// send the message fro the chat sender message

let sender = JSON.parse(localStorage.getItem("senderMessage"));

// console.log(sender);

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
  emojiFa.setAttribute("onclick", "emoji()");
  chatEditdiv.append(emojiFa);

  let editFa = document.createElement("i");
  editFa.setAttribute("class", "bi-pen-fill");
  editFa.setAttribute("id", sender[i]["chatId"]);
  editFa.setAttribute("onclick", "updateChat(this.id)");
  chatEditdiv.append(editFa);

  let deleteFa = document.createElement("i");
  deleteFa.setAttribute("class", "bi-trash");
  deleteFa.setAttribute("onclick", "deleteChat()");
  chatEditdiv.append(deleteFa);

  // chat Edit input feild

  document.querySelector(".right-side-container").append(div);
}

// edit data getting through this function

function chatEditForm() {
  event.preventDefault();
  let EditChatArray = [];
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

// update chat option

function updateChat(e) {
  console.log(e);
  event.preventDefault();
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

function chatEditInput() {
  let setInputId = document.querySelector(".edit-option-div");
  // console.log(setInputId);

  let chatEditInputDiv = document.createElement("div");
  chatEditInputDiv.setAttribute("id", "chat-input-container");
  setInputId.append(chatEditInputDiv);

  let chatEditForm = document.createElement("form");
  chatEditForm.setAttribute("id", "chat-edit-form");
  chatEditInputDiv.append(chatEditForm);

  let chatEditInputArea = document.createElement("input");
  chatEditInputArea.setAttribute("id", "chat-edit-input-area");
  chatEditForm.append(chatEditInputArea);

  let chatEditButton = document.createElement("button");
  chatEditButton.setAttribute("id", "chatEditButton");
  chatEditButton.setAttribute("onclick", "chatEditForm()");
  chatEditButton.innerText = "Send";
  chatEditForm.append(chatEditButton);
}
