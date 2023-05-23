function popup() {
  let messageMe = (document.getElementById("popup").style.display = "block");
  $(".message-me-div-image").hide();
}

function closepopup() {
  let messageClose = (document.getElementById("popup").style.display = "none");
  $(".message-me-div-image").show();
}
