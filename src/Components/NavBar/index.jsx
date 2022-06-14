import React, { useContext } from 'react';
import FavoriteContext from '../../contexts/Favorites/context';

import './styles.css';

const NavBar = () => {
  const { favorites } = useContext(FavoriteContext);
  const logoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
    <nav>
      <div>
        <img alt="logo-pokeapi" src={logoImg} className="navbar-img" />
      </div>
      <div>{favorites.length}💗</div>
    </nav>
  );
};
export default NavBar;
