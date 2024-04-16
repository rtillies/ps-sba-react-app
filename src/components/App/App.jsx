import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";

import cardsStore from "../../stores/cardsStore";
import Nav from "../Nav/Nav";
import Landing from "../../pages/Landing/Landing";
import AllCards from "../../pages/AllCards/AllCards";
import Suits from "../../pages/Suits/Suits";
import Ranks from "../../pages/Ranks/Ranks";
import Filter from "../../pages/Filter/Filter";
import Custom404 from "../../pages/Custom404/Custom404";
import { DeckContext } from "../Context";
import About from "../../pages/About/About";

function App() {
  const store = cardsStore();

  return (
    <>
      <div className="App">
        <Nav />

        {/* <DeckContext.Provider value={store.deckID}> */}
          <Routes>
            <Route index element={<Filter />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/" element={<Landing />} />
            <Route path="/all" element={<AllCards />} />
            <Route path="/suit" element={<Suits />} />
            <Route path="/rank" element={<Ranks />} />
            <Route path="/filter" element={<Filter />} /> */}
            <Route path="*" element={<Custom404 />} />
          </Routes>
        {/* </DeckContext.Provider> */}
      </div>
    </>
  );
}

export default App;
