import cardsStore from "../../stores/cardsStore"

export default function Card({card}) {
  const store = cardsStore();

  return (
    <div key={card.code}>Card</div>
  )
}
