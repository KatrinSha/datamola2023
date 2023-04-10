const btnClose = document.querySelector('.close');

btnClose.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.remove();
  const scriptReg = document.querySelector('#scriptNTas');
  scriptReg.remove();
});
const radioBtns = document.querySelectorAll('.input-privacy');
document.querySelector('.task__form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = document.querySelector('.task__form');
  localStorage.setItem('name', form.elements.taskTitle.value);
  localStorage.setItem('description', form.elements.description.value);
  localStorage.setItem('createdAt', new Date());
  localStorage.setItem('assignee', form.elements.taskAssignee.value);
  localStorage.setItem('status', form.elements.taskStatus.value);
  localStorage.setItem('priority', form.elements.taskPriority.value);
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      localStorage.setItem('isPrivate', radioBtns[i].value);
      console.log(radioBtns[i].value);
    }
  }
  localStorage.setItem('isPrivate', form.elements.taskPublic.value);
});
console.log(localStorage.getItem('createdAt'));
