import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import cardsStore from "./stores/cardsStore";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import AllCards from "./pages/AllCards/AllCards";
import Custom404 from "./pages/Custom404/Custom404";
import { DeckContext } from "./Context";

function App() {
  const store = cardsStore();

  return (
    <>
      <div className="App">
        <Nav />

        <DeckContext.Provider value={store.deckID}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/all" element={<AllCards />} />
            <Route path="*" element={<Custom404 />} />
          </Routes>
        </DeckContext.Provider>
      </div>
    </>
  );
}

export default App;
