import React from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";



const Navbar = ({ handleInput, searchTerm, showData, abvFilter }) => {






  return (
    <div className="navbar">
        <h1 className="navbar__title">Punk API</h1>
        <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
        <FilterList showData={showData} abv="abvFilter"/>

    </div>

  )
}


export default Navbar;