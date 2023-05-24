// importing firebase data to show the user how much data are unread

import database from "./db.js";

import {
  onValue,
  ref,
  set,
  push,
  getDatabase,
  update,
  child,
  remove,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

console.log(database);

import { boostChat } from "./chatElement.js";

// getting the firebase database data

let currentChatData = [];

onValue(ref(database, `freshchat/`), (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    // Get the key and value of each child node
    const key = childSnapshot.key;

    const value = childSnapshot.val();

    let chatObject = {
      chatkey: key,
    };

    let chatAssign = Object.assign(value, chatObject);

    currentChatData.push(chatAssign);

    console.log(currentChatData);
  });
  addUser();
});

console.log(currentChatData);

// getting the user data from the database

// creating function to remove the userCards before show the new user

function allUserCardRemove() {
  let userCard = document.querySelectorAll(".user-card-container");

  if (userCard[0] != undefined) {
    for (let uCard of userCard) {
      uCard.remove();
    }
  }
}

function addUser() {
  let freshChatUsers = JSON.parse(localStorage.getItem("userFriends"));
  console.log(freshChatUsers);

  let allUSerFriendsData;

  // removing user cards

  allUserCardRemove();

  //  Creating a for loop for find user friends

  for (const freshChatUser of freshChatUsers) {
    if (freshChatUser[0]["frienderId"] == findUser["userId"]) {
      allUSerFriendsData = freshChatUser;
      break;
    }
  }
  console.log(allUSerFriendsData);

  if (allUSerFriendsData !== undefined) {
    for (const friendData of allUSerFriendsData) {
      let div = document.createElement("div");
      div.setAttribute(
        "class",
        "user-card-container" + " " + friendData["userName"]
      );

      let usercardContainerInsideDiv = document.createElement("div");
      usercardContainerInsideDiv.setAttribute(
        "class",
        "user-card-inside-container"
      );
      usercardContainerInsideDiv.setAttribute("id", friendData["userId"]);

      div.append(usercardContainerInsideDiv);

      let image_div = document.createElement("div");

      image_div.setAttribute("class", "image-name");
      usercardContainerInsideDiv.append(image_div);

      let image = document.createElement("div");
      image.setAttribute("class", "image");
      image_div.append(image);

      let img = document.createElement("img");
      img.setAttribute("class", "member-image");
      img.setAttribute("src", friendData["avatarUrl"]);
      image.append(img);

      let nameOne = document.createElement("div");
      nameOne.setAttribute("class", "name");
      image_div.append(nameOne);

      let para = document.createElement("p");
      para.innerHTML = friendData["userName"];
      nameOne.append(para);

      let paragraph = document.createElement("p");
      paragraph.innerText = friendData["userTheme"];
      nameOne.append(paragraph);

      let timeCountDiv = document.createElement("div");
      timeCountDiv.setAttribute("class", "chat-count-div");
      usercardContainerInsideDiv.append(timeCountDiv);

      let countContainer = document.createElement("div");
      countContainer.setAttribute("class", "count-container");
      timeCountDiv.append(countContainer);

      // creating for loop to show the user unread chat count

      let numberCount = [];

      let unread = false;

      if (currentChatData != null) {
        for (let curData of currentChatData) {
          if (
            curData["chatReceiverId"] == findUser["userId"] &&
            curData["isRead"] == unread
          ) {
            numberCount.push(curData);
          }
        }
      }

      if (numberCount != 0) {
        let countDiv = document.createElement("div");
        countDiv.setAttribute("class", "count-div");
        countContainer.append(countDiv);

        let countPara = document.createElement("p");
        countPara.setAttribute("class", "count-para");
        countPara.innerText = numberCount.length;
        countDiv.append(countPara);
      }

      let timeAgo = document.createElement("div");
      timeAgo.setAttribute("id", "time-ago");
      timeCountDiv.append(timeAgo);

      let time = document.createElement("p");
      time.innerHTML = friendData["time"];
      timeAgo.append(time);

      document.querySelector(".chat-member-inside-container").append(div);
    }
  }

  chatCard();
}

// avatar emoji part removing function

function removeAvatar() {
  // remve emoji div container

  let emojiDivs = document.querySelector(".emoji-name-div-container");

  if (emojiDivs != null) {
    emojiDivs.remove();
  }
}

// user profile card emoji removing function

function profileRemove() {
  let checkUserData = document.querySelector(".user-profile-show-div");

  if (checkUserData !== null) {
    document.querySelector(".user-profile-show-div").remove();
  }
}

//

