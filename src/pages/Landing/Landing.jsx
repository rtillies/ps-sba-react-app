import React, { useContext } from "react";
import "./landing.css";
import { DeckContext } from "../../components/Context";

export default () => {
  const deckID = useContext(DeckContext);

  return (
    <>
      <div className="landing page">
        <h1>Welcome to the Thunderdome</h1>
        <p>Card Deck: {deckID}</p>
      </div>
    </>
  );
};
