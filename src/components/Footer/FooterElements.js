import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: #264027;
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
  left: 0;
  bottom: 0;
  height: 150px;

`

export const FooterWrap = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;

`;

export const FooterTitleText = styled.h1`
	font-size: 16px; 
	font-weight: 400;
	color: #fff;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;
`


export const FooterLink = styled.div`
	color: #fff;
	font-size: 36px;
	padding: 1rem;
	display: block;
`;