let url = window.location.search;
let urlParams = new URLSearchParams(url);

console.log(urlParams);
let urlImage = urlParams.get("image");
console.log(urlImage);

// parsing gallery data for add details adding option

let imageGallery = JSON.parse(localStorage.getItem("image_url"));
console.log(imageGallery);

// Array.find(  function(variableName){} )

let snap = imageGallery.find((i) => i["imageId"] == urlImage);

console.log(snap);

// image index number finding function

let imageIndexNumber = imageGallery.indexOf(snap);
console.log(imageIndexNumber);

// image changing function creation according to the image and previous and next

function previousImage() {
  imageIndexNumber--;
  if (imageIndexNumber < 0) {
    imageIndexNumber = imageGallery.length - 1;
  }
  updateImageDisplay(imageGallery, imageIndexNumber);
}

// Function to change to the next image
function nextImage() {
  console.log("susi");
  imageIndexNumber++;
  if (imageIndexNumber >= imageGallery.length) {
    imageIndexNumber = 0;
  }
  updateImageDisplay(imageGallery, imageIndexNumber);
}

// image url element

function updateImageDisplay(imageGallery, imageIndexNumber) {
  let imageDiv = document.querySelector("#user-taken-still");
  console.log(imageDiv);

  if (imageDiv !== null) {
    let removeElements = document.querySelectorAll(".removeElement");

    for (let j = 0; j < removeElements.length; j++) {
      removeElements[j].remove();
    }
  }

  console.log(imageIndexNumber);
  let snapshot = document.createElement("img");
  snapshot.setAttribute("src", imageGallery[imageIndexNumber]["imageLink"]);
  snapshot.setAttribute("id", "user-taken-still");
  snapshot.setAttribute("class", "removeElement");
  snapshot.setAttribute("alt", "user-taken-still");
  document.querySelector(".image-div").append(snapshot);

  // image element creating function

  let imageEditDiv = document.createElement("div");
  imageEditDiv.setAttribute("class", "image-edit-option-div removeElement");

  let a = document.createElement("a");
  a.setAttribute(
    "href",
    "../pages/snap-edit.html?user=" +
      findUser["userId"] +
      "&image=" +
      snap["imageId"]
  );
  imageEditDiv.append(a);

  let editButton = document.createElement("button");
  editButton.setAttribute("id", imageGallery[imageIndexNumber]["imageId"]);
  editButton.setAttribute("class", "option-div");
  a.append(editButton);

  let edit_i = document.createElement("i");
  edit_i.setAttribute("class", "bi bi-pencil");
  editButton.append(edit_i);

  let edit_p = document.createElement("p");
  edit_p.innerHTML = "Edit";
  editButton.append(edit_p);

  // like button

  let likeButton = document.createElement("button");
  likeButton.setAttribute("id", imageGallery[imageIndexNumber]["imageId"]);
  likeButton.setAttribute("class", "option-div like-option");
  imageEditDiv.append(likeButton);

  let like_i = document.createElement("i");
  like_i.setAttribute("class", "bi bi-heart");
  likeButton.append(like_i);

  let like_p = document.createElement("p");
  like_p.innerHTML = "Like";
  likeButton.append(like_p);

  // share button

  let shareButton = document.createElement("button");
  shareButton.setAttribute("id", imageGallery[imageIndexNumber]["imageId"]);
  shareButton.setAttribute("class", "option-div downloadButton");
  imageEditDiv.append(shareButton);

  let share_i = document.createElement("i");
  share_i.setAttribute("class", "bi bi-x-diamond");
  shareButton.append(share_i);

  let share_p = document.createElement("p");
  share_p.innerHTML = "Download";
  shareButton.append(share_p);

  document.querySelector(".image-option-next-option-div").append(imageEditDiv);

  // image previous and next control div

  // previous button

  let imageControlDiv = document.createElement("div");
  imageControlDiv.setAttribute("class", "image-next-option-div removeElement");

  let previousButton = document.createElement("button");
  previousButton.setAttribute("id", imageGallery[imageIndexNumber]["imageId"]);
  previousButton.setAttribute("onclick", "previousImage()");
  previousButton.setAttribute("class", "option-div");
  imageControlDiv.append(previousButton);

  let previous_i = document.createElement("i");
  previous_i.setAttribute("class", "bi bi-skip-backward-btn");
  previousButton.append(previous_i);

  let previous_p = document.createElement("p");
  previous_p.innerHTML = "Previous";
  previousButton.append(previous_p);

  // next

  let nextButton = document.createElement("button");
  nextButton.setAttribute("id", imageGallery[imageIndexNumber]["imageId"]);
  nextButton.setAttribute("class", "option-div");
  nextButton.setAttribute("onclick", "nextImage()");
  imageControlDiv.append(nextButton);

  let next_i = document.createElement("i");
  next_i.setAttribute("class", "bi bi-skip-forward-btn");
  nextButton.append(next_i);

  let next_p = document.createElement("p");
  next_p.innerHTML = "Next";
  nextButton.append(next_p);

  document
    .querySelector(".image-option-next-option-div")
    .append(imageControlDiv);

  // image details showing div

  let imageName = document.getElementById("image-name");
  imageName.innerHTML = imageGallery[imageIndexNumber]["imageName"];

  let imageDate = document.getElementById("image-taken-date");
  imageDate.innerHTML = imageGallery[imageIndexNumber]["imageDate"];

  let imageTime = document.getElementById("image-taken-time");
  imageTime.innerHTML = imageGallery[imageIndexNumber]["imageTime"];
}

updateImageDisplay(imageGallery, imageIndexNumber);
