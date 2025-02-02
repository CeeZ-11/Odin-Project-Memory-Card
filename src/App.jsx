import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <Header score={score} />
      <CardGrid handleClick={handleClick} />
    </div>
  );
}
