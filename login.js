//email setup
//step 1- add click event handler
document.getElementById("btn-submit").addEventListener("click", function () {
  //step 2-get the email address
  //step 3- always remember to get .value to get text from an input field.
  const emailField = document.getElementById("email");
  const email = emailField.value;
  //password setup
  const passField = document.getElementById("pass");
  const pass = passField.value;
  //step 4- verify email and password
  if (email === "fahima2023@gmail.com" && pass === "secret") {
    console.log("valid user");
  }
});
