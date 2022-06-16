import React, { useContext } from 'react';
import FavoriteContext from '../../contexts/Favorites/context';

import './styles.css';

const Pokemon = (props) => {
  const { favorites, updateFavoritesPokemons } = useContext(FavoriteContext);
  const { pokemon } = props;

  const onHeartClick = () => {
    updateFavoritesPokemons(pokemon.name);
  };

  const heart = favorites.includes(pokemon.name) ? '💗' : '🖤';

  const handleBackgroundColor = () => {
    const { name: pokemonType } = pokemon.types[0].type;

    switch (pokemonType) {
      case 'grass':
        return '#40dd0c';
      case 'fire':
        return '#E67E22';
      case 'water':
        return '#AED6F1';
      case 'normal':
        return '#F1C40F';
      case 'bug':
        return '#27AE60';
      case 'poison':
        return '#D2B4DE ';
      case 'electric':
        return '#EC7063 ';
      case 'ground':
        return '#D35400';
      case 'fairy':
        return '#e384d3';
      case 'fighting':
        return '#F9E79F ';
      case 'psychic':
        return '#AF7AC5 ';
      case 'rock':
        return '#5D6D7E';
      case 'ghost':
        return '#aa9aeb';
      case 'ice':
        return '#a2b6c5';
      case 'dragon':
        return '#d90303';
      case 'dark':
        return '#032128';
      case 'steel':
        return '#16a8b7';

      default:
        return '#fff';
    }
  };

  const styles = {
    backgroundColor: handleBackgroundColor(),
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />
      </div>
      <div className="card-body" style={styles}>
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-botton">
          <div className="pokemon-type">
            <div className="wrapper-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
