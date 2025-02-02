export default function Card({ id, name, image, sound, handleClick }) {
  return (
    <div className="Card" onClick={() => handleClick(id, sound)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
