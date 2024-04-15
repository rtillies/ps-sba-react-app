import cardsStore from "../../stores/cardsStore";
import Card from "../Card/Card";
import "./deck.css";

export default function Deck() {
  const store = cardsStore();

  return (
    <>
      {/* <h2>Card Deck</h2> */}
      <div className="Deck">
        {console.log("Cards", store.deck)}
        {store.deck &&
          store.deck.map((card) => {
            return <Card card={card} key={card.code} />;
          })}
      </div>
    </>
  );
}
