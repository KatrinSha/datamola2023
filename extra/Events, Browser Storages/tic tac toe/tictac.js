let moves = 0;

const IDs = [
  'square1',
  'square2',
  'square3',
  'square4',
  'square5',
  'square6',
  'square7',
  'square8',
  'square9',
];

function addClicker(e) {
  target = e.target;
  if (target.tagName === 'TD') {
    clickerAI(target.id);
  }
}

const table = document.querySelector('.table');

function state() {
  square1 = document.getElementById('square1').textContent;
  square2 = document.getElementById('square2').textContent;
  square3 = document.getElementById('square3').textContent;
  square4 = document.getElementById('square4').textContent;
  square5 = document.getElementById('square5').textContent;
  square6 = document.getElementById('square6').textContent;
  square7 = document.getElementById('square7').textContent;
  square8 = document.getElementById('square8').textContent;
  square9 = document.getElementById('square9').textContent;
}
function unclick() {
  for (let i = 1; i < 10; i++) {
    table.removeEventListener('click', addClicker);
    document.getElementById(`square${i}`).onclick = false;
  }
}
function userO() {
  if (square1 == 'O' && square2 == 'O' && square3 == 'O') {
    document.getElementById('h1').textContent = 'AI WINS!';
    unclick();
  }

  if (square4 == 'O' && square5 == 'O' && square6 == 'O') {
    document.getElementById('h1').textContent = 'AI WINS!';
    unclick();
  }

  if (square7 == 'O' && square8 == 'O' && square9 == 'O') {
    document.getElementById('h1').textContent = 'AI WINS!';
    unclick();
  }

  if (square1 == 'O' && square5 == 'O' && square9 == 'O') {
    document.getElementById('h1').textContent = 'AI WINS!';
    unclick();
  }

  if (square1 == 'O' && square4 == 'O' && square7 == 'O') {
    document.getElementById('h1').textContent = 'AI WINS!';
    unclick();
  }
  if (square2 == 'O' && square5 == 'O' && square8 == 'O') {
    document.getElementById('h1').textContent = 'AI WINS!';
    unclick();
  }
  if (square3 == 'O' && square6 == 'O' && square9 == 'O') {
    document.getElementById('h1').textContent = 'AI WINS!';
    unclick();
  }

  if (square7 == 'O' && square5 == 'O' && square3 == 'O') {
    document.getElementById('h1').textContent = 'AI WINS!';
    unclick();
  }
}
function userX() {
  state();

  if (square1 == 'X' && square2 == 'X' && square3 == 'X') {
    document.getElementById('h1').textContent = 'USER X WINS!';
    unclick();
  }

  if (square4 == 'X' && square5 == 'X' && square6 == 'X') {
    document.getElementById('h1').textContent = 'USER X WINS!';
    unclick();
  }

  if (square7 == 'X' && square8 == 'X' && square9 == 'X') {
    document.getElementById('h1').textContent = 'USER X WINS!';
    unclick();
  }

  if (square1 == 'X' && square5 == 'X' && square9 == 'X') {
    document.getElementById('h1').textContent = 'USER X WINS!';
    unclick();
  }

  if (square1 == 'X' && square4 == 'X' && square7 == 'X') {
    document.getElementById('h1').textContent = 'USER X WINS!';
    unclick();
  }
  if (square2 == 'X' && square5 == 'X' && square8 == 'X') {
    document.getElementById('h1').textContent = 'USER X WINS!';
    unclick();
  }
  if (square3 == 'X' && square6 == 'X' && square9 == 'X') {
    document.getElementById('h1').textContent = 'USER X WINS!';
    unclick();
  }

  if (square7 == 'X' && square5 == 'X' && square3 == 'X') {
    document.getElementById('h1').textContent = 'USER X WINS!';
    unclick();
  }
  userO();
}

function AI() {
  len = IDs.length - 1;
  rand = Math.random();
  random = Math.round(rand * len);

  target = IDs[random];
  setTimeout(() => {
    document.getElementById(target).textContent = 'O';
  }, 200);

  document.getElementById(target).onclick = null;

  index = IDs.indexOf(target);
  IDs.splice(index, 1);
}
function clickerAI(id) {
  if (document.getElementById(id).textContent === 'O') {
    return false;
  }
  document.getElementById(id).textContent = 'X';
  userX();
  // document.getElementById(id).onclick = null;

  const index = IDs.indexOf(id);

  IDs.splice(index, 1);

  moves++;

  if (moves < 8) {
    AI();
  }

  if (moves > 8 || moves === 8) {
    document.getElementById('h1').textContent = 'IT IS A DRAW!';
    unclick();
  }
  moves++;
}

table.addEventListener('click', addClicker);

const btnReset = document.querySelector('#button');
function restart() {
  location.reload();
}
btnReset.addEventListener('click', restart);
