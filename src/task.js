import Controller from './controller/controller.js';
const cont = new Controller();

const buttonToMain = document.querySelector('.button__to-main');
buttonToMain.addEventListener('click', () => {
  cont.getFilter()
  cont.getFeed(0, 31, {});
  showMore()
  document.querySelector('#taskPage').remove()

});
