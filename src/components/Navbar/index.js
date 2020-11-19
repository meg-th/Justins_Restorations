import React from 'react';
import { Nav, NavbarContainer, NavMenu, NavItem, NavLink, NavLogo, MobileIcon } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home'
import About from '../About';
import Services from '../Services';
import PastProjects from '../PastProjects';
import ContactForm from '../ContactForm';
import { ReactComponent as Logo } from '../../images/Logo1.svg';

const Navbar = ({toggle}) => {
	return (
		<>
			<Nav>
			  <NavbarContainer>
			    <NavLogo to="/">
	  				<Logo />
	  			</NavLogo>
			    <MobileIcon onClick={toggle}>
	  				<FaBars />
	  			</MobileIcon>
	  			<NavMenu>
	  				<NavItem>
	  					<NavLink to="about">ABOUT</NavLink>
	  				</NavItem>
	  				<NavItem>
	  					<NavLink to="services">SERVICES</NavLink>
	  				</NavItem>
	  				<NavItem>
	  					<NavLink to="portfolio">PORTFOLIO</NavLink>
	  				</NavItem>
	  				<NavItem>
	  					<NavLink to="contact">CONTACT US</NavLink>
	  				</NavItem>
	  			</NavMenu>
	  		</NavbarContainer>
			</Nav>
			<Switch>
	  	  <Route component={About} path="/about" />
	  	  <Route component={Services} path="/services" />
	  	  <Route component={PastProjects} path="/portfolio" />
	  	  <Route component={ContactForm} path="/contact" />
			  <Route component={Home} path="/" />
	    </Switch>
	  </>

	);
}

export default Navbar;