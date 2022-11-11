import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import Heading from '../common/layout/Heading';

const flexCenter = {
	margin: 0,
	padding: 0,
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
};

const lastElement = {
	margin: 0,
	padding: 0,
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
};

const Features = () => {
	const Card = (heading, src, fallbackSrc, altText, text, isLastElement) => {
		return (
			<CardContainer>
				<CardHeading>{heading}</CardHeading>
				<CardText>{text}</CardText>
				<picture style={isLastElement ? lastElement : flexCenter}>
					<source srcSet={src} type={'image/webp'} />
					<img src={fallbackSrc} alt={altText} style={{ maxWidth: '90%', paddingTop: '2.5rem' }} />
				</picture>
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
					false,
				)}
				{Card(
					'Shopping',
					'/smartphone-shopping.webp',
					'/smartphone-shopping.png',
					'shop-via-app',
					'Shop from your favourite brands through shoppable content & marketplace',
					false,
				)}
				{Card(
					'Earning',
					'/influencer-earning.webp',
					'/influencer-earning.png',
					'influencer-earning',
					'Track all your earnings in the wallet. Earn from a highly robust affiliate',
					true,
				)}
			</Container>
		</Section>
	);
};

const Container = styled.div`
	margin: 0;
	padding: 0 3.2rem;
	display: flex;
	justify-content: space-between;
	align-items: space-between;
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
	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding: 1rem 1rem 3rem !important;
		border: 1px solid grey;
	}
`;

const CardHeading = styled.h2`
	margin: 1rem 0;
	padding: 10px 0;
	letter-spacing: 0.1rem;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding: 1rem 0 0;
	}
`;

const CardText = styled.p`
	padding: 0 5rem;
	font-size: 1.5rem;
	line-height: 2rem;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding: 0 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		${'' /* text-align: center; */}
	}
`;

export default Features;
