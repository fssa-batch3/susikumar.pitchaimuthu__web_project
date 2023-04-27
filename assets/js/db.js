// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

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
const app = initializeApp(firebaseConfig);

const database = getDatabase();

export { database };

function getData() {
  onValue(ref(database, `freshchat/`), (snapshot) => {
    console.log(snapshot.val());
  });
}
getData();
