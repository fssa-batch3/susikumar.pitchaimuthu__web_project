// Email page redirection page element and putting the add eventlistner

let emailsButton = document.querySelector(".email-button");

emailsButton.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "../pages/email.html?user=" + findUser["userId"];
});
