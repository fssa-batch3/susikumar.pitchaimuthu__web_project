const reelProfile = [
  { reelImage: "../assets/images/still/Snaps/1.jfif", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/2.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/3.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/4.jfif", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/5.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/6.png", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/7.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/8.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/1.jfif", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/2.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/3.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/4.jfif", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/5.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/6.png", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/7.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/8.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/1.jfif", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/2.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/3.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/4.jfif", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/5.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/6.png", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/7.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/8.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/1.jfif", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/2.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/3.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/4.jfif", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/5.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/6.png", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/7.jpg", alt: "user-image" },
  { reelImage: "../assets/images/still/Snaps/8.jpg", alt: "user-image" },
];

for (let i = 0; i < reelProfile.length; i++) {
  const trendingBirdDiv = document.createElement("div");
  trendingBirdDiv.setAttribute("class", "reel-member-div");

  const trendingBirdDivImage = document.createElement("img");
  trendingBirdDivImage.setAttribute("class", "reel-member-div-image");
  // console.log(reelProfile[i]["reelImage"]);
  trendingBirdDivImage.setAttribute("src", reelProfile[i].reelImage);
  trendingBirdDiv.append(trendingBirdDivImage);

  document.querySelector(".reel-container").append(trendingBirdDiv);
}
// // chat user chat box JSON details
const userChatBox = [
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Amma",
    chat: "How are you mother",
    lastseen: "1 minutes ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "My sister",
    chat: "How are you sis",
    lastseen: "10 minutes ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Naveena sri",
    chat: "Naina ma enna pantringa",
    lastseen: "1 hour ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Ramesh machi",
    chat: "Enna pantra machi",
    lastseen: "6 hours ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Logesh Bharathi",
    chat: "Enna pantra da",
    lastseen: "1 day ago",
  },

  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "kamalesh",
    chat: "hiiiii",
    lastseen: "10 day ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Gowtham",
    chat: " how are you",
    lastseen: "10 day ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Gowtham",
    chat: " how are you",
    lastseen: "10 day ago",
  },
  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Gowtham",
    chat: " how are you",
    lastseen: "10 day ago",
  },

  {
    image: "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    alt: "user-image",
    name: "Gowtham",
    chat: " how are you",
    lastseen: "10 day ago",
  },
];

// user chat box div

for (let i = 0; i < userChatBox.length; i++) {
  // first div
  const div = document.createElement("div");
  div.setAttribute("class", "members");

  // second div

  const image_div = document.createElement("div");
  image_div.setAttribute("class", "image-name");
  // document.querySelector(".members").append(image_div);
  div.append(image_div);

  // third div

  const image = document.createElement("div");
  image.setAttribute("class", "image");
  // document.querySelector(".image-name").append(image);
  image_div.append(image);

  // image attribute

  const img = document.createElement("img");
  img.setAttribute("class", "member-image");
  img.setAttribute("src", userChatBox[i]["image"]);
  // document.querySelector(".image").append(img);
  image.append(img);

  // name div

  const name = document.createElement("div");
  name.setAttribute("class", "name");
  // document.querySelector(".image-name").append(name);
  image_div.append(name);

  // name para attribute

  const para = document.createElement("p");
  para.innerText = userChatBox[i]["name"];
  // document.querySelector(".name").append(para);
  name.append(para);

  // chat para attribute

  const paragraph = document.createElement("p");
  paragraph.innerText = userChatBox[i]["chat"];
  // document.querySelector(".name").append(paragraph);
  name.append(paragraph);

  // Last seen div

  const timeAgo = document.createElement("div");
  timeAgo.setAttribute("id", "time-ago");
  // document.querySelector(".members").append(timeAgo);
  div.append(timeAgo);

  // Last seen paragraph

  const time = document.createElement("p");
  time.innerText = userChatBox[i]["lastseen"];
  // document.querySelector(".time-ago").append(time);
  timeAgo.append(time);

  document.querySelector(".chat-member-container").append(div);
}

// chat sender message popup javascript

function chatsend() {
  let arr = [];

  if (localStorage.getItem("senderMessage") != null) {
    arr = JSON.parse(localStorage.getItem("senderMessage"));
  }

  const chat = document.getElementById("chat-input").value;

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

    let chatObj = {
      chat: chat,
      timing: jsonTime,
      // timing: jsonTime,
    };

    console.log(chatObj);
    arr.push(chatObj);

    const str = JSON.stringify(arr);
    localStorage.setItem("senderMessage", str);
    location.reload();
  }
}

// send the message fro the chat sender message

let sender = JSON.parse(localStorage.getItem("senderMessage"));

console.log(sender);

for (let i = 0; i < sender.length; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "reply-msg");

  const replyChatPara = document.createElement("p");
  replyChatPara.setAttribute("id", "reply-msg-chat");
  replyChatPara.innerText = sender[i]["chat"];
  div.append(replyChatPara);

  const replyChatTime = document.createElement("p");
  replyChatTime.setAttribute("class", "reply-msg-time");
  replyChatTime.innerText = sender[i]["timing"];
  div.append(replyChatTime);

  document.querySelector(".right-side-container").append(div);
}
