import React from "react";
import { useState } from "react";
import cardStackData from "../../assets/stack";
import Card from "../Card";

interface Card {
  value: number;
  image: string;
  family: string;
}

const Combo: React.FC<Props> = () => {
  const [cardStack, setCardStack] = useState<Card[]>(cardStackData);
  const [cardsArray, setCardsArray] = useState<Array<string>>([]);

  function selectCard(cardStack: Card[]) {
    const randomIndex = Math.floor(Math.random() * cardStack.length);
    const selectedCard = cardStack[randomIndex];
    return selectedCard;
  }

  function updateStack(selectedCard: object) {
    const updatedStack = cardStack.filter((card) => card !== selectedCard);
    setCardStack(updatedStack);
  }

  //   function comboOver() {
  //     if (cardContainer) {
  //       cardContainer.innerHTML = "";
  //     }
  //   }

  //   function newCombo() {
  //     if (cardStack.length === 0) {
  //       setCardStack(cardStackData);
  //     }
  //     for (let i: number = 0; i < 4; i++) {
  //       const newCard: HTMLElement = document.createElement("div");
  //       cardContainer.append(newCard);
  //       newCard.classList.add("card");
  //       const selectedCard: object = selectCard(cardStack);
  //       newCard.style.backgroundImage = `url(${selectedCard.image})`;
  //       updateStack(selectedCard);
  //     }
  //   }

  const cardContent = () => {
    if (cardStack.length === 0) {
      setCardStack(cardStackData);
    }
    const selectedCard: Card = selectCard(cardStack);
    return selectedCard.image;
  };

  const generateCombo = () => {
    // comboOver();
    let tempArray: Array = [];
    for (let i: number = 0; i < 4; i++) {
      tempArray.push(cardContent());
    }
    setCardsArray(tempArray);
  };

  return (
    <div>
      <Card imageUrl={cardsArray[0]} />
      <Card imageUrl={cardsArray[1]} />
      <Card imageUrl={cardsArray[2]} />
      <Card imageUrl={cardsArray[3]} />
      <button onClick={generateCombo}>Generate a new combo</button>
    </div>
  );
};

export default Combo;
