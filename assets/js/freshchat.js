// writing a function get a indidual user by clicking their respective chat box

function userSelector(userSelect) {
  console.log(userSelect);
  let userSelectionParse = JSON.parse(localStorage.getItem("register"));

  let userSelectionIdFind = userSelectionParse.find(
    (e) => e["userId"] == userSelect
  );

  console.log(userSelectionIdFind);

  let userChatters = [];

  if (localStorage.getItem("userChatSelectors") !== null) {
    userChatters = JSON.parse(localStorage.getItem("userChatSelectors"));
  }

  userChatters.push(userSelectionIdFind);
  localStorage.setItem("userChatSelectors", JSON.stringify(userChatters));

  let checkUserData = document.querySelector(".user-profile-show-div");
  console.log(checkUserData);

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

  let inputForm = document.createElement("form");
  inputForm.setAttribute("id", "chat-input-form");

  let emojiDiv = document.createElement("div");
  emojiDiv.setAttribute("class", "emoji-div");
  // emojiDiv.setAttribute("onClick", "setShowPicker()");
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

  let emojiShowDiv = document.createElement("ul");
  emojiShowDiv.setAttribute("class", "emoji-div-for");
  emojiDivContainer.append(emojiShowDiv);

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
  chatSubmitDiv.setAttribute("id", userSelectionIdFind["userId"]);
  chatSubmitDiv.setAttribute("onclick", "chatsend(this.id)");
  inputForm.append(chatSubmitDiv);

  let sendButton = document.createElement("button");
  sendButton.setAttribute("id", "chat-submit");
  sendButton.setAttribute("type", "submit");
  chatSubmitDiv.append(sendButton);

  let Span = document.createElement("span");
  Span.setAttribute("class", "submit-span");
  Span.innerHTML = "Submit";
  sendButton.append(Span);

  let sendI = document.createElement("i");
  sendI.setAttribute("class", "send-i");
  sendButton.append(sendI);

  document.querySelector(".chat-input-option-div").append(inputForm);

  // checking the chats for to show the respective chat to respective person

  let senderFind = JSON.parse(localStorage.getItem("senderMessage"));
  console.log(senderFind);

  if (senderFind == null) {
    return;
  }

  let sender = senderFind.filter(
    (senderId) => senderId["chatter_id"] == userSelect
  );
  console.log(sender);

  let chageChat = document.querySelector(".right-side-container");
  console.log(chageChat);

  if (chageChat.hasChildNodes()) {
    let chatFistchild = document.querySelectorAll(".reply-msg");

    for (let i = 0; i < chatFistchild.length; i++) {
      chatFistchild[i].remove();
    }
  }

  for (let i = 0; i < sender.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "reply-msg");
    div.setAttribute("id", sender[i]["chatId"]);
    div.setAttribute("onmouseenter", "editOptionMouseOver(this.id)");
    div.setAttribute("onmouseleave", "editoptionMouseOut()");

    let replyChatPara = document.createElement("p");
    replyChatPara.setAttribute("id", "reply-msg-chat");
    replyChatPara.innerHTML = sender[i]["chat"];
    div.append(replyChatPara);

    let replyChatTime = document.createElement("p");
    replyChatTime.setAttribute("class", "reply-msg-time");
    replyChatTime.innerText = sender[i]["timing"];
    div.append(replyChatTime);

    let chatidPara = document.createElement("p");
    chatidPara.setAttribute("class", "chatId");
    chatidPara.innerText = sender[i]["chatId"];
    div.append(chatidPara);

    let chatEditdiv = document.createElement("div");
    chatEditdiv.setAttribute("class", "edit-option-div");
    chatEditdiv.setAttribute("id", sender[i]["chatId"]);
    div.append(chatEditdiv);

    let emojiFa = document.createElement("i");
    emojiFa.setAttribute("class", "bi bi-emoji-heart-eyes-fill");
    emojiFa.setAttribute("onclick", "emoji(this.id)");
    chatEditdiv.append(emojiFa);

    let editFa = document.createElement("i");
    editFa.setAttribute("class", "bi bi-pen-fill");
    editFa.setAttribute("id", sender[i]["chatId"]);
    editFa.setAttribute("onclick", "chatEditInput(this.id)");
    chatEditdiv.append(editFa);

    let deleteFa = document.createElement("i");
    deleteFa.setAttribute("class", "bi bi-trash");
    deleteFa.setAttribute("id", sender[i]["chatId"]);
    deleteFa.setAttribute("onclick", "deleteChat(this.id)");
    chatEditdiv.append(deleteFa);

    // chat Edit input feild

    document.querySelector(".right-side-container").append(div);
  }

  console.log(userSelectionIdFind["userId"]);

  // send message function
}

