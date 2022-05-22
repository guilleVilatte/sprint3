// Get the input fields
var password = document.getElementById("fPassword");
var nombre = document.getElementById("fName");
var phone = document.getElementById("fPhone");
let email = document.getElementById("fEmail");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");
let errorEmail = document.getElementById("errorEmail");

// Exercise 6
function validate() {
  // Validate fields entered by the user: name, phone, password, and email

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    errorPassword.style.display="block";
    password.style.borderColor="red";
  } else {
    errorPassword.style.display="none";
    password.style.borderColor="green";
  }
  if (!nombre.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    errorName.style.display="block";
    nombre.style.borderColor="red";
  } else {
    errorName.style.display="none";
    nombre.style.borderColor="green";
  }
  if (!phone.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    errorPhone.style.display="block";
    phone.style.borderColor="red";
  } else {
    errorPhone.style.display="none";
    phone.style.borderColor="green";
  }
  if (!email.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    errorEmail.style.display="block";
    email.style.borderColor="red";
  } else {
    errorEmail.style.display="none";
    email.style.borderColor="green";
  }
})
}

function check(id){
  let elem = document.getElementById(id);
  if(elem == password && !password.checkValidity()){
    errorPassword.style.display="block";
    password.style.borderColor="red";
  } else if (password.checkValidity()) {
    errorPassword.style.display="none";
    password.style.borderColor="green";
  } 
  if(elem == nombre && !nombre.checkValidity()){
    errorName.style.display="block";
    nombre.style.borderColor="red";
  } else if (nombre.checkValidity()){
    errorName.style.display="none";
    nombre.style.borderColor="green";
  }
  if (elem == phone && !phone.checkValidity()) {
    errorPhone.style.display="block";
    phone.style.borderColor="red";
  } else if (phone.checkValidity()) {
    errorPhone.style.display="none";
    phone.style.borderColor="green";
  }
  if (elem == email && !email.checkValidity()) {
    errorEmail.style.display="block";
    email.style.borderColor="red";
  } else if (email.checkValidity()) {
    errorEmail.style.display="none";
    email.style.borderColor="green";
  }
}