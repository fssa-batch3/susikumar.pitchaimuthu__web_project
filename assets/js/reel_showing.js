let reelData = JSON.parse(localStorage.getItem("reelUrlData"));
console.log(reelData);

// creating a url params function to find the reel

let UrlReel = window.location.search;

let ReelParams = new URLSearchParams(UrlReel);

let passingReelId = ReelParams.get("user");
console.log(passingReelId);

// creating a find function to find the reel

let currentReel;

for (let reelUserDatas of reelData) {
  for (let reelInside of reelUserDatas) {
    if (reelInside["reelUser"] == passingReelId) {
      currentReel = reelUserDatas;
    }
  }
}

console.log(currentReel);

const reelInsideDiv = document.querySelector(".reel-inside-div");
const rangeInputDiv = document.querySelector(".range-input-div");
let currentIndex = 0; // Track the index of the current video

function createVideoPlayer(index) {
  const reel = currentReel[index];

  let rangeInput = document.createElement("input");
  rangeInput.setAttribute("type", "range");
  rangeInput.setAttribute("class", "range-input");
  rangeInputDiv.append(rangeInput);

  let video = document.createElement("video");
  video.setAttribute("class", "reel-video");

  let source = document.createElement("source");
  source.setAttribute("src", reel.reel_url);
  source.setAttribute("type", "video/mp4");
  video.append(source);

  reelInsideDiv.innerHTML = ""; // Clear previous video

  reelInsideDiv.append(video);

  // Wait for the metadata to load
  video.onloadedmetadata = function () {
    const duration = video.duration;
    rangeInput.max = duration;

    function updateProgress() {
      const currentTime = video.currentTime;
      rangeInput.value = currentTime;
      requestAnimationFrame(updateProgress);
    }

    video.addEventListener("timeupdate", updateProgress);

    rangeInput.addEventListener("input", function () {
      const seekTime = parseFloat(rangeInput.value);
      video.currentTime = seekTime;
    });

    video.onended = function () {
      // Play the next video if there are more videos in the array
      if (index + 1 < currentReel.length) {
        currentIndex = index + 1;
        createVideoPlayer(currentIndex);
      } else {
        video.style.display = "none"; // Hide the last video
      }
    };

    video.play();
  };
}

createVideoPlayer(currentIndex);

// writing function for videos

// document.querySelector(".reel-video").play();
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
