import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setPokemon(response.data.results);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={handleSearch}
      />
      <div className="pokemon-list">
        {filteredPokemon.map((poke, index) => (
          <div key={index} className="pokemon-card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={poke.name}
            />
            <h3>{poke.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
