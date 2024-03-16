import { stack } from "./stack.js";

class CardStack {
  constructor() {
    this.stack = [...stack];
  }

  selectCard() {
    const randomIndex = Math.floor(Math.random() * this.stack.length);
    const selectedCard = this.stack[randomIndex];
    return selectedCard;
  }
  // delete the card out of the stack object once selected
  update(selectedCard) {
    const index = this.stack.indexOf(selectedCard);
    if (index !== -1) {
      this.stack.splice(index, 1);
    }
  }
}

export default CardStack;
