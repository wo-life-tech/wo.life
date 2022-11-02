import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';

const AboutUs = () => {
	return (
		<Section id="about us">
			<CenterDiv>
				<PrimaryHeading>
					<HorizontalRule />
					About Us
					<HorizontalRule />
				</PrimaryHeading>
				<ContentWrapper>
					<div>
						<SecText>Create and Consume</SecText>
						<SecText>Engaging content</SecText>
						<TernaryText>Connect and Socialize with your friends and following. </TernaryText>
						<TernaryText>Get entertained by your favourite creators. </TernaryText>
					</div>
					<img src="/about.png" alt="banner" style={{ maxWidth: '100%' }} />
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
	gap: 1rem;
	color: ${(props) => props.theme.color.background.white};
`;

const SecText = styled.h1`
	margin: 0;
	color: ${(props) => props.theme.color.background.white};
`;

const TernaryText = styled.h2`
	font-weight: 400;
	color: ${(props) => props.theme.color.background.white};
`;

const HorizontalRule = styled.hr`
	width: 100%;
	height: 1px;
	background-color: ${(props) => props.theme.color.background.white};
`;

const ContentWrapper = styled.div`
	width: 90%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;
	align-items: center;
`;

export default AboutUs;
