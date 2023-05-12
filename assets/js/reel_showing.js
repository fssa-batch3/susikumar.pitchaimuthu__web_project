let reelData = JSON.parse(localStorage.getItem("reelUrlData"));
console.log(reelData);

// creating a url params function to find the reel

let UrlReel = window.location.search;

let ReelParams = new URLSearchParams(UrlReel);

let passingReelId = ReelParams.get("reel");
console.log(passingReelId);

// creating a find function to find the reel

let currentReel = reelData.find((e) => e["reelId"] == passingReelId);
console.log(currentReel);

let video = document.createElement("video");
video.setAttribute("class", "reel-video");

let source = document.createElement("source");
source.setAttribute("src", currentReel["reel_url"]);
source.setAttribute("type", "video/mp4");
video.append(source);

document.querySelector(".reel-inside-div").append(video);

// writing function for videos

document.querySelector(".reel-video").play();
// reelVideo.muted = "muted"

// reel delete option

let reelDele = document.createElement("i");
reelDele.setAttribute("class", "bi bi-x-octagon-fill");
reelDele.setAttribute("id", currentReel["reelId"]);
document.querySelector(".reel-delete-div").append(reelDele);

let reelOption = document.querySelector(".bi-x-octagon-fill");

reelOption.addEventListener("click", (e) => {
  console.log(reelOption["id"]);

  let findReel = reelData.find((rFind) => rFind["reelId"] == reelOption["id"]);
  console.log(findReel);

  let findIndexReel = reelData.indexOf(findReel);
  console.log(findIndexReel);

  let message = confirm("Are sure to delete this reel");

  if (message !== true) {
    return;
  } else {
    reelData.splice(findIndexReel, 1);
    localStorage.setItem("reelUrlData", JSON.stringify(reelData));
  }
});
