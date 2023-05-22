// const { set } = require("husky");

let url = window.location.search;
let urlParams = new URLSearchParams(url);

console.log(urlParams);
let urlImage = urlParams.get("image");
console.log(urlImage);

let imageGallery = JSON.parse(localStorage.getItem("image_url"));
console.log(imageGallery);

// Array.find(  function(letiableName){} )
let snap = imageGallery.find((e) => e["imageId"] == urlImage);

console.log(snap);
console.log(snap["imageLink"]);

let findUrlIndex = imageGallery.indexOf(snap);
console.log(findUrlIndex);

let urlIndexArr = [];

let snapIndex = findUrlIndex;
console.log(snapIndex);

urlIndexArr.push(snapIndex);

document.querySelector(".option-div").addEventListener("click", () => {
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

// image delete option eventListner function

let deleteImage = document.querySelector(".delete-button");

console.log(imageGallery);

deleteImage.addEventListener("click", () => {
  console.log(imageGallery);
  let message = confirm("Are sure to delete this image?");
  if (message !== true) {
    return;
  } else {
    // recently deleting image adding function to the database

    let deleteImageArr = [];

    if (localStorage.getItem("recentDeleteImageData") !== null) {
      deleteImageArr = JSON.parse(
        localStorage.getItem("recentDeleteImageData")
      );
    }

    let deleteObject = {
      imageName: snap["imageName"],
      imageLink: snap["imageLink"],
      imageDate: snap["imageDate"],
      imageId: snap["imageId"],
      ImageDate: snap["imageDate"],
      imageTime: snap["imageTime"],
      userId: snap["userId"],
    };

    deleteImageArr.push(deleteObject);

    localStorage.setItem(
      "recentDeleteImageData",
      JSON.stringify(deleteImageArr)
    );

    // using splice function for to remove the image from the image gallery

    imageGallery.splice(findUrlIndex, 1);
    console.log(imageGallery);

    localStorage.setItem("image_url", JSON.stringify(imageGallery));
    window.location.href =
      "../pages/snap-gallery.html?user=" + findUser["userId"];
  }
});
