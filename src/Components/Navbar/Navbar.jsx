import React, { useEffect, useState } from "react";
import "./Navbar.scss";
// import Hamburger from 'hamburger-react'
// import NavMenu from "../NavMenu/NavMenu";
import SearchBox from "../SearchBox/SearchBox";


const Navbar = ({handleInput, searchTerm} ) => {

  

  return (
    <div className="navbar">

      <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>

      {/* <Hamburger className="hamburgerMenu" toggled={isOpen} toggle={setOpen} color="#FFFFFF"/>
      {isOpen && <NavMenu/>}
     */}
      
      
    </div> 

  )
}


export default Navbar;