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

    localStorage.setItem("editChatData", EditDataStringify);
  }
}
