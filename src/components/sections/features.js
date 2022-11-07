import React from 'react';
import styled from 'styled-components';

import { Section } from '../global';
import Heading from '../common/layout/Heading';

const Features = () => {
	const Card = (heading, text1, text2, image, altText) => {
		return (
			<CenterDiv>
				<SecText>{heading}</SecText>
				<Paragraph>
					{text1}
					<br />
					{text2}
				</Paragraph>
				<img src={image} alt={altText} style={{ maxWidth: '100%' }} />
			</CenterDiv>
		);
	};

	return (
		<Section id="features">
			<CenterDiv>
				<Heading heading="Features" />
				<ContentWrapper>
					{Card('Socialize', 'Through Image and', 'short video sharing', '/socialize.png', 'socialize')}
					{Card('Shop', 'Directly from our', 'Marketplace or Posts', '/shop2.png', 'shop-via-app')}
					{Card(
						'Earn',
						'Commission for helping your',
						'community purchase products',
						'/earn.png',
						'socialize',
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
`;

const SecText = styled.h2`
	margin: 1rem 0;
	padding: 10px 0;
	letter-spacing: 0.1rem;
`;

const Paragraph = styled.p`
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
	font-weight: 400;
	letter-spacing: 0.4px;
	line-height: 1.2;
`;

export default Features;
