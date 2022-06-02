import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import Pokedex from './Components/Pokedex';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try {
      setLoading(true);
    } catch (error) {
      console.log('fetchPokemons error:', error);
    }
  };
  useEffect(() => {
    console.log('carregou!');
    fetchPokemons();
  });
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex />
    </div>
  );
}

export default App;
