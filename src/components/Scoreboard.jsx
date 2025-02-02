export default function Scoreboard({ score, highestScore }) {
  return (
    <div className="ScoreBoard">
      <p>Score: {score}</p>
      <p>Best Score: {highestScore}</p>
    </div>
  );
}
