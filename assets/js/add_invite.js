let inviteForm = document.querySelector("#invite-form");

inviteForm.addEventListener("submit", () => {
  let inviteArr = [];

  if (localStorage.getItem("userInvites") !== null) {
    inviteArr = JSON.parse(localStorage.getItem("userInvites"));
  }

  let inviteName = document.getElementById("party_name").value.trim();

  let inviteTime = document.getElementById("party_time").value.trim();

  let inviteDate = document.getElementById("party_date").value.trim();
  let specialPerson = document.getElementById("special_person").value.trim();
  let inviteImage = document.getElementById("party_image").value.trim();
  let inviteGlimpse = document.getElementById("party_short_note").value.trim();
  let inviteExplanation = document
    .getElementById("party_expand_passage")
    .value.trim();

  let inviteId = Date.now();

  let inviteObj = {
    inviteName,
    inviteDate,
    inviteImage,
    inviteTime,
    specialPerson,
    inviteGlimpse,
    inviteExplanation,
    inviteId,
  };

  console.log(inviteObj);

  inviteArr.push(inviteObj);

  localStorage.setItem("userInvites", JSON.stringify(inviteArr));
});
