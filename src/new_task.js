const btnClose = document.querySelector('.close');

btnClose.addEventListener('click', () => {
  console.log(btnClose)
  const modal = document.querySelector('.modal');
  modal.remove();
  const scriptReg = document.querySelector('#scriptNTas');
  scriptReg.remove();
});
