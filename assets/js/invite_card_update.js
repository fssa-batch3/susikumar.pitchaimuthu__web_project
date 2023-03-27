// for loop undisabled all input from disabled

let inviteDisabled = document.querySelectorAll(".inviteInput");
console.log(inviteDisabled);

let editInvite = document.getElementById("edit-button");

let editButton = document.getElementById("save-button");

editInvite.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < inviteDisabled.length; i++) {
    inviteDisabled[i].removeAttribute("disabled");
  }

  if ((editButton.style.display = "none")) {
    editButton.style.display = "block";
  }

  if ((editInvite.style.display = "block")) {
    editInvite.style.display = "none";
  }
});

// index Number find know the invite

let inviteIndex = getinviteData.indexOf(findInvite);
console.log(inviteIndex);

// write a function for to read file path and convert into to google url

let invitefile = document.getElementById("party_image");
console.log(invitefile);
let image;
invitefile.addEventListener("change", function () {
  let choosePhoto = this.files[0];
  console.log("manisha");
  if (choosePhoto) {
    let reader = new FileReader();
    // console.log(reader.result);

    reader.addEventListener("load", function () {
      image = reader.result;
      console.log(image);
    });

    reader.readAsDataURL(choosePhoto);
  }
});

console.log(image);

// eventListener for showing invite
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
    inviteImage: image,
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

  console.log(inviteDisabled);

  for (let i = 0; i < inviteDisabled.length; i++) {
    inviteDisabled[i].setAttribute("disabled", "");
  }

  if ((editButton.style.display = "block")) {
    editButton.style.display = "none";
  }

  if ((editInvite.style.display = "none")) {
    editInvite.style.display = "block";
  }
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
