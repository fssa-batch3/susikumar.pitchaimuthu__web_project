const imageContainer = document.createElement("div");
imageContainer.setAttribute("class", "section-second-image-container");

const imageDiv = document.createElement("div");
imageDiv.setAttribute("class", "image-div");
imageContainer.append(imageDiv);

const a = document.createElement("a");
a.setAttribute(
  "href",
  "http://127.0.0.1:5500/pages/gallery-edit.html?image=" +
    imageGallery[i]["image"]
);
imageDiv.append(a);

const image = document.createElement("img");
image.setAttribute("src", imageGallery[i]["image"]);
image.setAttribute("class", "image-div-image");
a.append(image);
