import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import logo from './artfest21.png';
import logosu from './auSuLogo.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoSU
} from './NavbarElements';

// const Fill = {
//   background: black
// }

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo src={logo} onClick={toggleHome} to='/'>
              <img src={logo} draggable='false' width='140px'/>
              </NavLogo>
              <NavLogoSU src={logo, logosu} onClick={toggleHome} to='/'>
              <img src={logosu} draggable='false' width='120px' />
              </NavLogoSU>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
