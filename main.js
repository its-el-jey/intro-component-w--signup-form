const form = document.getElementById('submit-form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get value from form
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(firstNameValue === ''){
    // console.log(firstName.value)
    setError(firstName, 'First Name cannot be empty');
  } else {
    setSuccess(firstName);
  }

  if(lastNameValue === ''){
    setError(lastName, 'Last Name cannot be empty');
  } else {
    setSuccess(lastName);
  }

  if(emailValue === ''){
    setError(email, 'Email cannot be empty')
  } else if(!checkEmail(emailValue)) {
    setError(email, 'Looks like this is not an email')
  } else {
    setSuccess(email)
  }

  if(passwordValue === ''){
    setError(password, 'Password cannot be empty');
  }
}

function setError(input, message) {
  const formControl = input.parentNode;
  const messageError = formControl.querySelector('.error');

  formControl.className = 'input input-error';
  messageError.innerText = message;
}

function setSuccess(input){
  const formControl = input.parentNode;
  const messageError = formControl.querySelector('.error');

  formControl.className = 'input input-success';
  messageError.innerText = '';
}

function checkEmail(email) {
	return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}


