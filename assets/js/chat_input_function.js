// chat sender message popup javascript

let chatUserIdCheck = JSON.parse(localStorage.getItem("userPersonChatId"));
let commonArray = [];
function chatsend(checkUser) {
  //   console.log(userSelectionIdFind);
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

//  chat sticers showing function

// fetch(
//   "https://emoji-api.com/emojis?access_key=bd3bda3607d43a8a3f962e6825fad1bdc581604a"
// )
//   .then((res) => res.json())
//   .then((data) => showEmoji(data));

// function showEmoji(data) {
//   data.forEach((emoji) => {
//     let emojiLi = document.createElement("li");
//     emojiLi.setAttribute("emoji-name", emoji.slug);
//     emojiLi.textContent = emoji.character;
//     document.querySelector(".emoji-div-for").append(emojiLi);
//   });
// }
