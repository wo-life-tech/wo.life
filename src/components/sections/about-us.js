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
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
`;

const Header = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 0;
	display: flex;
	gap: 4rem;
	align-items: center;
`;

const PrimaryHeading = styled.h3`
	font-weight: 600;
	font-size: 2rem;
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
	width: 45%;
	margin-top: 2rem;
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
	margin: 0;
	padding: 10px 0;
	font-size: 3rem;
	font-weight: 600;
`;

const ParagraphWrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	display: flex;
	gap: 2rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const Paragraph = styled.p`
	font-weight: 400;
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
`;

export default AboutUs;
