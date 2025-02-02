import Card from "./Card";

export default function CardGrid({ cards, handleClick }) {
  return (
    <div className="CardGrid">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
