import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import { Paragraph } from '../common/layout/Text';
import Heading from '../common/layout/Heading';
import ImgWithFallBack from '../common/ImgWithFallBack';

const Features = () => {
	const Card = (heading, src, fallbackSrc, altText, text1, text2 = '') => {
		return (
			<CenterDiv>
				<SecText>{heading}</SecText>
				<Paragraph text={text1} />
				{text2 !== '' && <Paragraph text={text2} />}
				<ImgWithFallBack
					src={src}
					fallbackSrc={fallbackSrc}
					altText={altText}
					style={{ maxWidth: '90%', padding: '2.5rem' }}
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
						'Socialize',
						'/socializing.webp',
						'/socializing.png',
						'socializing',
						'Through Image and',
						'short video sharing',
					)}
					{Card(
						'Shop',
						'/smartphone-shopping.webp',
						'/smartphone-shopping.png',
						'shop-via-app',
						'Directly from our',
						'Marketplace or Posts',
					)}
					{Card(
						'Earn',
						'/influencer-earning.webp',
						'/influencer-earning.png',
						'influencer-earning',
						'Commission for helping your',
						'community purchase products',
					)}
				</ContentWrapper>
			</CenterDiv>
		</Section>
	);
};

const CenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 0.5rem;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
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

export default Features;
