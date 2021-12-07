import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Hamburger from 'hamburger-react'
import NavMenu from "../NavMenu/NavMenu";


const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
 

  return (
    <div className="navbar">
      <Hamburger className="hamburgerMenu" toggled={isOpen} toggle={setOpen} color="#FFFFFF"/>
    </div>

  )
}


export default Navbar;