import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaPokemon from './components/ListaPokemon';
import DetallePokemon from './components/DetallePokemon';
import {PokemonProvider} from './context/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter> 
        <Routes>
        <Route path='/' element = {<ListaPokemon></ListaPokemon>}></Route>
        <Route path='/pokemon/:id' element = {<DetallePokemon></DetallePokemon>}></Route>
       </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
