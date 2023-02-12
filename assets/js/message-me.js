function popup() {
  const messageMe = (document.getElementById("popup").style.display = "block");
  $(".message-me-div-image").hide();
}

function closepopup() {
  const messageMe = (document.getElementById("popup").style.display = "none");
  $(".message-me-div-image").show();
}
