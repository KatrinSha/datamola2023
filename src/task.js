import Controller from './controller/controller.js';

const cont = new Controller();

const buttonToMain = document.querySelector('.button__to-main');
buttonToMain.addEventListener('click', () => {
  cont.loadAllTasks();
  console.log('j;n');
});
