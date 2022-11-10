import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import Heading from '../common/layout/Heading';
import ImgWithFallBack from '../common/ImgWithFallBack';

const Features = () => {
	const Card = (heading, src, fallbackSrc, altText, text) => {
		return (
			<CardContainer>
				<CardHeading>{heading}</CardHeading>
				<CardText>{text}</CardText>
				<ImgWithFallBack
					src={src}
					fallbackSrc={fallbackSrc}
					altText={altText}
					style={{ maxWidth: '90%', paddingTop: '2.5rem' }}
				/>
			</CardContainer>
		);
	};

	return (
		<Section id="features">
			<Heading heading="Features" />
			<Container>
				{Card(
					'Socializing',
					'/socializing.webp',
					'/socializing.png',
					'socializing',
					'Engage and get entertained through Posts and short videos',
				)}
				{Card(
					'Shopping',
					'/smartphone-shopping.webp',
					'/smartphone-shopping.png',
					'shop-via-app',
					'Shop from your favourite brands through shoppable content & marketplace',
				)}
				{Card(
					'Earning',
					'/influencer-earning.webp',
					'/influencer-earning.png',
					'influencer-earning',
					'Track all your earnings in the wallet. Earn from a highly robust affiliate',
				)}
			</Container>
		</Section>
	);
};

const Container = styled.div`
	margin: 0;
	padding: 0 3rem;
	display: flex;
	justify-content: space-between;
	align-items: space-between;
	border: 2px solid grey;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
	@media (max-width: ${(props) => props.theme.screen.md}) {
		flex-direction: column;
	}
`;

const CardContainer = styled.div`
	margin: 0;
	padding: 0 !important;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 1px solid white;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding: 1rem;
	}
`;

const CardHeading = styled.h2`
	margin: 1rem 0;
	padding: 10px 0;
	letter-spacing: 0.1rem;
	border: 1px solid blue;
`;

const CardText = styled.p`
	padding: 0 1rem;
	font-size: 1.5rem;
	line-height: 2rem;
	border: 1px solid yellow;
`;

export default Features;
