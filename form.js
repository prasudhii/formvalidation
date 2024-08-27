var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var phoneNumber = document.getElementById('phoneNumber');
var errorMessage = document.getElementById('errorMessage');
var usernameError = document.getElementById('usernameError');
var emailError = document.getElementById('emailError');
var pswError = document.getElementById('pswError');
var confirmpswError = document.getElementById('confirmpswError');
var number = document.getElementById('number');


document.getElementById('loginForm').addEventListener('submit', function(event) {
  
  if (username.value === '' || username.value.length < 5 ) { 
    event.preventDefault();
    usernameError.innerHTML = "Required, at least 5 characters"
    return
  } else{
    usernameError.innerHTML = ""
  }
 

if (email.value === '' || !email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ) {
  event.preventDefault();
  emailError.innerHTML = "Required, must follow a valid email format"
  return
} else{
  emailError.innerHTML = ""
}
  
if (!password.value.match(/^.{8,}$/) || !password.value.match(/[A-Z]/) || !password.value.match(/[!@#$%^&*()-_=+{}|;:,.<>?/~]/) || !password.value.match(/\d/)) {
  event.preventDefault();
  pswError.innerHTML = "Required, at least 8 characters, must include at least one uppercase letter, one special character, and one number"
  return
} else {
  pswError.innerHTML = ""
}



if (confirmPassword.value === '' || confirmPassword.value !== password.value) {
    event.preventDefault();
    confirmpswError.innerHTML = 'Required, must match the password'
    return
  } else {
    confirmpswError.innerHTML = ""
  }
  
if (!phoneNumber.value.match(/^\d{10}$/) || !phoneNumber.value === "") {
    event.preventDefault();
    numberError.innerHTML ="Must be a valid 10-digit number"
    return
} else{
  number.innerHTML = ""
}

  document.getElementById('loginForm').submit();
});


