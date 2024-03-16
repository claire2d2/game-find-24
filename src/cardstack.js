import stack from "./stack.js";

class CardStack {
  constructor() {
    this.stack = [...stack];
    this.playedCards = [];
    this.stackLen = this.stack.length;
  }

  selectCard() {
    const randomIndex = Math.floor(Math.random() * this.stackLen);
    const selectedCard = this.stack[randomIndex];
    return selectedCard;
  }
  // delete the card out of the stack object once selected
  update(selectedCard) {
    for (let i = 0; i < this.stackLen; i++) {
      if (selectedCard === this.stack[i]) {
        this.stack.splice(i, 1);
      }
    }
  }
}

export default CardStack;
