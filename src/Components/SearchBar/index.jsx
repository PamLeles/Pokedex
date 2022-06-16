import React, { useRef, useState } from 'react';

import './styles.css';

const SearchBar = (props) => {
  const [search, setSearch] = useState('ditto');
  const { onSearch } = props;
  const searchRef = useRef(null);

  const onChangeHandle = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };
  const onbuttonClickHandler = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokémon" ref={searchRef} value={search} onChange={onChangeHandle} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onbuttonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};
export default SearchBar;
