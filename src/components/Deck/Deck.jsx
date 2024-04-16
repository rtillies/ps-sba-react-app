import cardsStore from "../../stores/cardsStore";
import Card from "../Card/Card";
import "./deck.css";

export default function Deck() {
  const store = cardsStore();

  return (
    <>
      <div className="Deck">
        {console.log("Cards", store.showDeck)}
        {store.showDeck &&
          store.showDeck.map((card, index) => {
            return <Card card={card} key={card.code} position={index+1} />;
          })}
      </div>
    </>
  );
}
