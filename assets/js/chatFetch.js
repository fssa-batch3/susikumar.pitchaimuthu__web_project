// setting chat data to the firebase

let sendButtondiv = document.querySelector(".chat-submit-button-div");
console.log(sendButtondiv);

if (sendButtondiv !== null) {
  console.log(sendButtondiv);
  sendButtondiv.addEventListener("click", (e) => {
    alert("ajay");
    console.log(susi);

    console.log(this.id);

    let chatMessage = querySelector(".chat-input").value.trim();
    console.log(chatMessage);

    let userName = findUser["userName"];
    console.log(userName);

    let id = push(child(ref(database), "chatMessage")).key;

    set(ref(database), "chatMessage/" + id),
      {
        chat: chatMessage,
        chatPerson: userName,
      };

    alert("message has sent");
  });
}
