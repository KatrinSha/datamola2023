class HeaderView {
  id;

  constructor(containerId) {
    this.id = containerId;
  }

  display(user) {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.classList.add('header');
    header.setAttribute('id', this.id);
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header__wrapper', 'wrapper');
    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header-logo');
    const icoLogo = document.createElement('span');
    icoLogo.classList.add('ico', 'logo');
    const logoText = document.createElement('p');
    logoText.classList.add('logo__text');
    logoText.textContent = 'Funtask';
    const headerBox = document.createElement('div');
    headerBox.classList.add('header__box');
    const profileName = document.createElement('profile-name');
    profileName.textContent = user;
    profileName.setAttribute('id', 'profile-name');
    const headerButton = document.createElement('button');
    headerButton.classList.add('header__button', 'button');
    if (user === '') {
      console.log(`${user}222`);
      headerButton.textContent = 'Log in';
    } else {
      headerButton.textContent = 'Log out';
    }
    headerLogo.append(icoLogo, logoText);
    headerBox.append(profileName, headerButton);
    headerWrapper.append(headerLogo, headerBox);
    header.replaceChildren(headerWrapper);
    body.prepend(header);
  }
}
export default HeaderView;
