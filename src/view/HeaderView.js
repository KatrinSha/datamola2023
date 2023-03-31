class HeaderView {
    id;
    constructor(containerId) {
      this.id = containerId;
    }
    display(user) {
      const profileName = document.getElementById(this.id);
      profileName.innerText = user;
      // console.log(user);
    }
  }
  export default HeaderView;