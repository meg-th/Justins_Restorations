import React from 'react';
import {ServicesContainer,ServicesTitleContainer, ServicesTitle, ServicesSubtitle, ServicesWrapper, ServiceItem, ServiceItemBackground, ServiceDetailContainer, ServiceDetailTitle, ServiceDetailText } from './ServicesElements';
import {servicesData} from './data';


const Services = () => {
	return (
		
		<>
			<ServicesContainer>
				<ServicesTitleContainer>
					<ServicesTitle>
						Services
					</ServicesTitle>
					<ServicesSubtitle>
						We can offer specialist services for your car's repair, re-commission, or restoration. 
				  </ServicesSubtitle>
				</ServicesTitleContainer>
				<ServicesWrapper>
					{servicesData.map((service, index) => {
						return(
							<ServiceItem key={index}>
								<ServiceItemBackground imgUrl = {service.img}>
									<ServiceDetailContainer className={service.className}>
										<ServiceDetailTitle>{service.name}</ServiceDetailTitle> 
										<ServiceDetailText>{service.details}</ServiceDetailText>
									</ServiceDetailContainer>
								</ServiceItemBackground>
							</ServiceItem>
							
						)
					})}
				</ServicesWrapper>
			</ServicesContainer>
			
		</>
		

	)

};

export default Services;