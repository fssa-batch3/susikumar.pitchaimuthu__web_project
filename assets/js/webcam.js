let camera = document.getElementById("video");

if (navigator.mediaDevices.getDisplayMedia) {
  navigator.mediaDevices.getDisplayMedia({ video: true }).then(function (s) {
    camera.srcObjest = s;
  });
} else {
  console.log("NO");
}
