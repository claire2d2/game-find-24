import React, { useState } from "react";
import cardStackData from "../assets/stack";

function CardStack() {
  // use state to update the card stack when starting a game

  const selectCard = () => {
    const randomIndex = Math.floor(Math.random() * cardStack.length);
    const selectedCard = cardStack[randomIndex];
    return selectedCard;
  };

  const updateStack = (selectedCard: Object) => {
    const index = cardStack.indexOf(selectedCard);
    if (index !== -1) {
      setCardStack([...cardStack].splice(index, 1));
    }
  };

  return <div></div>;
}

export default CardStack;
