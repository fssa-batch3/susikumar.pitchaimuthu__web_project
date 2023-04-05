// page redirection elements

let goToCamera = document.querySelector("#go-to-camera");

// camera page direction location

goToCamera.addEventListener("click", () => {
  window.location.href = "../pages/webcam.html?user=" + findUser["userId"];
});
