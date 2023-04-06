class RegistView {
  id;

  constructor(id) {
    this.id = id;
  }

  display(user) {
    const regist = document.createElement('section');
    regist.setAttribute('class', 'regist');
    const registWrapper = document.createElement('div');
    registWrapper.classList.add('regist__wrapper', 'wrapper');
    // ------link to main----------
    const pathTo = document.createElement('div');
    pathTo.classList.add('path-to');
    const  buttonToMain = document.createElement('a');
    buttonToMain.classList.add('button__to-main');
    buttonToMain.textContent = '< Main page';

    const icoArrowBackToMain = document.createElement('span');
    icoArrowBackToMain.classList.add('ico', 'arrow-back');
    buttonToMain.append(icoArrowBackToMain);
    pathTo.append( buttonToMain);
    // ---------------------Regist Container--------
    const registContainer = document.createElement('div');
    // ---------------
    registContainer.setAttribute('class', 'regist__container');
    registContainer.setAttribute('id', 'regist__container');

    const registHeader = document.createElement('h1');
    registHeader.setAttribute('class', 'regist__header');
    registHeader.textContent = 'Create account';

    const imgContainer = document.createElement('div');
    imgContainer.setAttribute('class', 'img-container');

    const avatar = document.createElement('div');
    avatar.setAttribute('class', 'avatar');

    const buttonAddImg = document.createElement('button');
    buttonAddImg.setAttribute('class', 'button__add-img');
    const spanAddImg=document.createElement('span');
    spanAddImg.setAttribute('type','file');
    spanAddImg.setAttribute('id','file');
    spanAddImg.setAttribute('name','file');

    const spanIcoCamera = document.createElement('span');
    spanIcoCamera.setAttribute('class', 'ico camera');
    spanAddImg.append(spanIcoCamera);
    buttonAddImg.append(spanAddImg);
    imgContainer.append(avatar, buttonAddImg);

    // ----------FORM----------------
    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    form.setAttribute('action', '../action_page.php');
    form.setAttribute('id', 'registr');

    const formFieldLogin = document.createElement('div');
    formFieldLogin.setAttribute('class', 'form-field');

    const labelLogin = document.createElement('label');
    labelLogin.setAttribute('for', 'login');
    labelLogin.textContent = 'Login';

    const inputLogin = document.createElement('input');
    inputLogin.setAttribute('type', 'text');
    inputLogin.setAttribute('placeholder', 'Type Login');
    inputLogin.setAttribute('name', 'login');
    inputLogin.setAttribute('id', 'login');

    const errorTextLogin = document.createElement('div');
    errorTextLogin.setAttribute('class', 'errorText');

    formFieldLogin.appendChild(labelLogin);
    formFieldLogin.appendChild(inputLogin);
    formFieldLogin.appendChild(errorTextLogin);

    const formFieldPsw = document.createElement('div');
    formFieldPsw.setAttribute('class', 'form-field');

    const labelPsw = document.createElement('label');
    labelPsw.setAttribute('for', 'psw');
    labelPsw.textContent = 'Password';

    const inputPsw = document.createElement('input');
    inputPsw.setAttribute('type', 'text');
    inputPsw.setAttribute('placeholder', 'Type password');
    inputPsw.setAttribute('autocomplete', 'on');
    inputPsw.setAttribute('name', 'psw');
    inputPsw.setAttribute('id', 'psw');

    const errorTextPsw = document.createElement('div');
    errorTextPsw.setAttribute('class', 'errorText');

    formFieldPsw.append(labelPsw, inputPsw, errorTextPsw);
    const formFieldRepsw = document.createElement('div');
    formFieldRepsw.setAttribute('class', 'form-field');

    const labelRepsw = document.createElement('label');
    labelRepsw.setAttribute('for', 'repsw');
    labelRepsw.textContent = 'Re-type password';

    const inputRepsw = document.createElement('input');
    inputRepsw.setAttribute('type', '');
    inputRepsw.setAttribute('placeholder', 'Re-type password');
    inputRepsw.setAttribute('autocomplete', 'on');
    inputRepsw.setAttribute('name', 'repsw');
    inputRepsw.setAttribute('id', 'repsw');

    const errorTextRepsw = document.createElement('div');
    errorTextRepsw.setAttribute('class', 'errorText');

    formFieldRepsw.append(labelRepsw, inputRepsw, errorTextRepsw);

    const formFieldUsername = document.createElement('div');
    formFieldUsername.setAttribute('class', 'form-field');

    const labelUsername = document.createElement('label');
    labelUsername.setAttribute('for', 'username');
    labelUsername.textContent = 'Username';

    const inputUsername = document.createElement('input');
    inputUsername.setAttribute('type', 'text');
    inputUsername.setAttribute('placeholder', 'Type Username');
    inputUsername.setAttribute('name', 'username');
    inputUsername.setAttribute('id', 'username');

    const errorTextUsername = document.createElement('div');
    errorTextUsername.setAttribute('class', 'errorText');

    formFieldUsername.append(labelUsername, inputUsername, errorTextUsername);

    const formFieldSubmit = document.createElement('div');
    formFieldSubmit.setAttribute('class', 'form-field');

    const hr = document.createElement('hr');

    const inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Register');
    inputSubmit.classList.add('registbtn', 'disabled');
    formFieldSubmit.append(inputSubmit);
    const linktoreg = document.createElement('div');
    linktoreg.setAttribute('class', 'linktoreg');
    linktoreg.textContent = 'Already have an account?';
    const toLogin = document.createElement('a');
    toLogin.setAttribute('href', 'login.html');
    toLogin.textContent = 'Log in';
    linktoreg.append(toLogin);

    form.append(formFieldLogin, formFieldPsw, formFieldRepsw, formFieldUsername, formFieldSubmit, hr, linktoreg);
    registContainer.append(registHeader, imgContainer, form);
    registWrapper.append(pathTo, registContainer);
    regist.append(registWrapper);
    const main = document.querySelector('main');
    main.append(regist);
    const link = document.querySelector('link');
    link.setAttribute('href', '/datamola2023/UI/css/styles_registration.css');
    const filters=document.querySelector('.filters');
    filters.remove();
    const scriptReg = document.createElement('script');
    scriptReg.setAttribute('src', '/datamola2023/src/regist.js');
    const body=document.querySelector('body');
    body.append(scriptReg);

    console.log(inputUsername.value);
    if(user===inputUsername.value){
      errorTextUsername.textContent='This username exists';
    }

  }
}
export default RegistView;
