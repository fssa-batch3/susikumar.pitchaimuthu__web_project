let imageGallery = JSON.parse(localStorage.getItem("image_url"));

for (let i = 0; i < imageGallery.length; i++) {
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "card-container");
  imageContainer.setAttribute("id", imageGallery[i]["imageId"]);

  //
  let image_name_container = document.createElement("div");
  image_name_container.setAttribute("class", "image-name-container");
  imageContainer.append(image_name_container);

  const a = document.createElement("a");
  a.setAttribute(
    "href",
    "../pages/snap-details.html?image=" + imageGallery[i]["imageId"]
  );
  image_name_container.append(a);
  const image = document.createElement("img");
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

// saving the image id for the update and feature

function deleteImage(imageId) {
  console.log(imageId);

  let imageIdArr = [];

  if (localStorage.getItem("imageIdData") !== null) {
    imageIdArr = JSON.parse(localStorage.getItem("imageIdData"));
  }

  let imageIdObject = {
    imageId: imageId,
  };
  imageIdArr.push(imageIdObject);

  localStorage.setItem("imageIdData", JSON.stringify(imageIdArr));
}
