// for loop undisabled all input from disabled

let inviteDisabled = document.querySelectorAll(".inviteInput");
console.log(inviteDisabled);

let editInvite = document.getElementById("edit-button");

editInvite.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < inviteDisabled.length; i++) {
    inviteDisabled[i].removeAttribute("disabled");
  }
});

// index Number find know the invite

let inviteIndex = getinviteData.indexOf(findInvite);
console.log(inviteIndex);

// eventListener for showing invite
let editButton = document.getElementById("save-button");
editButton.addEventListener("click", (inv) => {
  inv.preventDefault();
  let inviteName = document.getElementById("inviteName").value.trim();
  let inviteDate = document.getElementById("inviteDate").value.trim();

  let inviteTime = document.getElementById("inviteTime").value.trim();
  let inviteGlimpse = document.getElementById("inviteGlimpse").value.trim();
  let inviteExplanation = document
    .getElementById("inviteExplanation")
    .value.trim();
  let specialPerson = document.getElementById("specialPerson").value.trim();

  let inviteEditObj = {
    inviteName,
    inviteDate,
    inviteTime,
    inviteExplanation,
    inviteGlimpse,
    specialPerson,
  };

  console.log(inviteEditObj);

  let inviteEditObectAssaign = Object.assign(findInvite, inviteEditObj);
  console.log(inviteEditObectAssaign);

  getinviteData[inviteIndex] = inviteEditObectAssaign;

  console.log(inviteIndex);

  localStorage.setItem("userInvites", JSON.stringify(getinviteData));
});

// Delete invite option

let deleteInviteButton = document.getElementById("delete-invite-button");

deleteInviteButton.addEventListener("click", (deIn) => {
  deIn.preventDefault();

  let deleteInvite = confirm("Are sure to Delete your fresh invite");

  if (deleteInvite !== true) {
    return;
  } else {
    getinviteData.splice(inviteIndex, 1);
    localStorage.setItem("userInvites", JSON.stringify(getinviteData));
    location.reload();
  }
});
