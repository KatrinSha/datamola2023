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
contr.getFeed(0, 31, {});
contr.showNewTaskPage(user);

// contr.showRegistPage(user);
// contr.showTask('1');
// contr.addTask(task1);
// contr.editTask('9',task);
// contr.removeTask('1');
const link = document.querySelector('link');
const tableView = document.querySelector('.button__view-table');
const rowView = document.querySelector('.button__view-row');
const tableHeader = document.querySelectorAll('.table__header');
if (tableView) {
  tableView.addEventListener('click', () => {
    link.setAttribute('href', './UI/css/styles_main-table.css');
    tableHeader.forEach((item) => {
      item.classList.remove('disabled');
    });
  });
  rowView.addEventListener('click', () => {
    link.setAttribute('href', './UI/css/styles_main-row.css');
    tableHeader.forEach((item) => {
      item.classList.add('disabled');
    });
  });
}
// ---------filters-------------------------
const filterObj = {};
const nameSelector = document.querySelector('#name');
const privacySelector = document.querySelector('#privacy');
const prioritySelector = document.querySelector('#priority');
const statusSelector = document.querySelector('#status');
const btnDate = document.querySelector('.button-date');
const calendars = document.querySelector('.calendars');
const dateFromInput = document.querySelector('#date1');
const dateToInput = document.querySelector('#date2');
const calSub = document.querySelector('.calSub');
const descriptionInput = document.querySelector('#description');
const buttonSearch = document.querySelector('.button-search');
const buttonResetFilters = document.querySelector('.button-reset');

nameSelector.addEventListener('change', function () {
  filterObj.assignee = this.value;
});
privacySelector.addEventListener('change', function () {
  filterObj.privacy = this.value;
});

prioritySelector.addEventListener('change', function () {
  filterObj.priority = this.value;
});

statusSelector.addEventListener('change', function () {
  filterObj.status = this.value;
});
btnDate.addEventListener('click', (e) => {
  e.preventDefault();
  calendars.classList.toggle('visibilityDate');
});

calSub.addEventListener('click', (e) => {
  e.preventDefault();
  filterObj.dateFrom = new Date(dateFromInput.value);
  filterObj.dateTo = new Date(dateToInput.value);
  calendars.classList.toggle('visibilityDate');
});
buttonSearch.addEventListener('click', (e) => {
  e.preventDefault();
  filterObj.description = descriptionInput.value;
});
const buttonApplayFilters = document.querySelector('.button-applay');
// --Applay------------
buttonApplayFilters.addEventListener('click', (e) => {
  e.preventDefault();
  contr.getFeed(0, 31, filterObj);
});
buttonResetFilters.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.filters__container').reset();
  contr.getFeed(0, 31, {});
});
// -------------------------Show task----------------------------
const cardWrapper = document.querySelectorAll('.card__wrapper-to768');
let selectedTaskId;
cardWrapper.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('card')) {
      selectedTaskId = e.target.dataset.id;
      contr.showTask(selectedTaskId);
    }
  });
});
const buttonToMain = document.querySelector('.button__to-main');

if (buttonToMain) {
  buttonToMain.addEventListener('click', () => {
    contr.getFilter();
    contr.getFeed(0, 31, {});
    document.querySelector('link').remove();
    document.querySelector('#taskPage').remove();
    const link = document.querySelector('link');
    link.setAttribute('href', './UI/css/styles_main-row.css');
  });
}
// ---------------Add Task----------------

const buttonAdd = document.querySelector('.button__add-new-task');
buttonAdd.addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('disabled');
  const secondStyle = document.createElement('link');
  secondStyle.setAttribute('href', './UI/css/styles_new_task.css');
  secondStyle.setAttribute('rel', 'stylesheet');
  link.insertAdjacentElement('afterend', secondStyle);
});
const btnResetTask = document.querySelector('.reset');

// -----------New Task form------------------
const radioBtns = document.querySelectorAll('.input-privacy');
document.querySelector('.task__form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = document.querySelector('.task__form');
  let privasy;
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      privasy = radioBtns[i].value;
      break;
    }
  }
  const task = {
    name: form.elements.taskTitle.value,
    description: form.elements.description.value,
    createdAt: new Date(),
    assignee: form.elements.taskAssignee.value,
    status: form.elements.taskStatus.value,
    priority: form.elements.taskPriority.value,
    isPrivate: !!privasy,
  };
  contr.addTask(task);
});

btnResetTask.addEventListener('click', () => {
  document.querySelector('.task__form').reset();
  contr.getFeed(0, 31, {});
});

const btnClose = document.querySelector('.close');

function close() {
  document.querySelector('.modal').classList.add('disabled');
}

btnClose.addEventListener('click', close);
