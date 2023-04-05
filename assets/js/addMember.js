// adding user function

let addMemberDiv = document.querySelector(
  ".members-showing-to-select-div-container"
);

let chatterAdd = document.querySelector(".chat-adding-div-container");

let memberShow = document.querySelector(".message-member-container");
function addMembers(e) {
  console.log("susi");

  // make display none the add image

  if ((chatterAdd.style.display = "block")) {
    chatterAdd.style.display = "none";
  }

  if ((memberShow.style.display = "block")) {
    memberShow.style.display = "none";
  }

  if ((addMemberDiv.style.display = "none")) {
    addMemberDiv.style.display = "block";
  }

  console.log(chatStaticUser);

  for (let i = 0; i < chatStaticUser.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "members");
    div.setAttribute("id", chatStaticUser[i]["userId"]);
    div.setAttribute("onclick", "confirmUser(this.id)");
    // div.setAttribute("onclick", "userSelector(this.id)");

    let image_div = document.createElement("div");
    image_div.setAttribute("class", "image-name");
    div.append(image_div);

    let image = document.createElement("div");
    image.setAttribute("class", "image");
    image_div.append(image);

    let img = document.createElement("img");
    img.setAttribute("class", "member-image");
    img.setAttribute("src", chatStaticUser[i]["user_image"]);
    image.append(img);

    let nameOne = document.createElement("div");
    nameOne.setAttribute("class", "name");
    image_div.append(nameOne);

    let para = document.createElement("p");
    para.innerHTML = chatStaticUser[i]["user_name"];
    nameOne.append(para);

    let paragraph = document.createElement("p");
    paragraph.innerText = chatStaticUser[i]["chat"];
    nameOne.append(paragraph);

    let timeAgo = document.createElement("div");
    timeAgo.setAttribute("id", "time-ago");
    div.append(timeAgo);

    let time = document.createElement("p");
    time.innerHTML = chatStaticUser[i]["chat_time"];
    timeAgo.append(time);

    document.querySelector(".showing-member-div").append(div);
  }
}

// This function for  after selecting the user

function confirmUser(e) {
  console.log(e);

  let clickUserId = e;
  let userSelectionParse = JSON.parse(localStorage.getItem("userStaticData"));
  console.log(userSelectionParse);

  let findConfirmUser = userSelectionParse.find(
    (e) => e["userId"] == clickUserId
  );
  console.log(findConfirmUser);

  let alreadyFriendData = JSON.parse(localStorage.getItem("userChatFriends"));
  console.log(alreadyFriendData);

  if (alreadyFriendData !== null) {
    for (let i = 0; i < alreadyFriendData.length; i++) {
      if (alreadyFriendData[i]["userId"] == findConfirmUser["userId"]) {
        if ((addMemberDiv.style.display = "block")) {
          addMemberDiv.style.display = "none";
        }

        if ((chatterAdd.style.display = "none")) {
          chatterAdd.style.display = "block";
        }

        if ((memberShow.style.display = "none")) {
          memberShow.style.display = "block";
        }
        // location.reload();
        return;
      }
    }
  }

  let confirmFriendArr = [];

  if (localStorage.getItem("userChatFriends") !== null) {
    confirmFriendArr = JSON.parse(localStorage.getItem("userChatFriends"));
  }

  console.log("Naan");
  confirmFriendArr.push(findConfirmUser);
  console.log(confirmFriendArr);

  localStorage.setItem("userChatFriends", JSON.stringify(confirmFriendArr));

  if ((addMemberDiv.style.display = "block")) {
    addMemberDiv.style.display = "none";
  }

  if ((chatterAdd.style.display = "none")) {
    chatterAdd.style.display = "block";
  }

  if ((memberShow.style.display = "none")) {
    memberShow.style.display = "block";
  }
  location.reload();
}
