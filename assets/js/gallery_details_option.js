// like showing function add eventListener

try {
  let likeOption = document.querySelector(".like-option");
  console.log(likeOption);

  let likeIcon = document.querySelector(".bi-heart");

  // add unique color to the favourite element

  console.log(snap["imageFav"]);

  if (snap["imageFav"]) {
    likeOption.style.backgroundColor = "red";
    likeIcon.style.color = "white";
  }
} catch (error) {
  console.log("An error occured while show favourite :", error);
}

// click to change the color

likeOption.addEventListener("click", () => {
  try {
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
  } catch (error) {
    console.log("An error occured while create image element :", error);
  }
});

// Image download option

async function downloadImage(url, fileName) {
  try {
    let response = await fetch(url);
    let blob = await response.blob();
    let link = document.createElement("a");
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

downloadButton.addEventListener("click", function () {
  downloadImage(clickImage, clickName)
    .then(() => {
      console.log("Image downloaded successfully");
    })
    .catch((error) => {
      console.error(error);
    });
});
