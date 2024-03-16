import Game from "./src/game.js";

const cardContainer = document.getElementById("cards-container");
let gameOne = new Game(cardContainer);
// let gameTwo = null;
gameOne.generateCombo();
// let currentGameOne = true;
// let currentGameTwo = false;

const startGame = document.getElementById("start-game");

startGame.addEventListener("click", () => {
  gameOne.start();
});
