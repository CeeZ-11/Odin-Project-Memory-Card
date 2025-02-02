export default function Card({ id, name, image, handleClick }) {
  return (
    <div className="Card" onClick={() => handleClick(id)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