function removingInput() {
  let nullInput = document.querySelector("#chat-input-form");

  if (nullInput !== null) {
    document.querySelector("#chat-input-form").remove();
  }
}

// chat is read true function

function isReadAdd(userSelectId) {
  console.log(userSelectId);

  // creating a for loop function to find all this person chat

  console.log(currentChatData);

  let findChats = currentChatData.filter((e) => e["chatterId"] == userSelectId);
  console.log(findChats);
  // Here finding the keys
  if (findChats == null) {
    return;
  }

  //  Here getting the chat keys

  for (let allChats of findChats) {
    for (let currChat of currentChatData) {
      if (currChat["chatkey"] == allChats["chatkey"]) {
        let updateKey = currChat["chatkey"];
        console.log(updateKey);
        let thirdDatabase = getDatabase();
        let nodeRef = ref(thirdDatabase, "freshchat/" + updateKey);

        console.log(nodeRef);

        let chatUpdateObject = {
          isRead: "true",
        };

        update(nodeRef, chatUpdateObject);
        console.log("Data updated successfully");
      }
    }
  }
}

let userSelectId;
function chatCard() {
  let chatPersonCard = document.querySelectorAll(".user-card-container");
  console.log(chatPersonCard);

  for (let chatCards of chatPersonCard) {
    chatCards.addEventListener("click", function (chatEvent) {
      chatEvent.preventDefault();

      //  remove=ing the avatar area

      removeAvatar();

      userSelectId = chatEvent.target.id;
      console.log(userSelectId);

      // Here creating function to make is read true

      let userSelectionParse = JSON.parse(localStorage.getItem("register"));

      let userSelectionIdFind = userSelectionParse.find(
        (e) => e["userId"] == userSelectId
      );

      console.log(userSelectionIdFind);

      // removing user profiel if already there

      profileRemove();

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
      chatPersonContentDiv.setAttribute(
        "class",
        "chat-person-name-lastseen-div"
      );
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

      test("i", "class", "bi bi-camera");

      test("i", "class", "bi bi-gear");

      function test(element, id_or_class, class_name_or_id_name) {
        let biGear = document.createElement(element);
        biGear.setAttribute(id_or_class, class_name_or_id_name);
        profileOptionDiv.append(biGear);
      }

      document
        .querySelector(".chat-member-option-div")
        .append(userNameDivContainer);

      // write the code to null the data

      removingInput();

      // create dynamic element for the input field

      let inputForm = document.createElement("div");
      inputForm.setAttribute("id", "chat-input-form");

      let emojiDiv = document.createElement("div");
      emojiDiv.setAttribute("class", "emoji-div");
      inputForm.append(emojiDiv);

      let smileI = document.createElement("i");
      smileI.setAttribute("class", "fa-regular fa-face-smile");
      emojiDiv.append(smileI);

      let emojiInputDiv = document.createElement("div");
      emojiInputDiv.setAttribute("class", "emoji-input-div-container");
      emojiInputDiv.setAttribute("style", "display:none;");
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

      let emojiRangeStart = 0x1f600;
      let emojiRangeEnd = 0x1f64f;

      for (
        let emojiCode = emojiRangeStart;
        emojiCode <= emojiRangeEnd;
        emojiCode++
      ) {
        let emoji = document.createElement("span");
        emoji.setAttribute("class", "span-emoji " + emojiCode);
        emoji.innerHTML = String.fromCodePoint(emojiCode);
        emojiDivContainer.appendChild(emoji);
      }

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
      inputForm.append(chatSubmitDiv);

      let sendButton = document.createElement("button");
      sendButton.setAttribute("class", "chat-submit");
      chatSubmitDiv.append(sendButton);

      let sendIcon = document.createElement("i");
      sendIcon.setAttribute("class", "bi bi-send");
      sendButton.append(sendIcon);

      let Span = document.createElement("span");
      Span.setAttribute("class", "submit-span");
      Span.setAttribute("id", userSelectionIdFind["userId"]);
      Span.innerHTML = "Submit";
      sendButton.append(Span);

      let sendI = document.createElement("i");
      sendI.setAttribute("class", "send-i");
      sendButton.append(sendI);

      document.querySelector(".chat-input-option-div").append(inputForm);

      // Here boosting the user chats

      boostChat();

      // making the chat into the read
      isReadAdd(userSelectId);
    });
  }
}
export { userSelectId };

// creating a function to set the data

let firstParent = document.querySelector(".chat-input-option-div");

