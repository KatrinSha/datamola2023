class LoginView {
  id;

  constructor(id) {
    this.id = id;
  }

  display(user) {
    const loginSection = document.createElement('section');
    loginSection.classList.add('login');

    const loginWrapper = document.createElement('div');
    loginWrapper.classList.add('login__wrapper', 'wrapper');

    const pathTo = document.createElement('div');
    pathTo.classList.add('path-to');

    const buttonToMain = document.createElement('a');
    buttonToMain.classList.add('button__to-main');
    buttonToMain.innerHTML = '<span class="ico arrow-back"></span>Main page';
    pathTo.appendChild(buttonToMain);

    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login__container');
    loginContainer.setAttribute('id', 'login__container');

    const loginForm = document.createElement('form');
    loginForm.classList.add('modal-content');
    loginForm.setAttribute('action', '../action_page.php');

    const loginHeader = document.createElement('h1');
    loginHeader.classList.add('login__header');
    loginHeader.textContent = 'Log in to your account';

    const loginLabel1 = document.createElement('label');
    loginLabel1.setAttribute('for', 'login');
    loginLabel1.textContent = 'Login';

    const loginInput1 = document.createElement('input');
    loginInput1.setAttribute('type', 'text');
    loginInput1.setAttribute('placeholder', 'Type Email');
    loginInput1.setAttribute('name', 'login');
    loginInput1.setAttribute('required', '');

    const loginLabel2 = document.createElement('label');
    loginLabel2.setAttribute('for', 'psw');
    loginLabel2.textContent = 'Password';

    const loginInput2 = document.createElement('input');
    loginInput2.setAttribute('type', 'password');
    loginInput2.setAttribute('placeholder', 'Type password');
    loginInput2.setAttribute('name', 'psw');
    loginInput2.setAttribute('required', '');

    const loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'submit');
    loginButton.classList.add('signupbtn');
    loginButton.textContent = 'Log in';

    const loginHR = document.createElement('hr');

    const linkToReg = document.createElement('div');
    linkToReg.classList.add('linktoreg');
    linkToReg.innerHTML = 'Don’t have an account?<a href="registration.html">Registration</a>';

    loginForm.appendChild(loginHeader);
    loginForm.appendChild(loginLabel1);
    loginForm.appendChild(loginInput1);
    loginForm.appendChild(loginLabel2);
    loginForm.appendChild(loginInput2);
    loginForm.appendChild(loginButton);
    loginForm.appendChild(loginHR);
    loginForm.appendChild(linkToReg);

    loginContainer.appendChild(loginForm);
    pathTo.appendChild(buttonToMain);

    loginWrapper.appendChild(pathTo);
    loginWrapper.appendChild(loginContainer);
    loginSection.appendChild(loginWrapper);
  }
}
export default LoginView;
