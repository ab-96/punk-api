import React, { useEffect, useState } from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
    const {searchTerm, handleInput} = props;
 

    return (
        <div className="search">
            <input className="search__box" type="text" placeholder="Search.." value={searchTerm} onInput={handleInput}></input>
       
        </div>

    )
}


export default SearchBox;