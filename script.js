const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  if (!isValid) {
    // Styel main message for an error
    message.textContent = 'Please fill out all fields';
    message.style.color = 'red';
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = '#26b999';
    password2El.style.borderColor = '#26b999';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = '#f84747';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered';
    message.style.color = '#26b999';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do sth with data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if Valid
  isValid && passwordsMatch ? storeFormData() : null;
}

// Event Listeners
form.addEventListener('submit', processFormData);
