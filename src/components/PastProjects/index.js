import React from 'react';
import { PPContainer, PPTitleContainer, PPTitle, PPSubtitle, PPLinksContainer, PastProjectItem, PastProjectItemImg, PastProjectItemDetails, PastProjectItemTitle, PastProjectItemText, PastProjectItemLink} from './PastProjectsElements';
import {projectsData} from './data';
import { Link, useParams} from 'react-router-dom';


const PastProjects = ({match}) => {
	 
	return (
		<>
			<PPContainer>
				<PPTitleContainer>
					<PPTitle>Projects and Restorations</PPTitle>
					<PPSubtitle>Over the years we have had the opportunity to work on some fantastic projects. Please take a look at a sample of these restorations below.</PPSubtitle>
				</PPTitleContainer>
				<PPLinksContainer>
					{projectsData.map((project, id) => {
						return(
							<PastProjectItem>
								<PastProjectItemImg src={project.img}/>
				  			<PastProjectItemDetails>
					  			<PastProjectItemTitle>
				            {project.name}
									</PastProjectItemTitle>
									<PastProjectItemText>{project.details}</PastProjectItemText>
									<PastProjectItemLink to={`${match.url}/${project.alt}`}>Learn More</PastProjectItemLink>
								</PastProjectItemDetails>
							</PastProjectItem>
						)
					})}
				</PPLinksContainer>
			</PPContainer>

		</>

	);

};

export default PastProjects;