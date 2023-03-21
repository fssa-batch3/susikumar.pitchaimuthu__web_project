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
