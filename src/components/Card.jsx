export default function Card() {
  const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {cardList.map((card) => {
        return (
          <div className="Card" key={card}>
            {card}
          </div>
        );
      })}
    </>
  );
}
