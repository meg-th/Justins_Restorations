import React from 'react';

import { HeroContainer, HeroTextContainer, HeroText, HeroLink, HeroLinkContainer } from './HeroElements';

const HeroSection = () => {
	return (
		<>
			<HeroContainer>
				<HeroTextContainer>
					<HeroText>
						Quality Car Repair and Restoration Services in Berkshire
					</HeroText>
					<HeroLinkContainer>
						<HeroLink to="about">
							About Us
						</HeroLink>
						<HeroLink to="contact">
							Contact
						</HeroLink>
					</HeroLinkContainer>
				</HeroTextContainer>
		
			</HeroContainer>
		</>
	);
}

export default HeroSection;
