let imageGallery = JSON.parse(localStorage.getItem("image_url"));

for (let i = 0; i < imageGallery.length; i++) {
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "card-container");
  imageContainer.setAttribute("id", imageGallery[i]["imageId"]);

  //
  let image_name_container = document.createElement("div");
  image_name_container.setAttribute("class", "image-name-container");
  imageContainer.append(image_name_container);

  const image = document.createElement("img");
  image.setAttribute("src", imageGallery[i]["imageLink"]);
  image.setAttribute("alt", "userSnaps");
  image.setAttribute("class", "taking-image");
  image_name_container.append(image);

  let image_name = document.createElement("p");
  image_name.setAttribute("class", "snap-name");
  image_name.innerHTML = imageGallery[i]["imageName"];
  image_name_container.append(image_name);

  //

  let hide_container = document.createElement("div");
  hide_container.setAttribute("class", "hide-image-details-container");
  imageContainer.append(hide_container);

  //

  let date_div = document.createElement("div");
  date_div.setAttribute("class", "date-showing-div");
  hide_container.append(date_div);

  let date_h3 = document.createElement("h3");
  date_h3.setAttribute("class", "photo-date");
  date_h3.innerHTML = "14/09/2050 Saturday";
  date_div.append(date_h3);

  //

  let option_div = document.createElement("div");
  option_div.setAttribute("class", "side-option-div");
  hide_container.append(option_div);

  let heart_div = document.createElement("div");
  heart_div.setAttribute("class", "heart-div");
  option_div.append(heart_div);

  let heart_i = document.createElement("i");
  heart_i.setAttribute("class", "bi bi-heart");
  heart_div.append(heart_i);

  let three_dot_div = document.createElement("div");
  three_dot_div.setAttribute("class", "three-dot-div");
  three_dot_div.setAttribute("id", imageGallery[i]["imageId"]);
  // three_dot_div.setAttribute("onclick", "deleteImage(this.id)");
  option_div.append(three_dot_div);

  const a = document.createElement("a");
  a.setAttribute(
    "href",
    "../pages/snap-details.html?image=" + imageGallery[i]["imageName"]
  );
  three_dot_div.append(a);

  let three_dot_i = document.createElement("i");
  three_dot_i.setAttribute("class", "bi bi-three-dots");
  a.append(three_dot_i);

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
