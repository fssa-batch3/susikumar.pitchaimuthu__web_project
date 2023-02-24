// Create a Data

function register(regis_input) {
  try {
    const userRegisterData = JSON.parse(localStorage.getItem("register"));
    console.log(userRegisterData);

    //check Eamil ID alredy  or not

    let userAlreadyRegistered = false;

    for (let i = 0; i < userRegisterData.length; i++) {
      if (condition) {
        userAlreadyRegistered = true;
        break;
      }
    }

    // If user already Exist throe alert

    if (userAlreadyRegistered === true) {
      alert("This Email ID already Registered");
      throw new Error("This Email Id already Registered");
    } // If user is store the data in the DB
    else {
      let userObj = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        Email: userEmail.toLowerCase(),
        password: password,
        mobileNumber: number,
        age: age,
      };

      console.log(userObj);

      userData.push(userObj);
      const str = JSON.parse(userData);
      localStorage.setItem("register", str);
      // alert("Success");
      // window.location.href = "./logIn.html"
    }

    return true;
  } catch {
    console.error(error);
    return false;
  }
}
