// setting chat data to the firebase

const database = firebase.database();

function getUser(event) {
  console.log(event);

  let chatMessage = document.querySelector("#chat-input").value.trim();
  console.log(chatMessage);

  let userName = findUser["userName"];
  console.log(userName);

  // Send messge to the fire base

  // let sendMessage = () => {
  //   firebase.databse().ref("chatMessage").push().set({
  //     chat: chatMessage,
  //     chatperson: userName,
  //   });

  //   let chatInputArea = document.querySelector("#chat-input");
  //   chatInputArea.value = "";
  //   return false;
  // };

  const databaseRef = database.ref("freshenest");

  databaseRef.push().set({
    // Your data object
    chat: chatMessage,
    chatperson: userName,
  });

  // clear the input box

  //auto scroll to bottom

  // create db collection and send in the data

  alert("message has sent");
}
