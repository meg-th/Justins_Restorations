import styled from 'styled-components';
import HeroImg from '../../images/workshop.svg';
import { Link as LinkS } from 'react-router-dom';

export const HeroContainer = styled.div`
	background:  linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), 
	url(${HeroImg});
	height: 60vh;
	background-size: cover;
	background-position: center;
	display: flex;
	text-align: center;
	overflow: hidden;
	justify-content: center;
`;

export const HeroTextContainer = styled.div`
	width: 100%;
	margin: 2rem;
	display: flex; 
	flex-direction: column;
	justify-content: center;

`;


export const HeroText = styled.h3`
  font-size: 36px;
	color: #fff;
  text-shadow: 1px 1px #000000;
  font-weight: 300;

  @media screen and (max-width: 550px) {
  	font-size: 26px;

  }
`;

export const HeroLink = styled(LinkS)`
	border: 1px solid #fff;
	border-radius: 8px;
	text-decoration: none;
	padding: 16px;
	width: 120px;
	color: #fff;
	text-align: center;
	margin: 8px;

		&:hover {
			color: #fff;
			background-color: rgba(255, 255, 255, 0.3);
			transition: all ease-in-out 0.2s;
		}
	
`;

export const HeroLinkContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 1rem;
`