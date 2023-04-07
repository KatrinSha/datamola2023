import Controller from "./controller/Controller.js";
const cont = new Controller();
let filterObj = {};
const nameSelector = document.querySelector("#name");
const privacySelector = document.querySelector("#privacy");
const prioritySelector = document.querySelector("#priority");
const statusSelector= document.querySelector("#status");
const btnDate = document.querySelector(".button-date");
const calendars = document.querySelector(".calendars");
const dateFromInput = document.querySelector("#date1");
const dateToInput = document.querySelector("#date2");
const calSub = document.querySelector(".calSub");
const descriptionInput=document.querySelector('#description');
const buttonSearch=document.querySelector('.button-search');
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

btnDate.addEventListener("click", () => {
  calendars.classList.toggle("visibilityDate");
});
calSub.addEventListener("click", () => {
  filterObj.dateFrom = new Date(dateFromInput.value);
  filterObj.dateTo = new Date(dateToInput.value);
  calendars.classList.toggle("visibilityDate");
});
buttonSearch.addEventListener('click',(e)=>{
    e.preventDefault();
    filterObj.description=descriptionInput.value;
})
console.log(filterObj);
