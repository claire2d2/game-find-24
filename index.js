import Game from "./src/game.js";

const cardContainer = document.getElementById("cards-container");
let gameOne = new Game(cardContainer, false);
// let gameTwo = null;
// let currentGameOne = true;
// let currentGameTwo = false;

const rulesButton = document.getElementById("rules-button");
const showRules = document.querySelector("dialog");
rulesButton.addEventListener("click", () => {
  showRules.showModal();
});

const startGame = document.getElementById("start-button");

startGame.addEventListener("click", () => {
  gameOne.start();
  startGame.hidden = true;
});
