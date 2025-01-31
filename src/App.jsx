import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <CardGrid />
    </div>
  );
}
