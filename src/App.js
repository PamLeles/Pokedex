import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import Pokedex from './Components/Pokedex';

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex />
    </div>
  );
}

export default App;
