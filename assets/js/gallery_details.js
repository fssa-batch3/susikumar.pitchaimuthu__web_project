let url = window.location.search;
let urlParams = new URLSearchParams(url);

console.log(urlParams);
let urlImage = urlParams.get("image");
console.log(urlImage);

// parsing gallery data for add details adding option

let imageGallery = JSON.parse(localStorage.getItem("image_url"));
console.log(imageGallery);

// Array.find(  function(variableName){} )
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

// image url element

let snapshot = document.createElement("img");
snapshot.setAttribute("src", snap["imageLink"]);
snapshot.setAttribute("id", "user-taken-still");
snapshot.setAttribute("alt", "user-taken-still");
document.querySelector(".image-div").append(snapshot);

console.log(window.location.href);

// image element creating function

let imageEditDiv = document.createElement("div");
imageEditDiv.setAttribute("class", "image-edit-option-div");

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
editButton.setAttribute("id", snap["imageId"]);
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
likeButton.setAttribute("id", snap["imageId"]);
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
shareButton.setAttribute("id", snap["imageId"]);
shareButton.setAttribute("class", "option-div");
imageEditDiv.append(shareButton);

let share_i = document.createElement("i");
share_i.setAttribute("class", "bi bi-share");
shareButton.append(share_i);

let share_p = document.createElement("p");
share_p.innerHTML = "Share";
shareButton.append(share_p);

document.querySelector(".image-option-next-option-div").append(imageEditDiv);

// image previous and next control div

// previous button

let imageControlDiv = document.createElement("div");
imageControlDiv.setAttribute("class", "image-next-option-div");

let previousButton = document.createElement("button");
previousButton.setAttribute("id", snap["imageId"]);
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
nextButton.setAttribute("id", snap["imageId"]);
nextButton.setAttribute("class", "option-div");
imageControlDiv.append(nextButton);

let next_i = document.createElement("i");
next_i.setAttribute("class", "bi bi-skip-forward-btn");
nextButton.append(next_i);

let next_p = document.createElement("p");
next_p.innerHTML = "Next";
nextButton.append(next_p);

document.querySelector(".image-option-next-option-div").append(imageControlDiv);

// image details showing div

let imageName = document.getElementById("image-name");
imageName.innerHTML = snap["imageName"];

let imageDate = document.getElementById("image-taken-date");
imageDate.innerHTML = snap["imageDate"];

let imageTime = document.getElementById("image-taken-time");
imageTime.innerHTML = snap["imageTime"];
