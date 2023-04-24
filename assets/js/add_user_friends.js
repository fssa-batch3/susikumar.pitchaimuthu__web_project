let freshChatUsers = JSON.parse(localStorage.getItem("userFriends"));
console.log(freshChatUsers);

let allSendChats = JSON.parse(localStorage.getItem("senderMessage"));

let allUSerFriendsData;

//  Creating a for loop for find user friends

for (let i = 0; i < freshChatUsers.length; i++) {
  if (freshChatUsers[i][0]["frienderId"] == findUser["userId"]) {
    allUSerFriendsData = freshChatUsers[i];
  }
}

if (allUSerFriendsData !== null) {
  for (let i = 0; i < allUSerFriendsData.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "members");
    div.setAttribute("id", allUSerFriendsData[i]["userId"]);

    let image_div = document.createElement("div");
    image_div.setAttribute("class", "image-name");
    div.append(image_div);

    let image = document.createElement("div");
    image.setAttribute("class", "image");
    image_div.append(image);

    let img = document.createElement("img");
    img.setAttribute("class", "member-image");
    img.setAttribute("src", allUSerFriendsData[i]["avatarUrl"]);
    image.append(img);

    let nameOne = document.createElement("div");
    nameOne.setAttribute("class", "name");
    image_div.append(nameOne);

    let para = document.createElement("p");
    para.innerHTML = allUSerFriendsData[i]["userName"];
    nameOne.append(para);

    let paragraph = document.createElement("p");
    paragraph.innerText = allUSerFriendsData[i]["userTheme"];
    nameOne.append(paragraph);

    let timeCountDiv = document.createElement("div");
    timeCountDiv.setAttribute("class", "chat-count-div");
    div.append(timeCountDiv);

    let countDiv = document.createElement("div");
    countDiv.setAttribute("class", "count-div");
    timeCountDiv.append(countDiv);

    // creating for loop to show the user unread chat count

    let numberCount = [];

    if (allSendChats !== undefined) {
      for (let i = 0; i < allSendChats; i++) {
        if (
          allUSerFriendsData[i]["userId"] == allSendChats["userId"] &&
          allUSerFriendsData[i]["isRead"] == "false"
        ) {
          numberCount += numberCount.push(allUSerFriendsData[i]);
        }
      }
    }

    console.log(numberCount);

    let countPara = document.createElement("p");
    countPara.setAttribute("class", "count-para");
    countPara.innerText = numberCount.length;
    countDiv.append(countPara);

    let timeAgo = document.createElement("div");
    timeAgo.setAttribute("id", "time-ago");
    timeCountDiv.append(timeAgo);

    let time = document.createElement("p");
    time.innerHTML = allUSerFriendsData[i]["time"];
    timeAgo.append(time);

    document.querySelector(".chat-member-inside-container").append(div);
  }
}
