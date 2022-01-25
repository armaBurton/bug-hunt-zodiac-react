import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <div className="zodiac-card">
      <h2>Zodiac card</h2>
      <img alt={props.name} src={`/images/${props.name}.png`} />
      <span className="name">{props.name}</span>
      <span>{props.dates}</span>
    </div>
  )
}
