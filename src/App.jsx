import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import AllCards from "./pages/AllCards/AllCards";
import Custom404 from "./pages/Custom404/Custom404";
import { DeckContext } from "./Context";

function App() {
  const [deck, setDeck] = useState("06tjvcttxnld");

  //#region Use Effect: Fetch Card Deck
  useEffect(() => {
    async function getDeck() {
      if (!deck) setDeck("new");
      axios
        .get(
          `${deck}/shuffle/?jokers_enabled=true`
        )
        .then((res) => {
          console.log(res.data);
          setDeck(res.data.deck_id);
        });
    }
    getDeck();
  }, []);
  //#endregion

  return (
    <>
      <div className="App">
        <Nav />

        <DeckContext.Provider value={deck}>
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
