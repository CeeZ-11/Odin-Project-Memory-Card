import Card from "./Card";

export default function CardGrid({ cards, handleClick, highestScore }) {
  return (
    <div className="CardGrid">
      {highestScore >= 12 ? (
        <h1> Congratulations! You win </h1>
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
