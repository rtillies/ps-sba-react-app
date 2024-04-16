import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { DeckContext } from "../../components/Context";
import cardsStore from "../../stores/cardsStore";
import Deck from "../../components/Deck/Deck";

export default () => {
  const store = cardsStore();
  const [active, setActive] = useState('ace')

  useEffect(() => {
    store.getCards();
  }, []);

  const handleClick = (e) => {
    const term = e.target.value;
    setActive(term);
    store.filter(term)
  };

  return (
    <>
      <div className="ranks page">
        <div className="container">
        <h3>Click a button to filter cards</h3>
          {store.suits && store.suits.map((suit) => {
            return <button className="btn btn-outline-dark btn-sm" key={suit} value={suit} onClick={handleClick}>{suit}</button>
          })}
        <br />
          {store.ranks && store.ranks.map((rank) => {
            return <button className="btn btn-outline-dark btn-sm" key={rank} value={rank} onClick={handleClick}>{rank}</button>
          })}
          <br />
          <button className="btn btn-primary btn-sm" id='shuffle' key='shuffle' value='shuffle' onClick={store.getCards}>SHUFFLE CARDS</button>
          <Deck />
          <span className="small">Card Deck ID: {store.deckID}</span>
        </div>
      </div>
    </>
  );
};
