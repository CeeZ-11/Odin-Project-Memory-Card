import Card from "./Card";

export default function CardGrid({ cards, handleClick, score }) {
  return (
    <div className="CardGrid">
      {score >= 12 ? (
        <div className="Win">
          <h1> Congratulations! You win </h1>
        </div>
      ) : (
        cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            handleClick={handleClick}
          />
        ))
      )}
    </div>
  );
}
