import React from 'react';
import {FooterContainer, FooterWrap, FooterTitleText, FooterLinksContainer, FooterLink} from './FooterElements';
import {FaFacebookSquare, FaLinkedin, FaInstagramSquare} from 'react-icons/fa';


const Footer = () => {
	return (
	
			<FooterContainer>
				<FooterWrap>
					<FooterLinksContainer>
						<FooterLink className="icon">
							<FaFacebookSquare />
						</FooterLink>
						<FooterLink>
							<FaLinkedin/>
						</FooterLink>
						<FooterLink>
							<FaInstagramSquare/>
						</FooterLink>
					</FooterLinksContainer>
				  <FooterTitleText>
				    Justin's Restorations - 07770 470463 - justins.restorations@outlook.com
				  </FooterTitleText>
				</FooterWrap>
			</FooterContainer>
		


	)
}

export default Footer;
