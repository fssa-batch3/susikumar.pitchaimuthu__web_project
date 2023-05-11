// Email page redirection page element and putting the add eventlistner

let emailsButton = document.querySelector(".email-button");

emailsButton.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "../pages/email.html?user=" + findUser["userId"];
});

// user delete account function creating

let deleteAccount = document.querySelector("#delete-button");

deleteAccount.addEventListener("click", (event) => {
  event.preventDefault();

  let deleteMessage = confirm(
    "Are you sure want to delete account in freshnest"
  );

  if (deleteMessage !== true) {
    return;
  } else {
    let userDatas = JSON.parse(localStorage.getItem("register"));
    console.log(userDatas);

    let currentUser = userDatas.find((user) => user["userId"] == urlId);
    console.log(currentUser);

    let findIndex = userDatas.indexOf(currentUser);
    console.log(findIndex);

    userDatas.splice(findIndex, 1);
    console.log(userDatas);

    localStorage.setItem("register", JSON.stringify(userDatas));

    window.location.href = "../index.html";
  }
});
