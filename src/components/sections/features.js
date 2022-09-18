import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '../global';

const Features = () => (
	<Section id="features">
		<StyledContainer>
			<Subtitle>Features</Subtitle>
			<SectionTitle>Experience the Best of both worlds</SectionTitle>
			<FeaturesGrid>
				<FeatureItem>
					<FeatureTitle>Social</FeatureTitle>
					<FeatureText>Socialize with your friends and followers</FeatureText>
				</FeatureItem>
				<FeatureItem>
					<FeatureTitle>Content</FeatureTitle>
					<FeatureText>
						Consume content from your favourite content creators. <br />
						Stay updated with your favourite brands
					</FeatureText>
				</FeatureItem>
				<FeatureItem>
					<FeatureTitle>Shopping</FeatureTitle>
					<FeatureText>Shop easily from marketplace or directly from user's shared posts.</FeatureText>
				</FeatureItem>
				<FeatureItem>
					<FeatureTitle>Affiliate Marketing</FeatureTitle>
					<FeatureText>Earn without complicated contracts or affiliate systems.</FeatureText>
				</FeatureItem>
				<FeatureItem>
					<FeatureTitle>Brands</FeatureTitle>
					<FeatureText>Maintain and access social presence as well as e-commerce transactions.</FeatureText>
				</FeatureItem>
				<FeatureItem>
					<FeatureTitle>All in One</FeatureTitle>
					<FeatureText>One app for all social and commerce activities.</FeatureText>
				</FeatureItem>
			</FeaturesGrid>
		</StyledContainer>
	</Section>
);

export default Features;

const StyledContainer = styled(Container)``;

const SectionTitle = styled.h3`
	color: ${(props) => props.theme.color.primary};
	display: flex;
	justify-content: center;
	margin: 0 auto 40px;
	text-align: center;
`;

const Subtitle = styled.h5`
	font-size: 16px;
	color: ${(props) => props.theme.color.accent};
	letter-spacing: 0px;
	margin-bottom: 12px;
	text-align: center;
`;

const FeaturesGrid = styled.div`
	max-width: 670px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0px auto;
	grid-column-gap: 40px;
	grid-row-gap: 35px;
	@media (max-width: ${(props) => props.theme.screen.sm}) {
		grid-template-columns: 1fr;
		padding: 0 64px;
	}
`;

const FeatureItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const FeatureTitle = styled.h4`
	color: ${(props) => props.theme.color.primary};
	letter-spacing: 0px;
	line-height: 30px;
	margin-bottom: 10px;
`;

const FeatureText = styled.p`
	text-align: center;
`;
