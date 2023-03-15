let url = window.location.search;
let urlParams = new URLSearchParams(url);

console.log(urlParams);
let urlImage = urlParams.get("image");
console.log(urlImage);

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
console.log(snap["imageLink"]);

// dynamic element creation

let image = document.createElement("img");
image.setAttribute("id", snap["imageId"]);
image.setAttribute("class", "user-still");
image.setAttribute("src", snap["imageLink"]);
document.querySelector(".image-div").append(image);

// image changing for element div

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
