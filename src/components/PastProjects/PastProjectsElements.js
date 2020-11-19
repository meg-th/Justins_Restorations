import styled from 'styled-components';
import {Link as LinkP} from 'react-router-dom';

export const PPContainer = styled.div`
	display: flex;
	padding: 2rem;
	justify-content: center;
	flex-direction: column;
`;

export const PPTitleContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid;
`;

export const PPTitle = styled.h1`

`;

export const PPSubtitle = styled.h2`
	font-weight: 300;
	font-style: italic;
  font-size: 20px;
`;

export const PPLinksContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PastProjectItem = styled.div`
	border-bottom: 1px solid;
	padding: 1rem;
	display: flex;
  justify-content: flex-start;
	overflow:hidden;

	@media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    padding-top: 1em;
   
	}
`;

export const PastProjectItemTitle = styled.h2`
	font-size: 26px;
	
`;
export const PastProjectItemText = styled.p`
  font-weight: 300;
	
`;
export const PastProjectItemLink = styled(LinkP)`
	border: 2px solid #292929;
	background: transparent;
	width: 120px;
	justify-content: center;
	text-align: center; 
	padding: 8px; 
	border-radius: 8px;
	margin-top: 1.5em;
	text-decoration: none;
	color: #292929;
`;

export const PastProjectItemImg = styled.img`
	width: 24vw;

	@media screen and (max-width: 750px) {
    width: 80vw;
	}

`;

export const PastProjectItemDetails = styled.div`
  padding-left: 2rem;

  @media screen and (max-width: 750px) {
    padding: 0;

	}
	
`;

