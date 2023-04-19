// creating function for creating a reel data

let reelInput = document.querySelector(".reel-input");

console.log(reelInput);

reelInput.addEventListener("change", function (event) {
  event.preventDefault();
  let file = this.files[0];
  let reader = new FileReader(file);
  console.log(reader);
  //  Reading the video file
  console.log("susi");
  reader.onload = function (event) {
    let src = event.target.result;

    // reel data store

    let reelArr = [];

    if (localStorage.getItem("reelUrlData") !== null) {
      reelArr = JSON.parse(localStorage.getItem("reelUrlData"));
    }

    let reelId = Date.now();
    let reelVideoObj = {
      reel_url: src,
      reelId: reelId,
      reelName: reelId + "reel",
    };

    console.log(reelVideoObj);

    reelArr.push(reelVideoObj);

    localStorage.setItem("reelUrlData", JSON.stringify(reelArr));
  };

  reader.readAsDataURL(file);
});

// reel showing redirection EventListener

let checkReel = JSON.parse(localStorage.getItem("reelUrlData"));
console.log(checkReel);

if (checkReel !== null) {
  for (let i = 0; i < checkReel.length; i++) {
    // creating reel div for the user

    let trendingBirdDiv = document.createElement("div");
    trendingBirdDiv.setAttribute("class", "reel-member-div");
    trendingBirdDiv.setAttribute("id", checkReel[i]["reelId"]);

    let trendingBirdDivImage = document.createElement("img");
    trendingBirdDivImage.setAttribute("class", "reel-member-div-image");
    trendingBirdDivImage.setAttribute("src", findUser["avatarUrl"]);

    trendingBirdDiv.append(trendingBirdDivImage);

    document.querySelector(".reel-container").append(trendingBirdDiv);
  }
}

let reelPage = document.querySelector(".reel-member-div");
console.log(reelPage);

reelPage.addEventListener("click", function (event) {
  event.preventDefault();

  let reelId = event.target.parentElement.id;

  console.log(reelId);
  if (checkReel == null) {
    return;
  } else {
    window.location.href =
      "../pages/reel_showing.html?user=" +
      findUser["userId"] +
      "&reel=" +
      reelId;
  }
});
