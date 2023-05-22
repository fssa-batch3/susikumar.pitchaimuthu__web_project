// importing firebase database data
import database from "./db.js";

import {
  ref,
  getDatabase,
  child,
  remove,
  update,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

console.log(database);

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
  } catch (error) {
    console.log("Data update failed: ", error);
  }
}
