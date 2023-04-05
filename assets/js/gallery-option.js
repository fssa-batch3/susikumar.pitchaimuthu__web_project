// side bar options elements

let allPhoto = document.querySelector(".all-photo-option-li");
let latest = document.querySelector(".latest-photo-option-li");
let favourite = document.querySelector(".favourite-photo-option-li");
let recentDelete = document.querySelector(".recent-photo-option-li");

// element creation eventListener function for all photo

allPhoto.addEventListener("click", () => {
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
});
