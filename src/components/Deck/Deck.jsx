import cardsStore from "../../stores/cardsStore"
import Card from "../Card/Card";

export default function Deck() {
  const store = cardsStore()

  return (
    <div className="Deck">
      <h2>Card Deck</h2>
      {console.log('Cards', store.deck)}
      {store.deck &&
        store.deck.map((card) => {
          return (
            <Card card={card} key={card.code} />
          );
        })}

    </div>
  )
}
