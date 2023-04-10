// adding user function

let addMemberDiv = document.querySelector(".showing-all-members-div-container");

let memberShow = document.querySelector(".chat-member-container");

let addImage = document.querySelector(".chat-adding-div-container");

addImage.addEventListener("click", () => {
  console.log("susi");

  // make display none the add image

  if ((addImage.style.display = "block")) {
    addImage.style.display = "none";
  }

  if ((memberShow.style.display = "block")) {
    memberShow.style.display = "none";
  }

  if ((addMemberDiv.style.display = "none")) {
    addMemberDiv.style.display = "block";
  }

  // Getting data for all users to show to select the users for chat

  let ourUsers = JSON.parse(localStorage.getItem("register"));
  console.log(ourUsers);

  let exceptUser = ourUsers.filter((e) => e["userId"] !== findUser["userId"]);
  console.log(exceptUser);

  for (let i = 0; i < exceptUser.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "members");
    div.setAttribute("id", exceptUser[i]["userId"]);
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
    img.setAttribute("src", exceptUser[i]["avatarUrl"]);
    image.append(img);

    let nameOne = document.createElement("div");
    nameOne.setAttribute("class", "name");
    image_div.append(nameOne);

    let para = document.createElement("p");
    para.innerHTML = exceptUser[i]["userName"];
    nameOne.append(para);

    let paragraph = document.createElement("p");
    paragraph.innerText = exceptUser[i]["userTheme"];
    nameOne.append(paragraph);

    document.querySelector(".showing-member-div").append(div);
  }
});

// This function for  after selecting the user

function confirmUser(e) {
  console.log(e);

  console.log("manisha");

  let clickUserId = e;
  let userSelectionParse = JSON.parse(localStorage.getItem("register"));
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

  let choosedUseObject = {
    chooseUser: findUser["userId"],
  };

  let findUserObject = Object.assign(choosedUseObject, findConfirmUser);
  confirmFriendArr.push(findUserObject);
  console.log(confirmFriendArr);

  localStorage.setItem("userChatFriends", JSON.stringify(confirmFriendArr));

  if ((addMemberDiv.style.display = "block")) {
    addMemberDiv.style.display = "none";
  }

  if ((addImage.style.display = "none")) {
    addImage.style.display = "block";
  }

  if ((memberShow.style.display = "none")) {
    memberShow.style.display = "block";
  }
  // location.reload();
}
