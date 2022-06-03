import React, { useRef, useState } from 'react';
import searchPokemon from '../../services/searchPokemon';

import './styles.css';

const SearchBar = () => {
  const [search, setSearch] = useState('ditto');
  const [pokemon, setPokemon] = useState();
  const searchRef = useRef(null);

  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  };
  const onbuttonClickHandler = async () => {
    const result = await searchPokemon(searchRef.current.value.toLowerCase());
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokémon" ref={searchRef} value={search} onChange={onChangeHandle} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onbuttonClickHandler}>Buscar</button>
      </div>
      {pokemon ? (
        <div>
          <div>Nome: {pokemon.name}</div>
          <div>Peso: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
};
export default SearchBar;
