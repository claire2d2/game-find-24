class GenerateCombo {
  constructor(cardContainer) {
    // takes argument of the card container div in the index.html file
    this.cardContainer = cardContainer;
    this.nbOfCards = 4;
    // array of four elements to represent the four cards
    this.cardsArray = [];
  }

  generateCards() {
    for (let i = 0; i < this.nbOfCards; i++) {
      const newCard = document.createElement("div");
      this.cardContainer.append(newCard);
      newCard.classList.add("card");
      // newCard.classList.add(`cardNb${i}`);
      const cardNumber = document.createElement("div");
      newCard.append(cardNumber);
      this.cardValue(cardNumber);
      this.cardsArray.push(newCard);
    }
  }

  comboOver() {
    this.cardsArray.forEach((card) => {
      card.remove();
    });
    this.cardsArray = [];
  }

  cardValue(card) {
    const value = this.generateNumber();
    card.textContent = value;
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

export default GenerateCombo;

// generate random value between 1 and 10 for each of the four cards
// make the number appear in the cards
