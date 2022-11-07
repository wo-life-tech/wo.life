import React from 'react';
import styled from 'styled-components';

import { Section } from '../global';
import Heading from '../common/layout/Heading';
import { Paragraph } from '../common/layout/Text';

const Features = () => {
	const Card = (heading, image, altText, text1, text2 = '') => {
		return (
			<CenterDiv>
				<SecText>{heading}</SecText>
				<Paragraph text={text1} />
				{text2 !== '' && <Paragraph text={text2} />}
				<img src={image} alt={altText} style={{ maxWidth: '100%' }} />
			</CenterDiv>
		);
	};

	return (
		<Section id="features">
			<CenterDiv>
				<Heading heading="Features" />
				<ContentWrapper>
					{Card('Socialize', '/socialize.png', 'socialize', 'Through Image and', 'short video sharing')}
					{Card('Shop', '/shop2.png', 'shop-via-app', 'Directly from our', 'Marketplace or Posts')}
					{Card(
						'Earn',
						'/earn.png',
						'socialize',
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
