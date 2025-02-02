export default function Card({ name, image, handleClick }) {
  return (
    <div className="Card" onClick={() => handleClick(name)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
