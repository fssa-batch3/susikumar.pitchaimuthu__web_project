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

let reelPage = document.querySelector(".reel-member-div");
console.log(reelPage);

reelPage.addEventListener("click", (reel) => {
  reel.preventDefault();
  let checkReel = JSON.parse(localStorage.getItem("reelUrlData"));

  if (checkReel == null) {
    return;
  } else {
    window.location.href = "../pages/reel_showing.html";
  }
});
