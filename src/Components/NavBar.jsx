import React from "react";

const NavBar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (

        <nav>
            <div>
                <img alt="logo-pokeapi"
                    src={logoImg}
                    className="navbar-img" />
            </div>
        </nav>

    )
}

export default NavBar;
