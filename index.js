import Game from "./src/game.js";

const cardContainer = document.getElementById("cards-container");
let gameOne = new Game(cardContainer);
// let gameTwo = null;
// let currentGameOne = true;
// let currentGameTwo = false;

const startGame = document.getElementById("start-button");

startGame.addEventListener("click", () => {
  gameOne.start();
  startGame.hidden = true;
});
