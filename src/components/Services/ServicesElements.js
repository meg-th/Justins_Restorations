import styled from 'styled-components';

export const ServicesContainer = styled.div`
	display: flex;
	padding: 2rem;
	justify-content: center;
	flex-direction: column;
`;
export const ServicesTitleContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid;

`;

export const ServicesTitle = styled.h1`
`;

export const ServicesSubtitle = styled.h2`
	font-weight: 300;
	font-style: italic;
	font-size: 20px;
`;

export const ServicesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 16px;
	
`;

export const ServiceItem = styled.div`
  padding: 8px;
  
`;



export const ServiceItemBackground = styled.div`
	background: url(${(props) => props.imgUrl});
	background-position: center; 
	background-size: cover;
	width: 100%;
  height: 400px;
  position: relative;

  

`;

export const ServiceDetailContainer = styled.div`
	display: flex; 
	flex-direction: column;
	text-align: center;

`;


export const ServiceDetailTitle = styled.h1`
	
`;

export const ServiceDetailText = styled.h3`
	font-weight: 300;
	font-size: 20px;
	padding: 20px;
`;
