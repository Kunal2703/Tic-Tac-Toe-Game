const Game = document.getElementById("game");

let Squares = [];
let onMove;
let players = ["O", "X"];

const createGame = () => {
  Game.innerHTML = "";
  Squares = [];
  let field = "";

  for (let i = 0; i < 9; i++) {
    field += `<div onclick="pickSquare(${i})" class="square" id="square${i}"></div>`;
    Squares.push(-1);
  }

  Game.innerHTML = field;
  Game.classList.add("fieldBorder");

  onMove = Math.floor(Math.random() * (1 - 0 + 1) + 0);
};

const createMenu = () => {
  Game.innerHTML = "";

  let menu = `
        <div class="menu">
            <div class="title">Tic-Tac-Toe</div>
            <div onclick="createGame()" class="start">START</div>
        </div>`;

  Game.innerHTML = menu;
};

const pickSquare = (i) => {
  Squares.forEach((sqr, j) => {
    if (j == i && sqr == -1) {
      document.getElementById(`square${i}`).innerText = players[onMove];
      Squares[i] = onMove;

      checkVictory(onMove);
      switchPlayer();
    }
  });
};

const checkVictory = (p) => {
  if (
    // left to right
    (Squares[0] == p && Squares[1] == p && Squares[2] == p) ||
    (Squares[3] == p && Squares[4] == p && Squares[5] == p) ||
    (Squares[6] == p && Squares[7] == p && Squares[8] == p) ||
    // top to bottom
    (Squares[0] == p && Squares[3] == p && Squares[6] == p) ||
    (Squares[1] == p && Squares[4] == p && Squares[7] == p) ||
    (Squares[2] == p && Squares[5] == p && Squares[8] == p) ||
    // diagonal left to right
    (Squares[0] == p && Squares[4] == p && Squares[8] == p) ||
    // diagonal right to left
    (Squares[2] == p && Squares[4] == p && Squares[6] == p)
  ) {
    playerWin(p);
  }
    else if (!Squares.includes(-1)) {
    playerWin(-1);
  }
};

const switchPlayer = () => {
  onMove == 1 ? (onMove = 0) : (onMove = 1);
};

const playerWin = (p) => {
  Game.innerHTML = "";
  Game.classList.remove("fieldBorder");

  let menu = `
        <div class="menu">
            <div class="winner">${p == -1 ? "NOONE" : players[p]} WON!</div>
            <div onclick="createGame()" class="start">NEW GAME</div>
    </div>`;

  Game.innerHTML = menu;
};

createMenu();
