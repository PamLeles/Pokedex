import React from 'react';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      <div>Paginação</div>
      {loading ? (
        <div>Carregando, segura ai ..</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return <Pokemon key={`pokemon-${index}-${Math.random()}`} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
