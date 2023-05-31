let images = JSON.parse(localStorage.getItem("image_url"));

let imageGallery = images.filter((e) => e["userId"] == findUser["userId"]);

try {
  for (let imagesGall of imageGallery) {
    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "card-container");
    imageContainer.setAttribute("id", imagesGall["imageId"]);

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
        imagesGall["imageId"]
    );
    image_name_container.append(a);
    let image = document.createElement("img");
    image.setAttribute("id", imagesGall["imageId"]);
    image.setAttribute("src", imagesGall["imageLink"]);
    image.setAttribute("alt", "userSnaps");
    image.setAttribute("class", "taking-image");
    a.append(image);

    let image_name = document.createElement("p");
    image_name.setAttribute("class", "snap-name");
    image_name.innerHTML = imagesGall["imageName"];
    image_name_container.append(image_name);

    document
      .querySelector(".second-section-container-div")
      .append(imageContainer);
  }
} catch (error) {
  console.log("An error occured while show the images :", error);
}
