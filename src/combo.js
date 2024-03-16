import cardStack from "./cardstack.js";

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
      this.style(newCard);
      this.cardsArray.push(newCard);
    }
  }

  // removes the card div elements when the combo is over
  comboOver() {
    this.cardsArray.forEach((card) => {
      card.remove();
    });
    this.cardsArray = [];
  }

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

export default GenerateCombo;

// generate random value between 1 and 10 for each of the four cards
// make the number appear in the cards
