// JavaScript code to access the webcam and capture a photo
const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const takePhotoButton = document.querySelector("#take-photo");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then(function (stream) {
    // Display the video stream in the video element
    video.srcObject = stream;
    video.play();
  })
  .catch(function (err) {
    console.log("An error occurred: " + err);
  });

takePhotoButton.addEventListener("click", function () {
  // Draw the video frame to the canvas
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Stop the video stream
  video.srcObject.getVideoTracks().forEach((track) => track.stop());
});
context.filter = "grayscale(100%)";
