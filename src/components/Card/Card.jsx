import cardsStore from "../../stores/cardsStore"
import './card.css'

export default function Card({card, position}) {
  const store = cardsStore();

  return (
    <div className="card-group" key={card.code}>
      {/* <p className="top">{position}</p> */}
      {/* <br /> */}
      <img className="Card" src={card.image} alt={card.code} />
      {/* <br /> */}
      {/* <p className="bottom">{card.value} {card.suit}</p> */}
    </div>
  )
}
