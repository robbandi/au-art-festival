import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'white' : 'white')};
  height: 100px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.9s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: black;
  draggable: false;
  user-drag: none; 
user-select: none;
-moz-user-select: none;
-webkit-user-drag: none;
-webkit-user-select: none;
-ms-user-select: none;
  width: 20vh;
  height: 20vh;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const logo = styled.div`
  color: black;
  width: 20px;
  draggable: false;
  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  justify-self: flex-start;
  cursor: pointer;
  // font-size: 1.5rem;
  // display: flex;
  // align-items: center;
  // margin-left: 24px;
  // font-weight: bold;
  // text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  color: black;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 1px;
  list-style: none;
  text-align: center;
  // margin-right: -px;
  float: right;
  // font-size: 50px;
  // position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  font-size: 1rem;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  color: white;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  // background: #038477;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavAnalytics = styled.div`

// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
// -webkit-font-smoothing: antialiased;
font-weight: bolder;
color: black;
text-decoration: none;
font-size: 20px;
float: right;
// border-bottom: 5px solid #4d05e8;
// margin-top: 5px;


&:hover {
  height: 6vh;
  // color: white;
  // color: red;
  // border-bottom: 7px solid #4d05e8;
}
`;

// #blue:hover {
// color: white;
// border-bottom: 4px solid #4d05e8;
//   /* color:  rgb(0, 72, 226);
//   border-bottom: 4px solid rgb(0, 72, 226); */
// }

// export const NavAbout = styled.div`



// #blue {
//   /* position: absolute; */
//   float: right;
//   color: white;
//   text-decoration: none;
//   font-size: 2vh;
//   margin-top: -20px;
// }
