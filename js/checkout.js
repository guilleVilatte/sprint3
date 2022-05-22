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
   
(function () {
  'use strict'
  var form = document.querySelector('.needs-validation');
  
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated')
      }, false)
    })()

}


