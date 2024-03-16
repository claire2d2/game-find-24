import CardStack from "./cardstack.js";

class Game {
  constructor(cardContainer) {
    // takes argument of the card container div in the index.html file
    this.cardContainer = cardContainer;
    this.nextButton = document.getElementById("generate-next");
    this.cardStack = new CardStack();
    this.nbOfCardsPerTurn = 4;
    this.nbOfTurns = 0;
    // array of four elements to represent the four cards
    this.cardsArray = [];
  }

  start() {
    if (this.nbOfTurns > 0) {
      this.comboOver();
    }
    for (let i = 0; i < this.nbOfCards; i++) {
      const newCard = document.createElement("div");
      this.cardContainer.append(newCard);
      newCard.classList.add("card");
      // newCard.classList.add(`cardNb${i}`);
      this.style(newCard);
      this.cardsArray.push(newCard);
    }
    this.nbOfTurns++;
  }

  generateCombo() {}

  // styles the card according to the value
  style(card) {
    const value = this.generateNumber();
    // fetch the image according to the number
    card.style.backgroundImage = `url(${cardStack.clubs[value - 1].image})`;
  }

  // determines the value for the card between 1 and 10
  cardValue(card) {
    const value = this.generateNumber();
    card.textContent = value;
    // card.style.backgroundImage = `url(${cardStack.clubs[0].image})`;
  }

  generateNumber() {
    let result = Math.floor(Math.random() * 11);
    while (result === 0) {
      result = Math.floor(Math.random() * 11);
      if (result != 0) {
        break;
      }
    }
    return result;
  }
}

export default Game;

// generate random value between 1 and 10 for each of the four cards
// make the number appear in the cards
