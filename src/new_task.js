
const btnClose=document.querySelector('.close');
if(btnClose){
btnClose.addEventListener('click', ()=>{
  const modal=document.querySelector('.modal');
  modal.remove();
});}


document.querySelector(".task__form").addEventListener('submit',(e)=>{
    e.preventDefault();
const form=document.querySelector(".task__form");
console.dir(form.elements.taskTitle.value)
})

