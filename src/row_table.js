import Controller from './controller/controller.js';

const cont = new Controller();

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
const buttonReset = document.querySelector('.button-reset');
const buttonApplayFilters = document.querySelector('.button-applay');
const buttonShowMore = document.querySelector('.button_show-more');

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
buttonApplayFilters.addEventListener('click', () => {
  localStorage.setItem(filterObj);
});
buttonReset.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.filters__container').reset();
});

const tasksContainer = document.querySelectorAll('.card__wrapper-to768');
const cardscon = document.querySelectorAll('.cards-container');


cardscon.forEach((item) => {
  item.addEventListener('scroll', (e) => {
    const isScrolled=item.scrollTop+item.clientHeight;
    //console.log(item.scrollTop);
    console.log(item.scrollHeight);
    console.log(isScrolled+'is');
   // console.log(e.currentTarget.getBoundingClientRect());
  });
});

tasksContainer.forEach((item) => {
  console.log(item.scrollHeight);
  const tasks = item.children;
  if (tasks.length > 10) {
    for (let i = 10; i < item.childNodes.length; i++) {
      tasks[i].style.display = 'none';
    }
  }
});
function showMore() {
  return 6;
}
