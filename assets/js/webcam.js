let video = document.querySelector("#start");
let adjusment = document.querySelector(".adjustment-div");
let snap = document.querySelector(".capture-div");
let canvas = document.getElementById("canvas");

let filterButton = document.getElementById("photo-filters");

let conditions = {
  Audio: true,
  video: {
    width: { min: 1100, ideal: 1200, max: 1250 },
    height: { min: 576, ideal: 728, max: 1080 },
  },
};

// adding brightness for the webcamera

// brightness.addEventListener("change", function () {
//   brightness_input.style.filter = "brightness(" + brightness.value + "%)";
// });

const brightnessInput = document.getElementById("brightnessRange");
brightnessRange.addEventListener("input", () => {
  const brightnessValue = brightnessRange.value;
  video.style.filter = `brightness(${brightnessValue}%)`;
});
// function startCamera() {
navigator.mediaDevices.getUserMedia(conditions).then((stream) => {
  video.srcObject = stream;
  video.play();
});

// Draw image

snap.addEventListener("click", () => {
  let imageData = [];

  if (localStorage.getItem("image_url") !== null) {
    imageData = JSON.parse(localStorage.getItem("image_url"));
  }

  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

  let checkFilter = canvas.style.filter;
  if (checkFilter) {
    canvas.style.filter = filter;
  }

  let imageUrl = canvas.toDataURL("image/jpeg");
  // console.log(imageUrl);
  let imageName = Date.now();

  let imageDate = moment().format("l");
  let imageTime = moment().format("LT");
  console.log(imageTime);

  let imageObject = {
    imageLink: imageUrl,
    imageName: "image" + imageName,
    imageId: imageName,
    imageDate: imageDate,
    imageTime: imageTime,
    userId: findUser["userId"],
  };
  console.log(imageObject);

  imageData.push(imageObject);

  localStorage.setItem("image_url", JSON.stringify(imageData));
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

// gallery page urlparameter sending definition code

let gallery = document.querySelector(".gallery");

gallery.addEventListener("click", () => {
  window.location.href =
    "../pages/snap-gallery.html?user=" + findUser["userId"];
});
