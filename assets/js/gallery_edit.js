// const { set } = require("husky");

let url = window.location.search;
let urlParams = new URLSearchParams(url);

console.log(urlParams);
let urlImage = urlParams.get("image");
console.log(urlImage);

let imageGallery = JSON.parse(localStorage.getItem("image_url"));
console.log(imageGallery);

// Array.find(  function(letiableName){} )
let snap = imageGallery.find(function (userObj) {
  //   userObj = {name : , "image": {}, "text": ""}

  let image = userObj["imageId"];
  console.log(image);

  if (urlImage == image) {
    return true;
  } else {
    return false;
  }
});

console.log(snap);
console.log(snap["imageLink"]);

let findUrlIndex = imageGallery.indexOf(snap);
console.log(findUrlIndex);

let urlIndexArr = [];

let snapIndex = findUrlIndex;
console.log(snapIndex);

urlIndexArr.push(snapIndex);

console.log(urlIndexArr);

document.querySelector(".option-div").addEventListener("click", () => {
  console.log("susi");
  snapIndex++;
  console.log(snapIndex);
  urlIndexArr.push(snapIndex);
});
console.log(urlIndexArr);

let snapLastImage = urlIndexArr[urlIndexArr.length - 1];
// dynamic element creation

let image = document.createElement("img");
image.setAttribute("id", imageGallery[snapLastImage]["imageId"]);
image.setAttribute("class", "user-still");
image.setAttribute("src", imageGallery[snapLastImage]["imageLink"]);
document.querySelector(".image-div").append(image);

// image changing for element div

// previous button

// let imageControlDiv = document.createElement("div");
// imageControlDiv.setAttribute("class", "image-next-option-div");

// let previousButton = document.createElement("button");
// previousButton.setAttribute("id", snap["imageId"]);
// previousButton.setAttribute("class", "option-div");
// imageControlDiv.append(previousButton);

// let previous_i = document.createElement("i");
// previous_i.setAttribute("class", "bi bi-skip-backward-btn");
// previousButton.append(previous_i);

// let previous_p = document.createElement("p");
// previous_p.innerHTML = "Previous";
// previousButton.append(previous_p);

// // next

// let nextButton = document.createElement("button");
// nextButton.setAttribute("id", snap["imageId"]);
// nextButton.setAttribute("class", "option-div");
// nextButton.setAttribute("onclick", "forwardUrlIndex()");
// imageControlDiv.append(nextButton);

// let next_i = document.createElement("i");
// next_i.setAttribute("class", "bi bi-skip-forward-btn");
// nextButton.append(next_i);

// let next_p = document.createElement("p");
// next_p.innerHTML = "Next";
// nextButton.append(next_p);

// document.querySelector(".image-option-next-option-div").append(imageControlDiv);

// normal filter element creation

let getFilterUrl = JSON.parse(localStorage.getItem("image_url"));

for (let i = 0; i < getFilterUrl.length; i++) {
  let filterDiv = document.createElement("div");
  filterDiv.setAttribute("class", "each-filter-div");

  let filterImage = document.createElement("img");
  filterImage.setAttribute("class", "filter-image");
  filterImage.setAttribute("src", getFilterUrl[i]["imageLink"]);
  filterDiv.append(filterImage);

  document.querySelector(".filter-inside-div").append(filterDiv);
}

// onclick function showing and disepearing element opject

let beautyElement = document.querySelector(".beauty-div-container");

function beauty() {
  let x = document.querySelector(".beauty-div-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// filter showing and disappearing div

function filter() {
  let x = document.querySelector(".normal-filter-option-div-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// clicking option div container

function clickAdjustment() {
  var x = document.querySelector(".clicking-option-div-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// filter showing div container

for (let i = 0; i < getFilterUrl.length; i++) {
  let filterNameImgeContainer = document.createElement("div");
  filterNameImgeContainer.setAttribute("class", "filter-image-name-div");

  let filterImageDiv = document.createElement("div");
  filterImageDiv.setAttribute("class", "filter-image-div");
  filterNameImgeContainer.append(filterImageDiv);

  let filterImage = document.createElement("img");
  filterImage.setAttribute("class", "still-filter-image");
  filterImage.setAttribute("src", getFilterUrl[i]["imageLink"]);
  filterImageDiv.append(filterImage);

  let filterNameDiv = document.createElement("div");
  filterNameDiv.setAttribute("class", "filter-name-div");
  filterNameImgeContainer.append(filterNameDiv);

  let filterName = document.createElement("p");
  filterName.setAttribute("class", "filter-name");
  filterName.innerHTML = "Filter";
  filterNameDiv.append(filterName);

  document
    .querySelector(".filter-div-showing-container")
    .append(filterNameImgeContainer);
}

// add filter div

function addFilter() {
  let y = document.querySelector(".clicking-filter-showing-div-container");
  console.log(y);

  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
