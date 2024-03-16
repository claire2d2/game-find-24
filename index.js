import Game from "./src/combo.js";

const cardContainer = document.getElementById("cards-container");
let gameOne = new Game(cardContainer);
// let gameTwo = null;
gameOne.generateCombo();
// let currentGameOne = true;
// let currentGameTwo = false;

const nextGameButton = document.getElementById("generate-next");

nextGameButton.addEventListener("click", () => {
  gameOne.generateCombo();
  //   if (currentGameOne) {
  //     gameOne.comboOver();
  //     gameTwo = new Game(cardContainer);
  //     gameTwo.generateCards();
  //     currentGameTwo = true;
  //     currentGameOne = false;
  //   } else {
  //     gameTwo.comboOver();
  //     gameOne = new Game(cardContainer);
  //     gameOne.generateCards();
  //     currentGameTwo = false;
  //     currentGameOne = true;
  //   }
});
