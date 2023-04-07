// date filter image funtion

// date getting elements
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let filterButton = document.querySelector(".filter-button");

// filter button add eventListener

filterButton.addEventListener("click", (from, to) => {
  let diffrence = Math.abs(from - to);
  console.log(diffrence);
});

// page redirection elements

let goToCamera = document.querySelector("#go-to-camera");
let favourite_image = document.querySelector(".favourite-photo-option-li");
let latest = document.querySelector(".latest-photo-option-li");
let recent = document.querySelector(".recent-photo-option-li");

// camera page direction location

goToCamera.addEventListener("click", () => {
  window.location.href = "../pages/webcam.html?user=" + findUser["userId"];
});
let image_div = document.querySelectorAll(".card-container");

// favourite images option add eventlistner function

favourite_image.addEventListener("click", () => {
  for (let i = 0; i < image_div.length; i++) {
    image_div[i].remove();
  }

  let favImages = images.filter((e) => e["imageFav"] == "favourite");
  console.log(favImages);

  for (let i = 0; i < favImages.length; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "card-container");
    imageContainer.setAttribute("id", favImages[i]["imageId"]);

    //
    let image_name_container = document.createElement("div");
    image_name_container.setAttribute("class", "image-name-container");
    imageContainer.append(image_name_container);

    let a = document.createElement("a");
    a.setAttribute(
      "href",
      "../pages/snap-details.html?user=" +
        findUser["userId"] +
        "&image=" +
        favImages[i]["imageId"]
    );
    image_name_container.append(a);
    let image = document.createElement("img");
    image.setAttribute("id", favImages[i]["imageId"]);
    image.setAttribute("src", favImages[i]["imageLink"]);
    image.setAttribute("alt", "userSnaps");
    image.setAttribute("class", "taking-image");
    a.append(image);

    let image_name = document.createElement("p");
    image_name.setAttribute("class", "snap-name");
    image_name.innerHTML = favImages[i]["imageName"];
    image_name_container.append(image_name);

    document
      .querySelector(".second-section-container-div")
      .append(imageContainer);
  }
});

// latest images showing add eventListener function

latest.addEventListener("click", () => {});

// recently deleted images add eventListener function

recent.addEventListener("click", () => {});
