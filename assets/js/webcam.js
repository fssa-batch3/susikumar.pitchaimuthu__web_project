// let camera = document.getElementById("video");

// const media = MediaDevices.getUserMedia();

// let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#start");
let brightness = document.getElementById("brightnessRange");
let brightness_input = document.getElementById("brightness-container");
let adjusment = document.querySelector(".adjustment-div");
let snap = document.querySelector(".capture-div");
let canvas = document.getElementById("canvas");
let imageData = [];
let filterButton = document.getElementById("photo-filters");
// let snap = document.querySelector("#click-photo");
// let canvas = document.querySelector("#canvas");
// let button = document.getElementById("click-photo");

let conditions = {
  Audio: true,
  video: {
    width: { min: 1100, ideal: 1200, max: 1250 },
    height: { min: 576, ideal: 728, max: 1080 },
  },
};

// adding brightness for the webcamera

brightness.addEventListener("change", function () {
  brightness_input.style.filter = "brightness(" + brightness.value + "%)";
});

// function startCamera() {
navigator.mediaDevices.getUserMedia(conditions).then((stream) => {
  video.srcObject = stream;
  video.style.brightness = brightness;
  video.play();
});

// Draw image

snap.addEventListener("click", () => {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.style.filter = filter;
  let imageUrl = canvas.toDataURL("image/jpeg");

  console.log(imageUrl);

  const img = document.createElement("img");
  img.setAttribute("src", imageUrl);
  img.style.filter = filter;
  console.log(img);

  // let urlAll = imageData.push(imageUrl);
  // console.log(urlAll);

  // let set = localStorage.setItem("image_url", JSON.stringify(imageUrl));
  // console.log(set);
});

// filter selection

filterButton.addEventListener("change", function (e) {
  e.preventDefault();
  filter = e.target.value;
  video.style.filter = filter;
});

// brightness adjusment

function bright() {
  if (adjusment.style.display === "none") {
    adjusment.style.display = "block";
  } else {
    adjusment.style.display = "none";
  }
}
