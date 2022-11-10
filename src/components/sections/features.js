import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import Heading from '../common/layout/Heading';
import ImgWithFallBack from '../common/ImgWithFallBack';

const Features = () => {
	const Card = (heading, src, fallbackSrc, altText, text) => {
		return (
			<CenterDiv>
				<SecText>{heading}</SecText>
				<Text>{text}</Text>
				<ImgWithFallBack
					src={src}
					fallbackSrc={fallbackSrc}
					altText={altText}
					style={{ maxWidth: '90%', paddingTop: '2.5rem' }}
				/>
			</CenterDiv>
		);
	};

	return (
		<Section id="features">
			<CenterDiv>
				<Heading heading="Features" />
				<ContentWrapper>
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
						'Shop from your favourite brands through shoppable content & marketplace ',
					)}
					{Card(
						'Earning',
						'/influencer-earning.webp',
						'/influencer-earning.png',
						'influencer-earning',
						'Track all your earnings in the    wallet. Earn from a highly robust affiliate',
					)}
				</ContentWrapper>
			</CenterDiv>
		</Section>
	);
};

const CenterDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	gap: 0.5rem;
	border: 1px solid red;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
	margin: 0;
	padding: 0;
`;

const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;
	align-items: center;
	justify-content: space-around;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		flex-direction: column;
	}
`;

const SecText = styled.h2`
	margin: 1rem 0;
	padding: 10px 0;
	letter-spacing: 0.1rem;
`;

const Text = styled.p`
	padding: 0 1rem;
	font-size: 1.5rem;
	line-height: 2rem;
`;

export default Features;
