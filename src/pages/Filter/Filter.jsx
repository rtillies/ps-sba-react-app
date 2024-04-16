import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { DeckContext } from "../../components/Context";
import cardsStore from "../../stores/cardsStore";
import Deck from "../../components/Deck/Deck";

export default () => {
  const store = cardsStore();
  const [active, setActive] = useState("ace");

  useEffect(() => {
    store.getCards();
  }, []);

  const handleClick = (e) => {
    const term = e.target.value;
    setActive(term);
    store.filter(term);
  };

  return (
    <>
      <div className="ranks page">
        <div className="container">
          <h4>Click a button to filter cards</h4>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Outer toolbar"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Suits group"
            >
              {store.suits &&
                store.suits.map((suit) => {
                  return (
                    <button
                      className="btn btn-outline-dark btn-sm"
                      key={suit}
                      value={suit}
                      onClick={handleClick}
                    >
                      {suit}
                    </button>
                  );
                })}
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Ranks group"
            >
              {store.ranks &&
                store.ranks.map((rank) => {
                  return (
                    <button
                      className="btn btn-outline-success btn-sm"
                      key={rank}
                      value={rank}
                      onClick={handleClick}
                    >
                      {rank}
                    </button>
                  );
                })}
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Separate group"
            >
                            <button
                className="btn btn-success btn-sm"
                id="all"
                key="all"
                value="ALL"
                onClick={handleClick}
              >
                ALL
              </button>

              <button
                className="btn btn-primary btn-sm"
                id="shuffle"
                key="shuffle"
                value="shuffle"
                onClick={store.getCards}
              >
                SHUFFLE CARDS
              </button>
            </div>
          </div>

          <Deck />
          <span className="small">Card Deck ID: {store.deckID}</span>
        </div>
      </div>
    </>
  );
};
