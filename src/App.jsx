import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import pikachuSound from "./sounds/pikachu-sound.mp3";
import charmanderSound from "./sounds/charmander-sound.mp3";
import squirtleSound from "./sounds/squirtle-sound.mp3";
import bulbasaurSound from "./sounds/bulbasaur-sound.mp3";
import eeveeSound from "./sounds/eevee-sound.mp3";
import jigglypuffSound from "./sounds/jigglypuff-sound.mp3";
import meowthSound from "./sounds/meowth-sound.mp3";
import snorlaxSound from "./sounds/snorlax-sound.mp3";
import gengarSound from "./sounds/gengar-sound.mp3";
import dragoniteSound from "./sounds/dragonite-sound.mp3";
import lucarioSound from "./sounds/lucario-sound.mp3";
import gyaradosSound from "./sounds/gyarados-sound.mp3";

// Define sound URLs for the Pokémon
const pokemonSounds = {
  pikachu: pikachuSound,
  charmander: charmanderSound,
  squirtle: squirtleSound,
  bulbasaur: bulbasaurSound,
  eevee: eeveeSound,
  jigglypuff: jigglypuffSound,
  meowth: meowthSound,
  snorlax: snorlaxSound,
  gengar: gengarSound,
  dragonite: dragoniteSound,
  lucario: lucarioSound,
  gyarados: gyaradosSound,
};

export default function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    fetchPokemon().then((data) => {
      if (data) setCards(data);
    });
  }, []);

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
        sound: pokemonSounds[response.data.name.toLowerCase()] || "",
      }));

      // Update the state with the fetched data
      return data;
    } catch (err) {
      console.log("Error fetching pokemons:", err);
    }
  };

  const shuffleArray = (array) => array.slice().sort(() => Math.random() - 0.5);

  const handleClick = (id, sound) => {
    setCards((cards) => {
      let newScore = score;

      let updatedCards = cards.map((card) => {
        if (card.id === id) {
          if (sound) {
            const audio = new Audio(sound); // Play the Pokémon sound
            audio.play();
          }
          if (!card.isClick) {
            newScore += 1;
            return { ...card, isClick: true };
          } else {
            if (newScore > highestScore) {
              setHighestScore(newScore);
            }
            newScore = 0;
            return { ...card, isClick: false };
          }
        }
        return card;
      });

      if (newScore === 0) {
        updatedCards = cards.map((card) => {
          return { ...card, isClick: false };
        });
      }

      setScore(newScore);

      return shuffleArray(updatedCards);
    });
  };

  return (
    <div className="App">
      <Header score={score} highestScore={highestScore} />
      <CardGrid cards={cards} handleClick={handleClick} score={score} />
    </div>
  );
}
