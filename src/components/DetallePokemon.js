import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

const DetallePokemon = () => {
  const { getPokemonid } = useContext(PokemonContext);

  const [pokemon, setpokemon] = useState([]);

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonid(id);
    setpokemon(data);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <br></br>
        <h1>Pokemon # {pokemon.id} </h1>
        <br></br>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-collection"></i>
          </div>
          <img
            src={pokemon.sprites?.other.dream_world.front_default}
            alt={`Pokemon ${pokemon?.name}`}
          />
          <h3 className="h4 fw-bolder">{pokemon.name}</h3>

          <div className="fs-5">
            <span className="text">Habilidades: </span>
            {pokemon.abilities?.map((pk) => (
              <span key={pk.ability?.name} className={`${pk.ability?.name}`}>
                {" "}
                {pk.ability?.name}
                {", "}
              </span>
            ))}
          </div>
          <div className="fs-5">
            <span className="text">Tipo: </span>
            {pokemon.types?.map((type) => (
              <span key={type.type.name} className={`${type.type.name}`}>
                {" "}
                {type.type.name}
                {", "}
              </span>
            ))}
          </div>
          <div className="fs-5">
            <span className="text">Altura: </span>
            <span>{pokemon.height}.</span>
          </div>
          <div className="fs-5">
            <span className="text">Peso: </span>
            <span>{pokemon.weight} KG.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallePokemon;
