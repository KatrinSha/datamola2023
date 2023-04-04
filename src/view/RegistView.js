class RegistView {
  id;

  constructor(id) {
    this.id = id;
  }

  display(user) {
    const registContainer = document.createElement('div');
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

    const spanIcoCamera = document.createElement('span');
    spanIcoCamera.setAttribute('class', 'ico camera');

    buttonAddImg.appendChild(spanIcoCamera);
    imgContainer.appendChild(avatar);
    imgContainer.appendChild(buttonAddImg);

    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    form.setAttribute('action', '../action_page.php');
    form.setAttribute('id', 'registr');

    const formField1 = document.createElement('div');
    formField1.setAttribute('class', 'form-field');

    const labelLogin = document.createElement('label');
    labelLogin.setAttribute('for', 'login');
    labelLogin.textContent = 'Login';

    const inputLogin = document.createElement('input');
    inputLogin.setAttribute('type', 'text');
    inputLogin.setAttribute('placeholder', 'Type Login');
    inputLogin.setAttribute('name', 'login');
    inputLogin.setAttribute('id', 'login');

    const errorText1 = document.createElement('div');
    errorText1.setAttribute('class', 'errorText');

    formField1.appendChild(labelLogin);
    formField1.appendChild(inputLogin);
    formField1.appendChild(errorText1);

    const formField2 = document.createElement('div');
    formField2.setAttribute('class', 'form-field');

    const labelPsw = document.createElement('label');
    labelPsw.setAttribute('for', 'psw');
    labelPsw.textContent = 'Password';

    const inputPsw = document.createElement('input');
    inputPsw.setAttribute('type', 'password');
    inputPsw.setAttribute('placeholder', 'Type password');
    inputPsw.setAttribute('autocomplete', 'on');
    inputPsw.setAttribute('name', 'psw');
    inputPsw.setAttribute('id', 'psw');

    const errorText2 = document.createElement('div');
    errorText2.setAttribute('class', 'errorText');

    formField2.appendChild(labelPsw);
    formField2.appendChild(inputPsw);
    formField2.appendChild(errorText2);

    const formField3 = document.createElement('div');
    formField3.setAttribute('class', 'form-field');

    const labelRepsw = document.createElement('label');
    labelRepsw.setAttribute('for', 'repsw');
    labelRepsw.textContent = 'Re-type password';

    const inputRepsw = document.createElement('input');
    inputRepsw.setAttribute('type', 'password');
    inputRepsw.setAttribute('placeholder', 'Re-type password');
    inputRepsw.setAttribute('autocomplete', 'on');
    inputRepsw.setAttribute('name', 'repsw');
    inputRepsw.setAttribute('id', 'repsw');

    const errorText3 = document.createElement('div');
    errorText3.setAttribute('class', 'errorText');

    formField3.appendChild(labelRepsw);
    formField3.appendChild(inputRepsw);
    formField3.appendChild(errorText3);

    const formField4 = document.createElement('div');
    formField4.setAttribute('class', 'form-field');

    const labelUsername = document.createElement('label');
    labelUsername.setAttribute('for', 'username');
    labelUsername.textContent = 'Username';

    const inputUsername = document.createElement('input');
    inputUsername.setAttribute('type', 'text');
    inputUsername.setAttribute('placeholder', 'Type Username');
    inputUsername.setAttribute('name', 'username');
    inputUsername.setAttribute('id', 'username');

    const errorText4 = document.createElement('div');
  }
}
export default RegistView;
