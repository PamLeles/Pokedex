import FavoriteContext from './context';
import React, { useState } from 'react';

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const updateFavoritesPokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoritesIndex = favorites.indexOf(name);
    if (favoritesIndex >= 0) {
      updateFavorites.slice(favoritesIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    setFavorites(updateFavorites);
  };

  return <FavoriteContext.Provider value={{ favorites, updateFavoritesPokemons }}>{children}</FavoriteContext.Provider>;
};

export default FavoriteProvider;
