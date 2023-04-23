// chack the invite id
let presentInvId;
function showInvite(invId) {
  presentInvId = invId;
  // checking invite to know whose invite is this...

  let findPresentInvite = friendsInvitesData.find(
    (preInv) => preInv["inviteId"] == presentInvId
  );
  console.log(findPresentInvite);

  // invite type showing container

  let all = document.querySelector(".invite-inside-details-div-container");

  if (all != null) {
    document.querySelector(".invite-inside-details-div-container").remove();
  }
  let inviteShowingContainer = document.createElement("div");
  inviteShowingContainer.setAttribute(
    "class",
    "invite-inside-details-div-container"
  );

  document
    .querySelector(".invite-details-showing-container")
    .append(inviteShowingContainer);

  let inviteDetailsShowInsideDiv = document.createElement("div");
  inviteDetailsShowInsideDiv.setAttribute(
    "class",
    "invite-details-showing-inside-div"
  );

  inviteShowingContainer.append(inviteDetailsShowInsideDiv);

  let inviteImage = document.createElement("img");
  inviteImage.setAttribute("class", "invite-images");
  inviteImage.setAttribute("src", findPresentInvite["inviteImage"]);
  inviteDetailsShowInsideDiv.append(inviteImage);

  // invite option like and comment option

  let likeCommentOptionDivContainer = document.createElement("div");
  likeCommentOptionDivContainer.setAttribute(
    "class",
    "like-comment-option-whole-div-container"
  );

  inviteShowingContainer.append(likeCommentOptionDivContainer);

  let likeCommentDivContainer = document.createElement("div");
  likeCommentDivContainer.setAttribute("class", "like-comment-div-container");
  likeCommentOptionDivContainer.append(likeCommentDivContainer);

  let likeCommentInsideDiv = document.createElement("div");
  likeCommentInsideDiv.setAttribute("class", "like-comment-inside-div");
  likeCommentDivContainer.append(likeCommentInsideDiv);

  let heartDiv = document.createElement("div");
  heartDiv.setAttribute("class", "heart-div");
  heartDiv.setAttribute("id", findPresentInvite["inviteId"]);
  heartDiv.setAttribute("onclick", "likeHeart(this.id)");
  likeCommentInsideDiv.append(heartDiv);

  if (findPresentInvite["likeId"] == findUser["userId"]) {
    let heartI = document.createElement("i");
    heartI.setAttribute("class", "bi bi-heart-fill");
    heartDiv.append(heartI);
  } else {
    let heartI = document.createElement("i");
    heartI.setAttribute("class", "bi bi-heart");
    heartDiv.append(heartI);
  }

  let okDiv = document.createElement("div");
  okDiv.setAttribute("class", "ok-div");
  okDiv.setAttribute("id", findPresentInvite["inviteId"]);
  okDiv.setAttribute("onclick", "thumbsUp(this.id)");
  likeCommentInsideDiv.append(okDiv);

  if (findPresentInvite["okId"] == findUser["userId"]) {
    let okI = document.createElement("i");
    okI.setAttribute("class", "bi bi-hand-thumbs-up-fill");
    okDiv.append(okI);
  } else {
    let okI = document.createElement("i");
    okI.setAttribute("class", "bi bi-hand-thumbs-up");
    okDiv.append(okI);
  }

  let sorryDiv = document.createElement("div");
  sorryDiv.setAttribute("class", "sorry-div");
  sorryDiv.setAttribute("id", findPresentInvite["inviteId"]);
  sorryDiv.setAttribute("onclick", "thumbsDown(this.id)");
  likeCommentInsideDiv.append(sorryDiv);

  if (findPresentInvite["downId"] == findUser["userId"]) {
    let sorryI = document.createElement("i");
    sorryI.setAttribute("class", "bi bi-hand-thumbs-down-fill");
    sorryDiv.append(sorryI);
  } else {
    let sorryI = document.createElement("i");
    sorryI.setAttribute("class", "bi bi-hand-thumbs-down");
    sorryDiv.append(sorryI);
  }

  // user profile and chat input feild creation

  let inviteprofileNameDivContainer = document.createElement("div");
  inviteprofileNameDivContainer.setAttribute(
    "class",
    "invite-profile-name-div-container"
  );
  likeCommentOptionDivContainer.append(inviteprofileNameDivContainer);

  let inviteProfileNameInsideDiv = document.createElement("div");
  inviteProfileNameInsideDiv.setAttribute(
    "class",
    "invite-profile-name-inside-div"
  );
  inviteprofileNameDivContainer.append(inviteProfileNameInsideDiv);

  let inviterUserProfileDiv = document.createElement("div");
  inviterUserProfileDiv.setAttribute("class", "inviter-user-profile-div");
  inviteProfileNameInsideDiv.append(inviterUserProfileDiv);

  let inviterImage = document.createElement("img");
  inviterImage.setAttribute("class", "inviter-image");
  inviterImage.setAttribute("src", findPresentInvite["inviterImage"]);
  inviterImage.setAttribute("alt", "invite-user-image");
  inviterUserProfileDiv.append(inviterImage);

  let inviteMessageEmojiReplyDiv = document.createElement("div");
  inviteMessageEmojiReplyDiv.setAttribute(
    "class",
    "invite-message-emoji-reply-div"
  );
  inviteProfileNameInsideDiv.append(inviteMessageEmojiReplyDiv);

  let inputEmojiDivContainer = document.createElement("div");
  inputEmojiDivContainer.setAttribute("class", "input-emoji-div-container");
  inviteMessageEmojiReplyDiv.append(inputEmojiDivContainer);

  let inviteReplyEmojiInsideDiv = document.createElement("div");
  inviteReplyEmojiInsideDiv.setAttribute(
    "class",
    "invite-reply-emoji-inside-div"
  );
  inputEmojiDivContainer.append(inviteReplyEmojiInsideDiv);

  let inviteReplyInput = document.createElement("input");
  inviteReplyInput.setAttribute("id", "invite-reply-input");
  inviteReplyEmojiInsideDiv.append(inviteReplyInput);

  let emojiI = document.createElement("i");
  emojiI.setAttribute("class", "bi bi-emoji-heart-eyes");
  inviteReplyEmojiInsideDiv.append(emojiI);

  let sendArrowI = document.createElement("i");
  sendArrowI.setAttribute("class", "bi bi-arrow-up-right-circle");
  sendArrowI.setAttribute("id", findPresentInvite["inviteId"]);
  sendArrowI.setAttribute("onclick", "inviteChatNotification(this.id)");
  inviteReplyEmojiInsideDiv.append(sendArrowI);

  let keyboardDiv = document.createElement("div");
  keyboardDiv.setAttribute("class", "keyboard-div");
  keyboardDiv.setAttribute("id", findPresentInvite["inviteId"]);
  inviteMessageEmojiReplyDiv.append(keyboardDiv);

  let keyboardI = document.createElement("i");
  keyboardI.setAttribute("class", "bi bi-keyboard");
  keyboardDiv.append(keyboardI);

  let keyboard = document.querySelector(".keyboard-div");
  console.log(keyboard);

  keyboard.addEventListener("click", () => {
    let inputEmojiDiv = document.querySelector(
      ".invite-reply-emoji-inside-div"
    );

    if (inputEmojiDiv.style.display === "none") {
      inputEmojiDiv.style.display = "block";
    } else {
      inputEmojiDiv.style.display = "none";
    }
  });
}
