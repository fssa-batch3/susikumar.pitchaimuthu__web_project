// let sebdButton = document.querySelector("#chat-input");

// if (sebdButton !== null) {
//   sebdButton.addEventListener("keyup", (event) => {
//     if (event.keyCode === 13) {
//       // 13 is the keycode for the Enter key
//       // Call your function here
//       getUser();
//     }
//   });
// }

let userFriends = JSON.parse(localStorage.getItem("userFriends"));
console.log(userFriends);

function getUser(event) {
  console.log(event);

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

    let chatDate = moment().format("l");

    let chatId = Date.now();

    // creating function to set time and chat to the user box

    let findFriend;

    let findFriendIndex;

    let findArray;

    for (let i = 0; i < userFriends.length; i++) {
      for (let j = 0; j < userFriends[i].length; j++) {
        if (userFriends[i][j]["userId"] == event) {
          findFriend = userFriends[i][j];
          findArray = userFriends[i];
          findFriendIndex = userFriends[i].indexOf(userFriends[i][j]);
        }
      }
    }

    console.log(findFriendIndex);

    console.log(findFriend);
    let addChatObj = {
      userTheme: chat,
      time: jsonTime,
      date: chatDate,
    };

    console.log(addChatObj);

    let friendAssign = Object.assign(findFriend, addChatObj);
    console.log(friendAssign);

    findArray[findFriendIndex] = friendAssign;

    localStorage.setItem("userFriends", JSON.stringify(userFriends));

    let chatObj = {
      chat: chat,
      timing: jsonTime,
      chatId: chatId,
      chatDate: chatDate,
      chatter_id: chattters[chattters.length - 1]["userId"],
      chatSenderId: findUser["userId"],
      chatterImage: findUser["avatarUrl"],
      isRead: false,
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
