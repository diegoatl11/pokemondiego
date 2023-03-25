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
            <span className="text">Grupo: </span>
            {pokemon.egg_groups?.map((pk) => (
              <span key={pk.name} className={`${pk.name}`}>
                {" "}
                {pk.name}{" "}
              </span>
            ))}
          </div>

          <p>
            Paragraph of text beneath thsasasae heading to explain the heading.
            We'll add onto it with another sentence and probably just keep going
            until we run out of words.
          </p>
          <a className="text-decoration-none" href="#!">
            Call to action
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetallePokemon;
