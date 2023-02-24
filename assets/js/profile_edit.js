const disable = document.querySelectorAll(".disable-input");
console.log(disable);

// disable function

function edit() {
  for (i = 0; i < disable.length; i++) {
    console.log(disable[i]);
    disable[i].removeAttribute("disabled");
  }
}

const changes = document.getElementById("change-form");
changes.addEventListener("submit", function (e) {
  event.preventDefault();

  const fname = document.getElementById("firstName").value.trim();
  const lname = document.getElementById("lastName").value.trim();
  const u1name = document.getElementById("userName").value.trim();
  const gmail = document.getElementById("email").value.trim();
  const mobile = document.getElementById("phone").value.trim();
  const old = document.getElementById("age").value.trim();
  const nation = document.getElementById("nation").value.trim();

  const editObj = {
    firstName: fname,
    lastName: lname,
    userName: u1name,
    Email: gmail,
    mobileNumber: mobile,
    age: old,
    nationality: nation,
  };

  const returnData = JSON.parse(localStorage.getItem("user_data"));

  const check = returnData.find((e) => e.Email == gmail);

  if (check.Email != gmail) {
    alert("Email ID not found");
  } else {
    const objestAssign = Object.assign(check, editObj);
    console.log(objestAssign);
    const regisData = JSON.parse(localStorage.getItem("register"));

    const FEmail = regisData.find((e) => e.Email == check.Email);

    const finalFind = regisData.indexOf(FEmail);

    regisData[finalFind] = objestAssign;

    localStorage.setItem("register", JSON.stringify(regisData));
  }
});

// function for delete details

function dele() {
  console.log(found);
  let findInd = info.indexOf(found);

  const whatMean = JSON.parse(localStorage.getItem("register"));

  let message = confirm("Are sure to Delete your account in Fresh Nest?");

  if (message !== true) {
    return;
  } else {
    whatMean.splice(findInd, 1);
    localStorage.setItem("register", JSON.stringify(whatMean));
  }
}
