import React, { useEffect, useState, useCallback } from 'react';
import NavBar from '../NavBar/index';
import SearchBar from '../SearchBar';
import Pokedex from '../Pokedex';
import getPokemons from '../../services/getPokemons';
import getPokemonData from '../../services/getPokemonData';

import './styles.css';
import searchPokemon from '../../services/searchPokemon';

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 25;

  const fetchPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log('fetchPokemons error:', error);
    }
  }, [page]);

  useEffect(() => {
    fetchPokemons();
  }, [page, fetchPokemons]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);

    if (!result) {
      setNotFound(true);
      return;
    }

    setPokemons([result]);
    setPage(0);
    setTotalPages(1);
    setLoading(false);
  };

  return (
    <div>
      <NavBar />
      <SearchBar onSearch={onSearchHandler} />
      {notFound ? (
        <div className="not-found-text">Errouu!!!!</div>
      ) : (
        <Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
}

export default App;
