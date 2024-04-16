import React, { useContext } from "react";
import "./landing.css";
import { BrowserRouter, Link } from "react-router-dom";

import { DeckContext } from "../../components/Context";
import cardsStore from "../../stores/cardsStore";

export default () => {
  // const deckID = useContext(DeckContext);
  const store = cardsStore();

  return (
    <>
      <div className="about">
        <h2>SBA 320H: React Web Application Project</h2>
        <ul>
          <li>
            <strong>Name</strong>: Richard Tillies
          </li>
          <li>
            <strong>Date</strong>: April 15, 2024
          </li>
          <li>
            <strong>Requirements</strong>:{" "}
            <Link to="https://ps-react-curriculum.herokuapp.com/320/project/">
              SBA React Web Application Project
            </Link>
          </li>
        </ul>
        <h3>Objectives</h3>
        <ol>
          <li>Built with HTML, CSS, JavaScript, and React.</li>
          <li>Hosted on Render.</li>
          <li>Frequent commits to GitHub.</li>
          <li>A README.md file in your GitHub repository</li>
        </ol>
        <h3>Render and GitHub</h3>
        <ul>
          <li>
            Render:{" "}
            <a href="https://github.com/rtillies/ps-sba-react-app" target="_blank">
              rtillies/ps-sba-react-app
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://ps-sba-react-app.onrender.com/" target="_blank">
              ps-sba-react-app.onrender.com
            </a>
          </li>
        </ul>
        <h3>Instructions</h3>
        <ul>
          <li>
            A standard deck of cards has 52 cards (13 each of 4 suits) and 2
            jokers.
          </li>
          <li>
            The first section of buttons filter by suit (spades, diamonds,
            clubs, hearts, joker). Click a button and only cards of that suit
            will remain.
          </li>
          <li>
            The next section of buttons filter by rank or value (ace, king,
            queen, jack, 10, ..., 3, 2). Click a button and only cards of that
            rank will remain.
          </li>
          <li>The ALL button will show all 54 cards.</li>
          <li>The SHUFFLE button will mix the cards and show all 54 cards.</li>
        </ul>
        <h3>Notes</h3>
        <ul>
          <li>
            The card objects (including images) are from the{" "}
            <a href="https://deckofcardsapi.com/" target="_blank">Deck of cards API</a>.
          </li>
          <li>
            Originally I had a navigation bar with multiple pages (all cards,
            filter by suit, filter by rank/value). Ultimately I realized the
            functionality I was trying to accomplish was best on a single page.
          </li>
          <li>
            Added an "About" page, which is a terrible HTML version of the
            README, created in a terrible React page.
          </li>
        </ul>
      </div>
    </>
  );
};
