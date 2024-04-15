import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import "./allCards.css";
import { DeckContext } from "../../components/Context";
import cardsStore from "../../stores/cardsStore";
import Deck from "../../components/Deck/Deck";

export default () => {
  const store = cardsStore();

  useEffect(() => {
    store.getCards();
  }, []);

  return (
    <>
      <div className="allcards page">
        <div className="container">
          <h1>All Cards</h1>
          <p>Card Deck: {store.deckID}</p>
          <Deck />
        </div>
      </div>
    </>
  );
};
