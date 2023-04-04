const loginEl = document.querySelector('#login');
const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#psw');
const retypePasswordEl = document.querySelector('#repsw');
const registButton = document.querySelector('.registbtn');

const form = document.querySelector('#registr');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const isRequired = (value) => (value !== '');
const isBetween = (length, min, max) => (!(length < min || length > max));
const isPasswordSecure = (password) => {
  const regular = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');
  return regular.test(password);
};
const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove('success');
  formField.classList.add('error');
  registButton.setAttribute('disabled', 'disabled');
  registButton.classList.add('disabled');
  const error = formField.querySelector('.errorText');
  error.textContent = message;
};
const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove('error');
  formField.classList.add('success');
  registButton.removeAttribute('disabled', 'disabled');
  registButton.classList.remove('disabled');

  const error = formField.querySelector('.errorText');
  error.textContent = '';
};
const checkLogin = () => {
  let valid = false;
  const min = 5;
  const max = 20;
  const login = loginEl.value.trim();
  console.log(login);
  if (!isRequired(login)) {
    showError(loginEl, 'Login cannot be blank.');
  } else if (!isBetween(login.length, min, max)) {
    showError(loginEl, `Login must contain ${min} - ${max} characters.`);
  } else {
    showSuccess(loginEl);
    valid = true;
  }
  return valid;
};
const checkUsername = () => {
  let valid = false;
  const min = 5;
  const max = 25;
  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, 'Username cannot be blank.');
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `Username must contain ${min} - ${max} characters.`);
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};
const checkPassword = () => {
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, 'Password cannot be blank.');
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number',
    );
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};
const checkConfirmPassword = () => {
  let valid = false;

  const confirmPassword = retypePasswordEl.value.trim();

  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(retypePasswordEl, 'Please enter the password again');
  } else if (password !== confirmPassword) {
    showError(retypePasswordEl, 'Your passwords do not match');
  } else {
    showSuccess(retypePasswordEl);
    valid = true;
  }

  return valid;
};
form.addEventListener('submit', (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  const isUsernameValid = checkUsername();
  const isLoginValid = checkLogin();
  const isPasswordValid = checkPassword();
  const isConfirmPasswordValid = checkConfirmPassword();

  const isFormValid = isUsernameValid
    && isLoginValid
    && isPasswordValid
    && isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});

form.addEventListener('input', (e) => {
  switch (e.target.id) {
    case 'username':
      checkUsername();
      break;
    case 'login':
      checkLogin();
      break;
    case 'psw':
      checkPassword();
      break;
    case 'repsw':
      checkConfirmPassword();
      break;
  }
});

/*
// -----------FORM REGISTRATION------------
const formElement = document.getElementById('registr'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  const username = formData.get('username');
  console.log(username)
  const login = formData.get('login');
  console.log(login)
}); */
