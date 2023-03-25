import { useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [pokemon, setpokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const baseURL = "https://pokeapi.co/api/v2/pokemon-species";
    const url = await fetch(`${baseURL}`);
    const data = await url.json();

    const promises = data.results.map(async (pk) => {
      const res = await fetch(pk.url);
      const data = await res.json();
      return data;
    });

    const result = await Promise.all(promises);
    setpokemon(result);
  };

  const getPokemonid = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    //const baseURL = 'https://pokeapi.co/api/v2/pokemon-species';

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        getPokemonid,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
