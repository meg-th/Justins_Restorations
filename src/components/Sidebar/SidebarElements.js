import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkS } from 'react-router-dom';
;
export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width:100%;
	height:100%;
	background: #264027;
	display: flex;
	align-items: center;
	justify-content:center;
	top: 0; 
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
	color: #fff;
`;

export const Icon  = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem; 
	cursor: pointer;
	outline: none;
`;

export const SidebarWrapper = styled.div`
	color: #fff;
`;

export const SidebarMenu = styled.ul`
	display:flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;


	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const SidebarLink = styled(LinkS)`
	display:flex;
	align-items: center;
	justify-content: center; 
	font-size: 1.5rem;
	font-weight: 200; 
	text-decoration: none;
	list-style:none;
	margin-top: 1.5rem;
	color:#fff;

	&:hover {
		transition: 0.2s ease-in-out;
		border-bottom: 2px solid #fff;
		
	}
	`;