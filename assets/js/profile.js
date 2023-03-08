let info = JSON.parse(window.localStorage.getItem("register"));
// console.log(info);
let log = JSON.parse(window.localStorage.getItem("user_data"));
console.log(log[0]["Email"]);

const found = info.find(function (what) {
  let thinkEmail = what["Email"];
  if (log[0]["Email"] == thinkEmail) {
    return true;
  }
});

console.log(found);

const name1 = (document.getElementById("firstName").value = found.firstName);

const name2 = (document.getElementById("lastName").value = found["lastName"]);
// console.log(name2);
const uname = (document.getElementById("userName").value = found["userName"]);
const mail = (document.getElementById("email").value = found["Email"]);

const head = (document.getElementById("profile-head").innerText =
  "Hello" + "   " + found["userName"]);

// console.log(head);

const phone = (document.getElementById("phone").value = found["mobileNumber"]);
// console.log(phone);

const age = (document.getElementById("age").value = found["age"]);
const nation = (document.getElementById("nation").value = found["nationality"]);

// profile image

// let profileImage = (document.getElementById("profile-image").value =
//   found["userImage"]);
// console.log(profileImage);
