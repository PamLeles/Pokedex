import React, { useState } from "react";

const SearchBar = (props) => {
    const {onSearch} = props
    const [search, setSearch] = useState("ditto")
    const OneChangeHandle = (e) => {
        setSearch(e.target.value)
    }
    const OnbuttonClickHandler = () => {
        console.log('Pokémon:', search)
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokémon" onChange={OneChangeHandle} />
            </div>
            <div className="searchbar-btn">
                <button onClick={OnbuttonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}
export default SearchBar;