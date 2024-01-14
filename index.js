let emailVaid = document.getElementById("emailValid");
let emailInvalid = document.getElementById("emailInvalid");
let phoneNumberValid = document.getElementById("phoneNumberValid");
let phoneNumberInvalid = document.getElementById("phoneNumberInvalid");
let zipCodeValid = document.getElementById("zipCodeValid");
let zipCodeInvalid = document.getElementById("zipCodeInvalid");

function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let zipCode = document.getElementById("zipCode").value;

  if (firstName === "") {
    document.getElementById("firstNameInvalid").style.display = "block";
    document.getElementById("firstNameValid").style.display = "none";
  } else {
    document.getElementById("firstNameValid").style.display = "block";
    document.getElementById("firstNameInvalid").style.display = "none";
  }

  if (lastName === "") {
    document.getElementById("lastNameInvalid").style.display = "block";
    document.getElementById("lastNameValid").style.display = "none";
  } else {
    document.getElementById("lastNameValid").style.display = "block";
    document.getElementById("lastNameInvalid").style.display = "none";
  }

  if (
    email === "" ||
    !email.includes("@") ||
    !email.includes(".") ||
    email.startsWith("@") ||
    email.slice(email.lastIndexOf(".")).length < 3
  ) {
    emailInvalid.style.display = "block";
    emailVaid.style.display = "none";
  } else {
    emailVaid.style.display = "block";
    emailInvalid.style.display = "none";
  }

  if (
    phoneNumber === "" ||
    phoneNumber.length != 10 ||
    Number(phoneNumber[0]) < 6
  ) {
    phoneNumberInvalid.style.display = "block";
    phoneNumberValid.style.display = "none";
  } else {
    phoneNumberValid.style.display = "block";
    phoneNumberInvalid.style.display = "none";
  }

  if (zipCode === "" || zipCode.length != 6) {
    zipCodeInvalid.style.display = "block";
    zipCodeValid.style.display = "none";
  } else {
    zipCodeValid.style.display = "block";
    zipCodeInvalid.style.display = "none";
  }

  // console.log(firstName, lastName, email, phoneNumber, zipCode);
}
