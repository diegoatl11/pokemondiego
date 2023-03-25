import React , {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

const ListaPokemon = () => {

   const {pokemon} = useContext(PokemonContext);
   console.log(pokemon);
  return (
    <div className="container-fluid">
    <div className="container">
       <br></br>
       <h1>Lista de Pokemones</h1>
       <br></br>

       <table className="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Seleccionar</th>
  </tr>
</thead>
<tbody>

{ pokemon.map( (pk, i)=>(
                                <tr key={pk.id}>
                                    <td>{(i+1)}</td>
                                    <td>{pk.name}</td>
                                    <td>
                                        <Link to={`/pokemon/${pk.id}`} className='btn btn-primary'>Seleccionar</Link>
                                    </td>
                                </tr>
                            ))

                            }

</tbody>
</table>
    </div>
  </div>
  )
}

export default ListaPokemon