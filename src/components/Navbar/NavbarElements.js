import styled from 'styled-components';
import { Link as LinkS } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  background: #fff;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right:0;
  z-index: 10;
  height: 150px;
  overflow: hidden;
  
`;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  flex-direction: column;
  width: 100vw;

`;

export const NavLogo = styled(LinkR)`
  color: #264027;
  cursor: pointer;
  display: flex;
  margin-top: 20px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
  color: #264027;
  display: block;
  position: absolute;
  top:10px;
  right:0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  background: #264027;
  width: 100%;
  height: 30px;
  position: relative;
  top: 4px;

  @media screen and (max-width: 750px) {
    display: none;

	}
`;

export const NavItem = styled.li`
  width: 130px;

`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  height: 100%; 
  cursor: pointer;
  letter-spacing: 0.16em;
  font-weight: lighter;


    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.3);
      transition: all ease-in-out 0.2s;
    }

  `;