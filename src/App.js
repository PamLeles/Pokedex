import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import { searchPokemon } from './API.js';

const onSearchHandler = (pokemon) => {
  console.log("search", pokemon)
}

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar onSearch={onSearchHandler} />
      <div className="App"></div>
    </div>
  );
}

export default App;
