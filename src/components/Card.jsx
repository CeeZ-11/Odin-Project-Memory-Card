export default function Card({ name, image }) {
  return (
    <div className="Card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
