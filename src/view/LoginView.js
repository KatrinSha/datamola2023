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

    // ------link to main----------
    const pathTo = document.createElement('div');
    pathTo.classList.add('path-to');
    const buttonToMain = document.createElement('a');
    buttonToMain.classList.add('button__to-main');
    buttonToMain.textContent = '< Main page';

    const icoArrowBackToMain = document.createElement('span');
    icoArrowBackToMain.classList.add('ico', 'arrow-back');
    buttonToMain.append(icoArrowBackToMain);
    pathTo.append(buttonToMain);
    // --------------------------------

    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login__container');
    loginContainer.setAttribute('id', 'login__container');

    const loginForm = document.createElement('form');
    loginForm.classList.add('modal-content');
    loginForm.setAttribute('action', '');

    const loginHeader = document.createElement('h1');
    loginHeader.classList.add('login__header');
    loginHeader.textContent = 'Log in to your account';

    const loginLabel = document.createElement('label');
    loginLabel.setAttribute('for', 'login');
    loginLabel.textContent = 'Login';

    const loginInput = document.createElement('input');
    loginInput.setAttribute('type', 'text');
    loginInput.setAttribute('placeholder', 'Type Email');
    loginInput.setAttribute('name', 'login');
    loginInput.setAttribute('required', '');

    const pswLabel = document.createElement('label');
    pswLabel.setAttribute('for', 'psw');
    pswLabel.textContent = 'Password';

    const pswInput = document.createElement('input');
    pswInput.setAttribute('type', 'password');
    pswInput.setAttribute('placeholder', 'Type password');
    pswInput.setAttribute('name', 'psw');
    pswInput.setAttribute('required', '');

    const loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'submit');
    loginButton.classList.add('signupbtn');
    loginButton.textContent = 'Log in';

    const loginHR = document.createElement('hr');

    const linkToReg = document.createElement('div');
    linkToReg.classList.add('linktoreg');
    linkToReg.textContent = 'Don’t have an account?';
    const toRegis = document.createElement('a');
    toRegis.setAttribute('href', '/datamola2023/UI/registration.html');
    linkToReg.append(toRegis);

    loginForm.append(
      loginHeader,
      loginLabel,
      loginInput,
      pswLabel,
      pswInput,
      loginButton,
      loginHR,
      linkToReg,
    );

    loginContainer.append(loginForm);
    pathTo.append(buttonToMain);

    loginWrapper.appen(pathTo, loginContainer, loginWrapper);
  }
}
export default LoginView;
