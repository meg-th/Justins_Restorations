import styled from 'styled-components';

export const ContactContainer = styled.div`
	display: flex;
	padding: 4rem;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 3rem;

`;

export const ContactTitleContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid;

`

export const ContactTitle = styled.h1`

`;

export const ContactFormContainer = styled.div`
	display: flex;
	height: 300px;
	justify-content: center;
  margin-left: 3rem; 
  margin-right: 3rem;
  margin-bottom: 5rem;
`;


export const ContactFormFieldsContainer = styled.div`
  padding: 1rem;
  display:grid;
	align-items: center;
	width: 80%;
`;

export const FormField = styled.input`
	width: 100%;
	padding: 0.8rem;
	margin-bottom: 1rem;
	font-family: 'Jost', sans-serif;
	border:none;
  border-bottom: 1px solid #292929;
  outline: none;

`;

export const FormButton = styled.button`
	background:transparent;
	padding: 1rem;
	color: #264027;
	justify-self:center;
	font-family: 'Jost', sans-serif;

	&:hover {
    background: #264027;
    color:#fff;
`
