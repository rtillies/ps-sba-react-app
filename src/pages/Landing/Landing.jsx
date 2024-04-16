import React, { useContext } from "react";
import "./landing.css";
import { DeckContext } from "../../components/Context";
import cardsStore from "../../stores/cardsStore";

export default () => {
  // const deckID = useContext(DeckContext);
  const store = cardsStore();

  return (
    <>
      <div className="landing page">
        <h1>Welcome to the Thunderdome</h1>
        <span className="small">Card Deck ID: {store.deckID}</span>
      </div>
    </>
  );
};
