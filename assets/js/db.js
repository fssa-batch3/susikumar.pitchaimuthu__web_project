// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByvONF3f6-tLWrigL42gKw2hGQxtbmYWc",
  authDomain: "freshchat-28154.firebaseapp.com",
  databaseURL: "https://freshchat-28154-default-rtdb.firebaseio.com",
  projectId: "freshchat-28154",
  storageBucket: "freshchat-28154.appspot.com",
  messagingSenderId: "469786534443",
  appId: "1:469786534443:web:ab0252cf738142d649806e",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

let database = getDatabase();

console.log(database);

export default database;

let firstParent = document.querySelector(".chat-input-option-div");

// chat voice convert into the text

async function voiceText() {
  let speech = true;

  alert("Voice recognition started.");

  window.SpeechRecognition = window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();

  recognition.addEventListener("result", (e) => {
    let transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript);

    // Handle the transcript data here
    console.log(transcript);

    let chatInputField = document.querySelector("#chat-input");

    chatInputField.value = transcript;
  });

  recognition.addEventListener("end", () => {
    alert("Voice recognition ended.");
  });

  if (speech == true) {
    recognition.start();
  }
}

// Document sending function  creation
async function documentSending() {
  let fileInput = document.createElement("input");
  fileInput.type = "file";

  let imageElement = document.createElement("img");
  imageElement.setAttribute("class", "sending-image");

  fileInput.click();

  fileInput.addEventListener("change", function (e) {
    let file = e.target.files[0];

    console.log("File name:", file.name);
    console.log("File type:", file.type);
    console.log("File size:", file.size, "bytes");
    console.log("Last modified:", file.lastModified);

    let reader = new FileReader();
    reader.onload = function (e) {
      let fileContent = e.target.result;
      console.log(fileContent);

      imageElement.src = fileContent;

      // Append the image element to a container
      let container = document.createElement("div");
      container.appendChild(imageElement);

      console.log(container.innerHTML);

      // Set the HTML content of the input element
      document.querySelector("#chat-input").value = container.innerHTML;
    };
    reader.readAsDataURL(file);
  });
}

// emoji div showing function

async function emojiShow() {
  let emojiContainDiv = document.querySelector(".emoji-input-div-container");
  console.log(emojiContainDiv);

  if (emojiContainDiv.style.display === "none") {
    emojiContainDiv.style.display = "block";
  } else {
    emojiContainDiv.style.display = "none";
  }
}

// input emoji function

async function inputEmoji(emojis) {
  // getting the emails details from the input field

  let emojiInput = document.querySelector("#chat-input");
  console.log(emojiInput);

  let emojiSpan = emojis;

  console.log(emojiSpan.innerHTML);
  emojiInput.value += emojiSpan.innerHTML;
}

// Attach the click event listener to the document object using event delegation
firstParent.addEventListener("click", async function (event) {
  let target = event.target;

  console.log(target);

  // enter the mike option

  if (target.matches(".fa-microphone")) {
    try {
      await voiceText();
      console.log("Data set successfully");
    } catch (error) {
      console.error(error);
    }
  }

  // document sending function

  if (target.matches(".fa-file")) {
    try {
      await documentSending();
      console.log("Data set successfully");
    } catch (error) {
      console.error(error);
    }
  }

  // emoji div function

  if (target.matches(".fa-face-smile")) {
    try {
      await emojiShow();
      console.log("Data set successfully");
    } catch (error) {
      console.error(error);
    }
  }

  // emoji picking element

  if (target.matches(".span-emoji")) {
    try {
      await inputEmoji(target);
      console.log("Data set successfully");
    } catch (error) {
      console.error(error);
    }
  }
});

// emoji element creations

let avatarData = JSON.parse(localStorage.getItem("emojiAvatar"));

// Getting the random index
let randomArray = new Uint32Array(1);
window.crypto.getRandomValues(randomArray);
let randomIndex = randomArray[0] % avatarData.length;
let randomImageSrc = avatarData[randomIndex]["avatar"];

console.log(randomImageSrc);

let avatarImage = document.querySelector(".emoji");
avatarImage.setAttribute("src", randomImageSrc);
