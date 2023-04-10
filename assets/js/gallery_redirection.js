// date filter image funtion

// date getting elements

let filterButton = document.querySelector(".filter-button");

// filter button add eventListener

filterButton.addEventListener("click", () => {
  let from = new Date(document.querySelector("#from").value);
  let to = new Date(document.querySelector("#to").value);

  let timeDifference = to.getTime() - from.getTime();
  console.log(timeDifference);
  let dayDifference = timeDifference / (1000 * 3600 * 24);
  console.log(dayDifference);

  // between dates

  let days = [];

  while (from.isSameOrBefore(to)) {
    days.push(from.clone().format("DD/MM/YYYY"));
    from.add(1, "days");
  }
  console.log(days);
});

// page redirection elements

let goToCamera = document.querySelector("#go-to-camera");
let favourite_image = document.querySelector(".favourite-photo-option-li");
let latest = document.querySelector(".latest-photo-option-li");
let recent = document.querySelector(".recent-photo-option-li");
let allPhoto = document.querySelector(".all-photo-option-li");

let imageCard = document.querySelectorAll(".card-container");

// camera page direction location

goToCamera.addEventListener("click", () => {
  window.location.href = "../pages/webcam.html?user=" + findUser["userId"];
});

// all photo showing add eventlIstener function

allPhoto.addEventListener("click", () => {
  let imageContainer = document.querySelector("second-section-container-div");
  let image_div = document.querySelectorAll(".card-container");
  console.log(image_div);

  if (imageContainer !== null) {
    for (let i = 0; i < image_div.length; i++) {
      image_div[i].remove();
    }
  }

  for (let i = 0; i < imageGallery.length; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "card-container");
    imageContainer.setAttribute("id", imageGallery[i]["imageId"]);

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
        imageGallery[i]["imageId"]
    );
    image_name_container.append(a);
    let image = document.createElement("img");
    image.setAttribute("id", imageGallery[i]["imageId"]);
    image.setAttribute("src", imageGallery[i]["imageLink"]);
    image.setAttribute("alt", "userSnaps");
    image.setAttribute("class", "taking-image");
    a.append(image);

    let image_name = document.createElement("p");
    image_name.setAttribute("class", "snap-name");
    image_name.innerHTML = imageGallery[i]["imageName"];
    image_name_container.append(image_name);

    document
      .querySelector(".second-section-container-div")
      .append(imageContainer);
  }
});

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
