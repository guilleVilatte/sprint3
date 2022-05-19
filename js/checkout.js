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
  e.preventDefault();
  let isValid = false;
  let nom = /^[A-Z]+$/i
  let contraseña = /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{4,8}$/;
  //if (nombre.value.lenght<3 || ) {
    
  } 
//}