function chatsend(event) {
  let arr = [];

  let chattters = JSON.parse(localStorage.getItem("userChatSelectors"));

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
      chatter_id: chattters[chattters.length - 1]["userId"],
    };

    console.log(chatObj);
    arr.push(chatObj);

    let str = JSON.stringify(arr);
    console.log(str);
    localStorage.setItem("senderMessage", str);
  }
}

// mouseOver eventListener for delete, update chat options

function editOptionMouseOver(mouseOverclass) {
  console.log(mouseOverclass);
  let editOptionDiv = document.querySelectorAll(".edit-option-div");

  let curentElement;

  for (let i = 0; i < editOptionDiv.length; i++) {
    if (editOptionDiv[i].id == mouseOverclass) {
      curentElement = editOptionDiv[i];
      console.log(curentElement);
    }
  }
  if ((curentElement.style.display = "none")) {
    curentElement.style.display = "block";
  }
}

function editoptionMouseOut() {
  let editOptionDiv = document.querySelectorAll(".edit-option-div");

  for (let i = 0; i < editOptionDiv.length; i++) {
    if ((editOptionDiv[i].style.display = "block")) {
      editOptionDiv[i].style.display = "none";
    }
  }
}

// chat user one of the crud of update and delete

// Chat edit option dynamic element creations

function chatEditInput(e) {
  console.log(e);

  let currentDelete;

  let allChats = JSON.parse(localStorage.getItem("senderMessage"));

  for (let i = 0; i < allChats.length; i++) {
    if (allChats[i]["chatId"] == e) {
      currentDelete = allChats[i];
      console.log(currentDelete);
    }
  }

  console.log(currentDelete);

  let eidtInputArea = document.querySelector("#chat-input");

  eidtInputArea.value = currentDelete["chat"];

  let editButton = document.querySelector("#chat-submit");

  // editButton.addEventListener("onclick", () => {
  //   let editChatObject = {
  //     chatEdit: eidtInputArea.value,
  //   };

  //   let editObjectAssaign = Object.assign(currentDelete, chatEditObject);

  //   console.log(editObjectAssaign);
  // });

  // let setInputId = document.querySelector(".edit-option-div");
  // // console.log(setInputId);

  // let chatEditInputDiv = document.createElement("div");
  // chatEditInputDiv.setAttribute("id", "chat-input-container");
  // setInputId.append(chatEditInputDiv);

  // let chatEditForm = document.createElement("form");
  // chatEditForm.setAttribute("id", "chat-edit-form");
  // chatEditInputDiv.append(chatEditForm);

  // let chatEditInputArea = document.createElement("input");
  // chatEditInputArea.setAttribute("id", "chat-edit-input-area");
  // chatEditForm.append(chatEditInputArea);

  // let chatEditButton = document.createElement("button");
  // chatEditButton.setAttribute("id", "chatEditButton");
  // chatEditButton.setAttribute("onclick", "chatEditForm()");
  // chatEditButton.innerText = "Send";
  // chatEditForm.append(chatEditButton);
}

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

// delete chat

function deleteChat(d) {
  // console.log(d);

  let deleteDataParse = JSON.parse(localStorage.getItem("senderMessage"));
  console.log(deleteDataParse);

  let deleteFind = deleteDataParse.find((e) => e.chatId == d);
  console.log(deleteFind);

  let deleteIndexFind = deleteDataParse.indexOf(deleteFind);
  console.log(deleteIndexFind);

  let deleteChat = confirm("Are sure to Delete your account in Fresh Nest?");

  if (deleteChat !== true) {
    return;
  } else {
    deleteDataParse.splice(deleteIndexFind, 1);
    localStorage.setItem("senderMessage", JSON.stringify(deleteDataParse));
    location.reload();
  }
}

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
