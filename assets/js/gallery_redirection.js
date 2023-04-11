// all photo showing add eventlIstener function
let imageContainer = document.querySelector(".second-section-container-div");

// date getting elements

let filterButton = document.querySelector(".filter-button");

// filter button add eventListener

filterButton.addEventListener("click", () => {
  let from = new Date(document.querySelector("#from").value);
  let to = new Date(document.querySelector("#to").value);

  let dateArray = [];

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  console.log(from);
  console.log(to);

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

  let today = moment().format("l");
  console.log(today);

  let IST = new Date();
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

  let currentDate = new Date(endDate);

  while (currentDate <= new Date(today)) {
    let latesetDate = new Date(currentDate);
    let latestPic =
      latesetDate.getMonth() +
      1 +
      "/" +
      latesetDate.getDate() +
      "/" +
      latesetDate.getFullYear();
    console.log(latestPic);
    latestPicArray.push(latestPic);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log(latestPicArray);

  // Creating for loop function find the all latest pics

  let filterLatestImage = [];

  for (let i = 0; i < latestPicArray.length; i++) {
    for (let j = 0; j < images.length; j++) {
      if (images[j]["imageDate"] == latestPicArray[i]) {
        filterLatestImage.push(images[j]);
      }
    }
  }
  console.log(filterLatestImage);

  for (let i = 0; i < filterLatestImage.length; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "card-container");
    imageContainer.setAttribute("id", filterLatestImage[i]["imageId"]);

    //
    let image_name_container = document.createElement("div");
    image_name_container.setAttribute("class", "image-name-container");
    imageContainer.append(image_name_container);

    let image = document.createElement("img");
    image.setAttribute("id", filterLatestImage[i]["imageId"]);
    image.setAttribute("src", filterLatestImage[i]["imageLink"]);
    image.setAttribute("alt", "userSnaps");
    image.setAttribute("class", "taking-image");
    image_name_container.append(image);

    let image_name = document.createElement("p");
    image_name.setAttribute("class", "snap-name");
    image_name.innerHTML = filterLatestImage[i]["imageName"];
    image_name_container.append(image_name);

    document
      .querySelector(".second-section-container-div")
      .append(imageContainer);
  }
});

// recently deleted images add eventListener function

recent.addEventListener("click", () => {
  if (imageContainer.hasChildNodes()) {
    let image_div = document.querySelectorAll(".card-container");
    for (let i = 0; i < image_div.length; i++) {
      image_div[i].remove();
    }
  }

  let now = moment().format("l");
  console.log(now);

  let last = new Date();
  let lastDate = new Date(new Date().setDate(last.getDate() - 28));

  console.log(lastDate);

  let destiDate =
    lastDate.getMonth() +
    1 +
    "/" +
    lastDate.getDate() +
    "/" +
    lastDate.getFullYear();

  console.log(destiDate);

  let recentDeleteDateArray = [];

  let startDate = new Date(destiDate);

  while (startDate <= new Date(now)) {
    let forDate = new Date(startDate);
    let latestDeletePic =
      forDate.getMonth() +
      1 +
      "/" +
      forDate.getDate() +
      "/" +
      forDate.getFullYear();
    console.log(latestDeletePic);
    recentDeleteDateArray.push(latestDeletePic);
    startDate.setDate(startDate.getDate() + 1);
  }

  console.log(recentDeleteDateArray);

  // Creating for loop function get the recent delete pics

  let recentImageData = JSON.parse(
    localStorage.getItem("recentDeleteImageData")
  );
  console.log(recentImageData);

  let filterDeleteImage = [];

  for (let i = 0; i < recentDeleteDateArray.length; i++) {
    for (let j = 0; j < recentImageData.length; j++) {
      if (recentImageData[j]["imageDate"] == recentDeleteDateArray[i]) {
        filterDeleteImage.push(recentImageData[j]);
      }
    }
  }

  console.log(filterDeleteImage);

  for (let i = 0; i < filterDeleteImage.length; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "card-container");
    imageContainer.setAttribute("id", filterDeleteImage[i]["imageId"]);

    //
    let image_name_container = document.createElement("div");
    image_name_container.setAttribute("class", "image-name-container");
    imageContainer.append(image_name_container);

    let image = document.createElement("img");
    image.setAttribute("id", filterDeleteImage[i]["imageId"]);
    image.setAttribute("src", filterDeleteImage[i]["imageLink"]);
    image.setAttribute("alt", "userSnaps");
    image.setAttribute("class", "taking-image");
    image_name_container.append(image);

    let image_name = document.createElement("p");
    image_name.setAttribute("class", "snap-name");
    image_name.innerHTML = filterDeleteImage[i]["imageName"];
    image_name_container.append(image_name);

    document
      .querySelector(".second-section-container-div")
      .append(imageContainer);
  }
});

// camera page direction location

goToCamera.addEventListener("click", () => {
  window.location.href = "../pages/webcam.html?user=" + findUser["userId"];
});
