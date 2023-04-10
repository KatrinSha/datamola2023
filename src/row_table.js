import Controller from "./controller/controller.js";

const cont = new Controller();

const filterObj = {};
const nameSelector = document.querySelector("#name");
const privacySelector = document.querySelector("#privacy");
const prioritySelector = document.querySelector("#priority");
const statusSelector = document.querySelector("#status");
const btnDate = document.querySelector(".button-date");
const calendars = document.querySelector(".calendars");
const dateFromInput = document.querySelector("#date1");
const dateToInput = document.querySelector("#date2");
const calSub = document.querySelector(".calSub");
const descriptionInput = document.querySelector("#description");
const buttonSearch = document.querySelector(".button-search");
const buttonReset = document.querySelector(".button-reset");
const buttonApplayFilters = document.querySelector(".button-applay");
const buttonShowMore = document.querySelector(".button_show-more");

nameSelector.addEventListener("change", function () {
  filterObj.assignee = this.value;
});
privacySelector.addEventListener("change", function () {
  filterObj.privacy = this.value;
});

prioritySelector.addEventListener("change", function () {
  filterObj.priority = this.value;
});

statusSelector.addEventListener("change", function () {
  filterObj.status = this.value;
});
btnDate.addEventListener("click", (e) => {
  e.preventDefault();
  calendars.classList.toggle("visibilityDate");
});

calSub.addEventListener("click", (e) => {
  e.preventDefault();
  filterObj.dateFrom = new Date(dateFromInput.value);
  filterObj.dateTo = new Date(dateToInput.value);
  calendars.classList.toggle("visibilityDate");
});
buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();
  filterObj.description = descriptionInput.value;
});
buttonApplayFilters.addEventListener("click", () => {
  localStorage.setItem(filterObj);
});
buttonReset.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".filters__container").reset();
});

const cardWrapper = document.querySelectorAll(".card__wrapper-to768");

function showMore() {
  cardWrapper.forEach((item) => {
    const tasks = item.children;
    let tasksCount = 10;
    function showTasks(){
    if (tasksCount > tasks.length)
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.display = "grid";
      }
    else {
      for (let i = 0; i < tasksCount; i++) {
        tasks[i].style.display = "grid";
      }
    }
  }showTasks()
    item.addEventListener("scroll", () => {
      const isScrolled = item.scrollTop + item.clientHeight;
      if (item.scrollHeight == isScrolled && tasks.length > tasksCount) {
        buttonShowMore.classList.remove("disabled");
      }
    });
    buttonShowMore.addEventListener("click", () => {
      tasksCount += 10;
      console.log(tasksCount);
      showTasks()
    });
  });
}
showMore();

// const tableHeader=document.querySelector('.table__header');
// console.log(tableHeader.classList.contains('disabled'));
// if(!tableHeader.classList.contains('disabled')){
//   cardWrapper.forEach((item)=>{
//     item.classList.add('disabled');
//   })
// }
const user = localStorage.getItem('username');
const link = document.querySelector('link');
const buttonAdd=document.querySelector('.button__add-new-task');
buttonAdd.addEventListener('click',()=>{
  cont.showNewTaskPage(user);
  const secondStyle=document.createElement('link');
  secondStyle.setAttribute('href', '/datamola2023/UI/css/styles_new_task.css');
  secondStyle.setAttribute('rel','stylesheet')
  link.insertAdjacentElement('afterend',secondStyle)
})