async function setData(userReceiver) {
  let chatReceiverId = userReceiver;
  let chatMessage = document.querySelector("#chat-input").value.trim();
  console.log(chatMessage);

  if (chatMessage == null || chatMessage == "") {
    alert("You can send empty chat");
    return;
  }

  let userName = findUser["userName"];
  console.log(userName);

  let personId = findUser["userId"];

  let chatTime = moment().format("LT");
  let dateChat = moment().format("l");
  let chatId = Date.now();

  // Generate a new unique key using push()
  let chatRef = push(ref(database, "freshchat/"));

  let chatData = {
    chatPerson: userName,
    chat: chatMessage,
    chatTime: chatTime,
    chatReceiverId: chatReceiverId,
    chatDate: dateChat,
    chatterId: personId,
    chatId: chatId,
    chatSenderImage: findUser["avatarUrl"],
    isRead: false,
  };

  try {
    await set(chatRef, chatData);

    boostChat();

    console.log("Data updated successfully!");
    // Proceed with further actions or data retrieval here
  } catch (error) {
    console.error("Error updating data:", error);
  }
  document.querySelector("#chat-input").value = "";
}

firstParent.addEventListener("click", async function (event) {
  let target = event.target;

  console.log(target);

  let userReceiver = target.id;
  console.log(userReceiver);
  // Check if the event target is the chat-submit button inside the chat-submit-button-div
  if (target.matches(".submit-span")) {
    try {
      await setData(userReceiver);
      console.log("Data set successfully");
    } catch (error) {
      console.error(error);
    }
  }
});

// creating function to show a edit option div while mouse over the element

let chatContainer = document.querySelector(".right-side-container");

// mouse over funciton

async function mouserOver(mouse, currentId) {
  let editOptionElement = document.querySelectorAll(
    ".update-delete-option-div"
  );

  let updateElement;

  for (let editElement of editOptionElement) {
    if (editElement["id"] == currentId) {
      updateElement = editElement;
    }
  }

  mouse.addEventListener("mouseover", () => {
    updateElement.style.display = "block";
  });

  mouse.addEventListener("mouseout", () => {
    updateElement.style.display = "none";
  });
}

chatContainer.addEventListener("mouseover", async function (event) {
  let target = event.target;

  if (target.matches(".chat-user-inside-div")) {
    let currentChat = target;
    let currentId = target.id;

    try {
      await mouserOver(currentChat, currentId);
    } catch (error) {
      console.error(error);
    }
  }
});

// chat delete function

async function chatDelete(self) {
  console.log(self);
  alert("Are you sure want to delete message");
  let messageId = self;

  console.log(messageId);

  let secondDatabase = getDatabase();

  console.log(secondDatabase);

  const objectRef = ref(secondDatabase, "freshchat");
  const objectKey = messageId; // Replace with the key of the object you want to delete

  // Navigate to the object you want to delete using the child() function
  const objectToDeleteRef = child(objectRef, objectKey);
  // Call remove() on the reference to delete the object
  remove(objectToDeleteRef)
    .then(() => {
      setTimeout(() => {
        boostChat();
      }, 3000);
      console.log("Object successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing object: ", error);
    });
}

// chat delete button add eventlistner function

chatContainer.addEventListener("click", async function (event) {
  let target = event.target;
  console.log(target);

  let currentChat = target.id;
  console.log(currentChat);

  // Here call the chat edit option function

  if (target.matches(".bi-pencil-square")) {
    try {
      await chatUpdate(currentChat);
      console.log("Chat update element successfully got");
    } catch (error) {
      console.error(error);
    }
  }

  //  Here calling the chat delete function

  if (target.matches(".bi-trash")) {
    try {
      await chatDelete(currentChat);
      console.log("Chat successfully got");
    } catch (error) {
      console.error(error);
    }
  }
});

// chat update function

async function chatUpdate(upsi) {
  console.log(upsi);

  let userInput = prompt("Please enter your update:", "");
  console.log(userInput);

  // Here say the one condition if input value is null  return

  if (userInput === "") {
    alert("Please type some text");
    return;
  }

  let updateKey = upsi;

  let thirdDatabase = getDatabase();
  let nodeRef = ref(thirdDatabase, "freshchat/" + updateKey);

  console.log(nodeRef);

  let chatUpdateObject = {
    chat: userInput,
  };

  // Use the update() method to update the data at the specified node
  try {
    await update(nodeRef, chatUpdateObject);
    console.log("Data updated successfully");

    setTimeout(() => {
      boostChat();
    }, 3000);
  } catch (error) {
    console.log("Data update failed: ", error);
  }
}
