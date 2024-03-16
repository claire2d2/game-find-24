import GenerateCombo from "./src/combo.js";

const cardContainer = document.getElementById("cards-container");
let gameOne = new GenerateCombo(cardContainer);
let gameTwo = null;
gameOne.generateCards();
let currentGameOne = true;
let currentGameTwo = false;

const nextGameButton = document.getElementById("generate-next");

nextGameButton.addEventListener("click", () => {
  if (currentGameOne) {
    gameOne.comboOver();
    gameTwo = new GenerateCombo(cardContainer);
    gameTwo.generateCards();
    currentGameTwo = true;
    currentGameOne = false;
  } else {
    gameTwo.comboOver();
    gameOne = new GenerateCombo(cardContainer);
    gameOne.generateCards();
    currentGameTwo = false;
    currentGameOne = true;
  }
});
