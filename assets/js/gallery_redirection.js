// all photo showing add eventlIstener function
let imageContainer = document.querySelector(".second-section-container-div");

// date getting elements

let filterButton = document.querySelector(".filter-button");

// filter button add eventListener

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

filterButton.addEventListener("click", () => {
  let from = new Date(document.querySelector("#from").value);
  let to = new Date(document.querySelector("#to").value);

  let dateArray = [];

  while (from <= to) {
    let dateAndYear = new Date(from);
    let datesf =
      dateAndYear.getMonth() +
      1 +
      "/" +
      dateAndYear.getDate() +
      "/" +
      dateAndYear.getFullYear();
    console.log(datesf);
    dateArray.push(datesf);
    from = from.addDays(1);
  }

  console.log(dateArray);

  let filterImage = [];
  console.log(images);
  console.log(images[0]["imageDate"]);

  for (let i = 0; i < dateArray.length; i++) {
    for (let j = 0; j < images.length; j++) {
      if (images[j]["imageDate"] == dateArray[i]) {
        filterImage.push(images[j]);
      }
    }
  }

  console.log(filterImage);

  if (imageContainer.hasChildNodes()) {
    let image_div = document.querySelectorAll(".card-container");

    for (let i = 0; i < image_div.length; i++) {
      image_div[i].remove();
    }
  }

  for (let i = 0; i < filterImage.length; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "card-container");
    imageContainer.setAttribute("id", filterImage[i]["imageId"]);

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
        filterImage[i]["imageId"]
    );
    image_name_container.append(a);
    let image = document.createElement("img");
    image.setAttribute("id", filterImage[i]["imageId"]);
    image.setAttribute("src", filterImage[i]["imageLink"]);
    image.setAttribute("alt", "userSnaps");
    image.setAttribute("class", "taking-image");
    a.append(image);

    let image_name = document.createElement("p");
    image_name.setAttribute("class", "snap-name");
    image_name.innerHTML = filterImage[i]["imageName"];
    image_name_container.append(image_name);

    document
      .querySelector(".second-section-container-div")
      .append(imageContainer);
  }
});

// page redirection elements

let goToCamera = document.querySelector("#go-to-camera");
let favourite_image = document.querySelector(".favourite-photo-option-li");
let latest = document.querySelector(".latest-photo-option-li");
let recent = document.querySelector(".recent-photo-option-li");
let allPhoto = document.querySelector(".all-photo-option-li");

let imageCard = document.querySelectorAll(".card-container");

allPhoto.addEventListener("click", () => {
  if (imageContainer.hasChildNodes()) {
    let image_div = document.querySelectorAll(".card-container");
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
  if (imageContainer.hasChildNodes()) {
    let image_div = document.querySelectorAll(".card-container");

    for (let i = 0; i < image_div.length; i++) {
      image_div[i].remove();
    }
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

latest.addEventListener("click", () => {
  if (imageContainer.hasChildNodes()) {
    let image_div = document.querySelectorAll(".card-container");

    for (let i = 0; i < image_div.length; i++) {
      image_div[i].remove();
    }
  }
  let IST = new Date();
  console.log(IST);
  let priorDate = new Date(new Date().setDate(IST.getDate() - 7));

  console.log(priorDate);

  let endDate =
    priorDate.getMonth() +
    1 +
    "/" +
    priorDate.getDate() +
    "/" +
    priorDate.getFullYear();

  console.log(endDate);

  let latestPicArray = [];

  let today = moment().format("l");
  console.log(today);

  Date.prototype.extraDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  while (endDate <= today) {
    let latesetDate = new Date(endDate);
    let latestPic =
      latesetDate.getMonth() +
      1 +
      "/" +
      latesetDate.getDate() +
      "/" +
      latesetDate.getFullYear();
    console.log(latestPic);
    latestPicArray.push(latestPic);
    endDate = endDate.extraDays(1);
  }

  console.log(latestPicArray);
});

// recently deleted images add eventListener function

recent.addEventListener("click", () => {});

// camera page direction location

goToCamera.addEventListener("click", () => {
  window.location.href = "../pages/webcam.html?user=" + findUser["userId"];
});
