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

    (imageGallery[findImageIndex] = favObjectAssaign),
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

    (imageGallery[findImageIndex] = favObjectAssaign),
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

// image delete option eventListner function

let deleteImage = document.querySelector(".delete-option");

console.log(imageGallery);

imageGallery.splice;

deleteImage.addEventListener("click", () => {
  console.log(imageGallery[imageIndexNumber]);
  console.log(imageIndexNumber);
  let message = confirm("Are sure to delete this image?");
  if (message !== true) {
    return;
  } else {
    imageGallery.splice(imageIndexNumber, 1);
    console.log(imageGallery);
    localStorage.setItem("image_url", JSON.stringify(imageGallery));
    window.location.href =
      "../pages/snap-gallery.html?user=" + findUser["userId"];
  }
});
