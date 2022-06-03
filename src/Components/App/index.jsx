import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/index';
import SearchBar from '../SearchBar';
import Pokedex from '../Pokedex';
import getPokemons from '../../services/getPokemons';
import getPokemonData from '../../services/getPokemonData';

import './styles.css';

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
