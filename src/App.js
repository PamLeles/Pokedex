import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import Pokedex from './Components/Pokedex';
import { getPokemonData, getPokemons } from './API';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log('fetchPokemons error:', error);
    }
  };

  useEffect(() => {
    console.log('carregou!');
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
