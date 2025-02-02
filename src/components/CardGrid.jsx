import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CardGrid({ handleClick }) {
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
      }));

      // Update the state with the fetched data
      return data;
    } catch (err) {
      console.log("Error fetching pokemons:", err);
    }
  };

  useEffect(() => {
    fetchPokemon().then((data) => {
      if (data) setCards(data);
    });
  }, []);

  return (
    <div className="CardGrid">
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
