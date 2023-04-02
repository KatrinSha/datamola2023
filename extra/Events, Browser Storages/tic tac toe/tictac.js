let square1;
let square2;
let square3;
let square4;
let square5;
let square6;
let square7;
let square8;
let square9;
// keeps track of moves
let moves = 0;

const IDs = ['square1', 'square2', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8', 'square9'];

// handle a click on a cell/square
function clicker(id) {
  // check if moves are even, for user X
  if (moves == 0 || moves % 2 == 0) {
    document.getElementById(id).innerHTML = 'X';
  }
  // else must be user O
  else document.getElementById(id).innerHTML = 'O';

  document.getElementById(id).onclick = null;

  moves++;

  if (moves == 9) {
    userX();
    document.getElementById('h1').innerHTML = 'IT IS A DRAW2222!';
    unclick();
  }

  userX();
}
function addClicker(e) {
  target = e.target;
 if (target.tagName === 'TD') {
   clickerAI(target.id);
 }
}
// handle a click on a cell/square
const table = document.querySelector('.table');

function state() {
  // make variables for individual cells, to make statements
  // easier for readibility

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

// checks for userX victory
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

// analyzes to see whether userO won
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

// Makes all squares unclickable
function unclick() {
  for (let i = 1; i < 10; i++) {
    document.getElementById(`square${i}`).onclick = null;
    table.removeEventListener('click', addClicker)
  }
}

function clickerAI(id) {
  if (document.getElementById(id).textContent === 'O') {
    return false;
  }
  document.getElementById(id).textContent = 'X';

  // document.getElementById(id).onclick = null;

  const index = IDs.indexOf(id);

  IDs.splice(index, 1);

  moves++;

  if (moves < 8) {
    AI();
  }

  if (moves == 9) {
    document.getElementById('h1').textContent = 'IT IS A DRAW!';
    unclick();
  }

  moves++;
  userX();
}

// AI figures out where to make its move
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

table.addEventListener('click', addClicker);
// Refreshes the page
function restart() {
  location.reload();
}
