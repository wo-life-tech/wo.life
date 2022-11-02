import React from 'react';
import styled from 'styled-components';

import { Section } from '../global';

const Features = () => {
	const featureBox = (heading, text1, text2, image, altText, rotate) => {
		return (
			<CenterDiv>
				<SecText>{heading}</SecText>
				<TernaryText>
					{text1}
					<br />
					{text2}
				</TernaryText>
				<img src={image} alt={altText} style={{ maxWidth: '100%', transform: `rotateY(${rotate}deg)` }} />
			</CenterDiv>
		);
	};

	return (
		<Section id="features">
			<CenterDiv>
				<PrimaryHeading>
					<HorizontalRule />
					Features
					<HorizontalRule />
				</PrimaryHeading>
				<ContentWrapper>
					{featureBox(
						'Socialize',
						'Through Image and',
						'short video sharing',
						'/socialize.png',
						'socialize',
						0,
					)}
					{featureBox('Shop', 'Directly from our', 'Marketplace or Posts', '/shop2.png', 'shop-via-app', 0)}
					{featureBox(
						'Earn',
						'Commission for helping your',
						'community purchase products',
						'/socialize.png',
						'socialize',
						180,
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
	background-color: ${(props) => props.theme.color.background.regular};
`;

const PrimaryHeading = styled.h3`
	width: 70%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 2rem;
	color: ${(props) => props.theme.color.background.white};
`;

const HorizontalRule = styled.hr`
	width: 70%;
	height: 2px;
	background-color: ${(props) => props.theme.color.background.white};
`;

const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 2rem;
`;

const SecText = styled.h2`
	margin: 0;
	letter-spacing: 0.1rem;
	color: ${(props) => props.theme.color.background.white};
`;

const TernaryText = styled.p`
	font-weight: 400;
	letter-spacing: 0.4px;
	color: ${(props) => props.theme.color.background.white};
`;

export default Features;
