// writing a function get a indidual user by clicking their respective chat box

let chatPersonCard = document.querySelectorAll(".members");
console.log(chatPersonCard);

let userSelectId;

for (let i = 0; i < chatPersonCard.length; i++) {
  chatPersonCard[i].addEventListener("click", function (chatEvent) {
    chatEvent.preventDefault();

    userSelectId = chatEvent.target.id;
    console.log(userSelectId);

    let userSelectionParse = JSON.parse(localStorage.getItem("register"));

    let userSelectionIdFind = userSelectionParse.find(
      (e) => e["userId"] == userSelectId
    );

    console.log(userSelectionIdFind);

    let userChatters = [];

    if (localStorage.getItem("userChatSelectors") !== null) {
      userChatters = JSON.parse(localStorage.getItem("userChatSelectors"));
    }

    userChatters.push(userSelectionIdFind);
    localStorage.setItem("userChatSelectors", JSON.stringify(userChatters));

    let checkUserData = document.querySelector(".user-profile-show-div");

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

    let inputForm = document.createElement("div");
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
    inputForm.append(chatSubmitDiv);

    let sendButton = document.createElement("button");
    sendButton.setAttribute("class", "chat-submit");
    sendButton.setAttribute("id", userSelectionIdFind["userId"]);
    sendButton.setAttribute("onclick", "getUser(this.id)");
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

    console.log("run");

    let sender = [];

    for (let i = 0; i < senderFind.length; i++) {
      if (
        (senderFind[i]["chatSenderId"] == findUser["userId"] &&
          senderFind[i]["chatter_id"] == userSelectId) ||
        (senderFind[i]["chatter_id"] == findUser["userId"] &&
          senderFind[i]["chatSenderId"] == userSelectId)
      ) {
        sender.push(senderFind[i]);
      }
    }
    console.log(sender);

    // adding read true to the all chats

    for (let i = 0; i < sender.length; i++) {
      sender[i]["isRead"] = true;
    }

    console.log(sender);

    let finalChaArray = [];

    console.log(senderFind);

    // for (let x = 0; x < senderFind.length; x++) {
    //   for (let y = 0; y < sender.length; y++) {
    //     if (senderFind[x]["chatId"] == sender[y]["chatId"]) {
    //       let chatdataAssign = Object.assign(senderFind[x], sender[y]);

    //       finalChaArray.push(chatdataAssign);
    //       return;
    //     } else if (finalChaArray.length != 0) {
    //       for (let z = 0; z < finalChaArray.length; z++) {
    //         if (finalChaArray[z]["chatId"] == senderFind[x]["chatId"]) {
    //         } else {
    //           finalChaArray.push(senderFind[x]);
    //         }
    //       }
    //     } else {
    //       finalChaArray.push(senderFind[x]);
    //     }
    //   }
    //   console.log(finalChaArray);
    //   // localStorage.setItem("senderMessage", JSON.stringify(finalChaArray));
    // }

    // localStorage.setItem("senderMessage", JSON.stringify(finalChaArray));

    let chageChat = document.querySelector(".right-side-container");
    console.log(chageChat);

    console.log("susi");

    if (chageChat.hasChildNodes()) {
      let chatFistchild = document.querySelectorAll(".chat-div-for-user");

      for (let i = 0; i < chatFistchild.length; i++) {
        chatFistchild[i].remove();
      }
    }

    console.log(sender);

    for (let j = 0; j < sender.length; j++) {
      if (
        sender[j]["chatter_id"] !== userSelectId &&
        sender[j]["chatSenderId"] == findUser["userId"]
      ) {
        console.log(sender[j]);
        let chatDivUser = document.createElement("div");
        chatDivUser.setAttribute("class", "chat-div-for-user");

        let chatUserInsideDiv = document.createElement("div");
        chatUserInsideDiv.setAttribute("class", "chat-user-inside-div");
        chatDivUser.append(chatUserInsideDiv);

        let chatDiv = document.createElement("div");
        chatDiv.setAttribute("class", "chat-div");
        chatUserInsideDiv.append(chatDiv);

        let chatInsideDiv = document.createElement("div");
        chatInsideDiv.setAttribute("class", "chat-inside-div");
        chatDiv.append(chatInsideDiv);

        let chatContentTimeDiv = document.createElement("div");
        chatContentTimeDiv.setAttribute("class", "chat-content-time-div");
        chatInsideDiv.append(chatContentTimeDiv);

        let chatContentTimeInsideDiv = document.createElement("div");
        chatContentTimeInsideDiv.setAttribute(
          "class",
          "chat-content-time-inside-div"
        );
        chatContentTimeDiv.append(chatContentTimeInsideDiv);

        let chatContentDiv = document.createElement("div");
        chatContentDiv.setAttribute("class", "chat-content-div");
        chatContentTimeInsideDiv.append(chatContentDiv);

        let chatContent = document.createElement("p");
        chatContent.setAttribute("class", "chat-content");
        chatContent.innerHTML = sender[j]["chat"];
        chatContentDiv.append(chatContent);

        let chatTimeDiv = document.createElement("div");
        chatTimeDiv.setAttribute("class", "chat-time-div");
        chatContentTimeInsideDiv.append(chatTimeDiv);

        let timePara = document.createElement("p");
        timePara.setAttribute("class", "time-para");
        timePara.innerHTML = sender[j]["timing"];
        chatTimeDiv.append(timePara);

        let userProfileDiv = document.createElement("div");
        userProfileDiv.setAttribute("class", "user-profile-div");
        chatInsideDiv.append(userProfileDiv);

        let usrImage = document.createElement("img");
        usrImage.setAttribute("alt", "chat-image");
        usrImage.setAttribute("class", "chatter-image");
        usrImage.setAttribute("src", findUser["avatarUrl"]);
        userProfileDiv.append(usrImage);

        document.querySelector(".right-side-container").append(chatDivUser);
      } else {
        console.log("friends");
        let chatDivUser = document.createElement("div");
        chatDivUser.setAttribute("class", "chat-div-for-user");

        let chatUserInsideDiv = document.createElement("div");
        chatUserInsideDiv.setAttribute("class", "chat-friends-inside-div");
        chatDivUser.append(chatUserInsideDiv);

        let chatDiv = document.createElement("div");
        chatDiv.setAttribute("class", "chat-div");
        chatUserInsideDiv.append(chatDiv);

        let chatInsideDiv = document.createElement("div");
        chatInsideDiv.setAttribute("class", "chat-inside-div");
        chatDiv.append(chatInsideDiv);

        let userProfileDiv = document.createElement("div");
        userProfileDiv.setAttribute("class", "user-profile-div");
        chatInsideDiv.append(userProfileDiv);

        let usrImage = document.createElement("img");
        usrImage.setAttribute("alt", "chat-image");
        usrImage.setAttribute("class", "chatter-image");
        usrImage.setAttribute("src", sender[j]["chatterImage"]);
        userProfileDiv.append(usrImage);

        let chatContentTimeDiv = document.createElement("div");
        chatContentTimeDiv.setAttribute("class", "chat-content-time-div");
        chatInsideDiv.append(chatContentTimeDiv);

        let chatContentTimeInsideDiv = document.createElement("div");
        chatContentTimeInsideDiv.setAttribute(
          "class",
          "chat-content-time-inside-div"
        );
        chatContentTimeDiv.append(chatContentTimeInsideDiv);

        let chatContentDiv = document.createElement("div");
        chatContentDiv.setAttribute("class", "chat-content-div");
        chatContentTimeInsideDiv.append(chatContentDiv);

        let chatContent = document.createElement("p");
        chatContent.setAttribute("class", "chat-content");
        chatContent.innerHTML = sender[j]["chat"];
        chatContentDiv.append(chatContent);

        let chatTimeDiv = document.createElement("div");
        chatTimeDiv.setAttribute("class", "chat-time-div");
        chatContentTimeInsideDiv.append(chatTimeDiv);

        let timePara = document.createElement("p");
        timePara.setAttribute("class", "time-para");
        timePara.innerHTML = sender[j]["timing"];
        chatTimeDiv.append(timePara);

        document.querySelector(".right-side-container").append(chatDivUser);
      }
    }

    // let div = document.createElement("div");
    // div.setAttribute("class", "reply-msg");
    // div.setAttribute("id", sender[i]["chatId"]);
    // // div.setAttribute("onmouseenter", "editOptionMouseOver(this.id)");
    // // div.setAttribute("onmouseleave", "editoptionMouseOut()");

    // let replyChatPara = document.createElement("p");
    // replyChatPara.setAttribute("id", "reply-msg-chat");
    // replyChatPara.innerHTML = sender[i]["chat"];
    // div.append(replyChatPara);

    // let replyChatTime = document.createElement("p");
    // replyChatTime.setAttribute("class", "reply-msg-time");
    // replyChatTime.innerText = sender[i]["timing"];
    // div.append(replyChatTime);

    // let chatidPara = document.createElement("p");
    // chatidPara.setAttribute("class", "chatId");
    // chatidPara.innerText = sender[i]["chatId"];
    // div.append(chatidPara);

    // let chatEditdiv = document.createElement("div");
    // chatEditdiv.setAttribute("class", "edit-option-div");
    // chatEditdiv.setAttribute("id", sender[i]["chatId"]);
    // div.append(chatEditdiv);

    // let emojiFa = document.createElement("i");
    // // emojiFa.setAttribute("class", "bi bi-emoji-heart-eyes-fill");
    // emojiFa.setAttribute("onclick", "emoji(this.id)");
    // chatEditdiv.append(emojiFa);

    // let editFa = document.createElement("i");
    // editFa.setAttribute("class", "bi bi-pen-fill");
    // editFa.setAttribute("id", sender[i]["chatId"]);
    // // editFa.setAttribute("onclick", "chatEditInput(this.id)");
    // chatEditdiv.append(editFa);

    // let deleteFa = document.createElement("i");
    // deleteFa.setAttribute("class", "bi bi-trash");
    // deleteFa.setAttribute("id", sender[i]["chatId"]);
    // // deleteFa.setAttribute("onclick", "deleteChat(this.id)");
    // chatEditdiv.append(deleteFa);

    // // chat Edit input feild

    // document.querySelector(".right-side-container").append(div);
  });
}
