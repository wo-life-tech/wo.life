import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';

const AboutUs = () => {
	return (
		<Section id="about us">
			<CenterDiv>
				<Header>
					<HorizontalRule />
					<PrimaryHeading>About&nbsp;Us</PrimaryHeading>
					<HorizontalRule />
				</Header>
				<ContentWrapper>
					<TextWrapper>Hello World</TextWrapper>
					<img src="/about.png" alt="banner" style={{ maxWidth: '45%', border: '2px solid pink' }} />
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

const Header = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 0;
	display: flex;
	align-items: center;
	gap: 4rem;
	color: ${(props) => props.theme.color.background.white};
	border: 1px solid grey;
`;

const PrimaryHeading = styled.h3`
	font-weight: 600;
	color: ${(props) => props.theme.color.background.white};
`;

const HorizontalRule = styled.hr`
	width: 100%;
	height: 3px;
	background-color: ${(props) => props.theme.color.background.white};
`;

const ContentWrapper = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	border: 5px solid brown;
`;

const TextWrapper = styled.div`
	margin-top: 2rem;
	width: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border: 5px solid green;
`;

export default AboutUs;
