// chat sender message popup javascript

let chatUserIdCheck = JSON.parse(localStorage.getItem("userPersonChatId"));
let commonArray = [];
function chatsend(checkUser) {
  console.log(checkUser);
  let chat_userId = checkUser;
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
      chatUserId: chat_userId,
    };
    let arr = [];

    if (localStorage.getItem("senderMessage") != null) {
      arr = JSON.parse(localStorage.getItem("senderMessage"));
    }

    arr.push(chatObj);

    localStorage.setItem("senderMessage", JSON.stringify(arr));
  }
}
