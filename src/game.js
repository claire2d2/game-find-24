import CardStack from "./cardstack.js";

class Game {
  constructor(cardContainer) {
    // takes argument of the card container div in the index.html file
    this.cardContainer = cardContainer;
    this.nextButton = document.getElementById("generate-next");
    this.cardPile = new CardStack();
    this.nbOfCardsPerTurn = 4;
    this.nbOfTurns = 0;
    // array of four elements to represent the four cards
    this.cardsArray = [];
  }

  start() {
    this.generateCombo();

    this.nextButton.addEventListener("click", () => {
      this.comboOver();
      this.generateCombo();
    });
  }

  generateCombo() {
    for (let i = 0; i < this.nbOfCardsPerTurn; i++) {
      const newCard = document.createElement("div");
      this.cardContainer.append(newCard);
      newCard.classList.add("card");
      this.pickCard(newCard);
      this.cardsArray.push(newCard);
    }
    this.nbOfTurns++;
  }

  comboOver() {
    this.cardsArray.forEach((card) => {
      card.remove();
    });
    this.cardsArray = [];
  }

  pickCard(card) {
    const selectedCard = this.cardPile.selectCard();
    console.log(selectedCard);
    card.style.backgroundImage = `url(${selectedCard.image})`;
    this.cardPile.update(selectedCard);
  }
}

export default Game;
