import cardsStore from "../../stores/cardsStore"

export default function Card({card}) {
  const store = cardsStore();

  return (
    <div key={card.code}>
      {/* Card {card.code} */}
      <img src={card.image} alt={card.code} height={100} />
    </div>
  )
}
