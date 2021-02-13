import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import logo from './artfest21.png';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavAnalytics,
  NavBtn,
  NavBtnLink
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
              <img src={logo} draggable='false' width='150px'/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaCircle size={16}/>
            </MobileIcon>
              <NavMenu>
               <NavAnalytics>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Analytics
                </NavLinks>
                </NavItem>
              </NavAnalytics>
              <NavAnalytics>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
                </NavItem>
              </NavAnalytics>
              </NavMenu>

              {/* <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem> */}
              {/* <NavItem> */}
                {/* <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem> */}
            {/* </NavMenu> */}
            {/* <NavBtn>
              <NavBtnLink to='/signin'>an</NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
