import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./allCards.css";
import { DeckContext } from "../../Context";

export default () => {
  const deck_id = useContext(DeckContext)

  return (
    <>
      <div className="allcards page">
        <div className="container">
          <p>Card Deck: {deck_id}</p>
        </div>
      </div>
    </>
  );
};
