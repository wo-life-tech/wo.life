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
					<TextWrapper>
						<HeadingWrapper>
							<SecondaryHeading>Create and Consume</SecondaryHeading>
							<SecondaryHeading>Engaging content</SecondaryHeading>
						</HeadingWrapper>
						<ParagraphWrapper>
							<div>
								<Paragraph>Connect and Socialize with your</Paragraph>
								<Paragraph>friends and following.</Paragraph>
							</div>
							<div>
								<Paragraph>Get entertained by your favourite</Paragraph>
								<Paragraph>creators.</Paragraph>
							</div>
						</ParagraphWrapper>
					</TextWrapper>
					<img src="/about.png" alt="banner" style={{ maxWidth: '45%' }} />
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
`;

const PrimaryHeading = styled.h3`
	font-weight: 600;
	font-size: 2rem;
	color: ${(props) => props.theme.color.background.white};
`;

const HorizontalRule = styled.hr`
	width: 100%;
	height: 3px;
	background-color: ${(props) => props.theme.color.background.white};
`;

const ContentWrapper = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const TextWrapper = styled.div`
	margin-top: 2rem;
	width: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const HeadingWrapper = styled.div`
	margin: 1rem 0;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const SecondaryHeading = styled.h4`
	font-weight: 600;
	margin: 0;
	padding: 10px 0;
	font-size: 3rem;
	color: ${(props) => props.theme.color.background.white};
`;

const ParagraphWrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const Paragraph = styled.p`
	font-weight: 400;
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
	color: ${(props) => props.theme.color.background.white};
`;

export default AboutUs;
