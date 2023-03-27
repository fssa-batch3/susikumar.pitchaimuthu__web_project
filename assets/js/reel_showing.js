let reelData = JSON.parse(localStorage.getItem("reelUrlData"));
console.log(reelData);

let video = document.createElement("video");
video.setAttribute("class", "reel-video");

let source = document.createElement("source");
source.setAttribute("src", reelData[0]["reel_url"]);
source.setAttribute("type", "video/mp4");
video.append(source);

document.querySelector(".reel-inside-div").append(video);

// writing function for videos

document.querySelector(".reel-video").play();
// reelVideo.muted = "muted"

// reel delete option

let reelDele = document.createElement("i");
reelDele.setAttribute("class", "bi bi-shield-x");
reelDele.setAttribute("id", reelData[0]["reelId"]);
document.querySelector(".reel-delete-div").append(reelDele);

let reelOption = document.querySelector(".bi-shield-x");

reelOption.addEventListener("click", (e) => {
  console.log(reelOption["id"]);

  let findReel = reelData.find((rFind) => rFind["reelId"] == reelOption["id"]);
  console.log(findReel);

  let findIndexReel = reelData.indexOf(findReel);
  console.log(findIndexReel);

  let message = confirm("Are sure to Delete your account in Fresh Nest?");

  if (message !== true) {
    return;
  } else {
    reelData.splice(findIndexReel, 1);
    localStorage.setItem("reelUrlData", JSON.stringify(reelData));
  }
});
