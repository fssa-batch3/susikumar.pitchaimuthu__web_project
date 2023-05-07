// like showing function add eventListener

let likeOption = document.querySelector(".like-option");
console.log(likeOption);

let likeIcon = document.querySelector(".bi-heart");

// add unique color to the favourite element

console.log(snap["imageFav"]);

if (snap["imageFav"]) {
  likeOption.style.backgroundColor = "red";
  likeIcon.style.color = "white";
}

// likeOption.addEventListener("mouseenter", () => {
//   likeOption.style.backgroundColor = "red";
//   likeIcon.style.color = "white";
// });

// likeOption.addEventListener("mouseleave", () => {
//   likeOption.style.backgroundColor = "white";
//   likeIcon.style.color = "black";
// });

// click to change the color

likeOption.addEventListener("click", () => {
  if (likeOption.style.backgroundColor === "transparent") {
    likeOption.style.backgroundColor = "red";
    likeIcon.style.color = "white";

    let imageFavObject = {
      imageFav: "favourite",
    };

    let favObjectAssaign = Object.assign(snap, imageFavObject);
    console.log(favObjectAssaign);

    let findImageIndex = imageGallery.indexOf(snap);
    console.log(findImageIndex);

    imageGallery[findImageIndex] = favObjectAssaign;

    localStorage.setItem("image_url", JSON.stringify(imageGallery));
  } else {
    likeOption.style.backgroundColor = "transparent";
    likeIcon.style.color = "black";
    let imageFavObject = {
      imageFav: null,
    };

    let favObjectAssaign = Object.assign(snap, imageFavObject);
    console.log(favObjectAssaign);

    let findImageIndex = imageGallery.indexOf(snap);
    console.log(findImageIndex);

    imageGallery[findImageIndex] = favObjectAssaign;

    localStorage.setItem("image_url", JSON.stringify(imageGallery));
  }

  // let imageFavObject = {
  //   imageFav: "favourite",
  // };

  // let favObjectAssaign = Object.assign(snap, imageFavObject);
  // console.log(favObjectAssaign);

  // let findImageIndex = imageGallery.indexOf(snap);
  // console.log(findImageIndex);

  // (imageGallery[findImageIndex] = favObjectAssaign),
  //   localStorage.setItem("image_url", JSON.stringify(imageGallery));
});

// Image download option

async function downloadImage(url, fileName) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.download = fileName;
    link.href = URL.createObjectURL(blob);
    link.click();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get the to pass to the download funciton
let clickImage = imageGallery[imageIndexNumber]["imageLink"];
let clickName = imageGallery[imageIndexNumber]["imageName"];
let downloadButton = document.querySelector(".downloadButton");

downloadButton.addEventListener("click", async function () {
  try {
    await downloadImage(clickImage, clickName);
    console.log("Image downloaded successfully");
  } catch (error) {
    console.error(error);
  }
});
