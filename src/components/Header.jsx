import Scoreboard from "./Scoreboard";

export default function Header({ score, highestScore }) {
  return (
    <div className="Header">
      <div className="Details">
        <h1>Pokemon Memory Card</h1>
        <p>
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
      </div>
      <Scoreboard score={score} highestScore={highestScore} />
    </div>
  );
}
