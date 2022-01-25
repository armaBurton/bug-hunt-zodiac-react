import './zodiac-card.css'

export default function ZodiacCard(props) {
  return (
    <h2>Zodiac card</h2>
    <div className="zodiac-card">
      <img alt={name} src={`/images/${name}`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  )
}
