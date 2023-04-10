import { TaskCollection, Task } from './model/index.js';
import tasks from './model/Tasks.js';
import Controller from './controller/Controller.js';
// -------instances----------
const collect = new TaskCollection(tasks);
/* const task = new Task(
  "!!!!!EditedEditedEdited",
  "some task about cats",
  "Complete",
  "High",
  true,
  [],
  "Иванов Иван"
);
const task1 = new Task(
  "!!!!!NEWNEWNEW",
  "some task about cats",
  "Complete",
  "High",
  true,
  [],
  "Иванов Иван"
); */
const contr = new Controller();
// -------Show----------
const user = localStorage.getItem('username');
contr.setCurrentUser(user);
contr.getFilter();
contr.loadAllTasks();
// contr.showRegistPage();
// contr.showTask('1');
// contr.getFeed(0, 31, {});
// contr.getFeed(0, 10, { });
// contr.addTask(task1);
// contr.editTask('9',task);
// contr.removeTask('1');
const link = document.querySelector('link');
const tableView = document.querySelector('.button__view-table');
const rowView = document.querySelector('.button__view-row');
const tableHeader=document.querySelectorAll('.table__header');
if (tableView) {
  tableView.addEventListener('click', () => {
    link.setAttribute('href', './UI/css/styles_main-table.css');
    tableHeader.forEach((item)=>{
      item.classList.remove('disabled')
    })
  });
  rowView.addEventListener('click', () => {
    link.setAttribute('href', './UI/css/styles_main-row.css');
    tableHeader.forEach((item)=>{
      item.classList.add('disabled')
    })
  });
}
