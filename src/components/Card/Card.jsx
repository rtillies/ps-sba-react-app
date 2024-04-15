import cardsStore from "../../stores/cardsStore"
import './card.css'

export default function Card({card}) {
  const store = cardsStore();

  return (
    <div className="card-group" key={card.code}>
      {/* Card {card.code} */}
      <img className="Card" src={card.image} alt={card.code} />
      <br />
      <p className="words">{card.value} {card.suit}</p>
    </div>
  )
}
