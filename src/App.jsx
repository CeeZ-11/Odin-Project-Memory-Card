import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);

  const fetchPokemon = async () => {
    try {
      const cardList = [
        "Pikachu",
        "Charmander",
        "Squirtle",
        "Bulbasaur",
        "Eevee",
        "Jigglypuff",
        "Meowth",
        "Snorlax",
        "Gengar",
        "Dragonite",
        "Lucario",
        "Gyarados",
      ];
      // Ensure we return the axios call in the map
      const promises = cardList.map((pokemon) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
      );

      // Wait for all the requests to resolve
      const responses = await Promise.all(promises);

      // Extract the relevant data
      const data = responses.map((response) => ({
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
        isClick: false,
      }));

      // Update the state with the fetched data
      return data;
    } catch (err) {
      console.log("Error fetching pokemons:", err);
    }
  };

  const shuffleArray = (array) => array.slice().sort(() => Math.random() - 0.5);

  const handleClick = (name) => {
    cards.map((card) => {
      if (card.name === name && !card.isClick) {
        setScore(score + 1);
        card.isClick = true;
        setCards(shuffleArray(cards));
      }
    });
  };

  useEffect(() => {
    fetchPokemon().then((data) => {
      if (data) setCards(data);
    });
  }, []);

  return (
    <div className="App">
      <Header score={score} />
      <CardGrid cards={cards} handleClick={handleClick} />
    </div>
  );
}
