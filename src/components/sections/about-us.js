import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import Heading from './Heading';
import CenterDiv from '../common/layout/CenterDiv';
import Image from './Image';

const AboutUs = () => {
	return (
		<Section id="about us">
			<Heading heading="About&nbsp;Us" />
			<CenterDiv isPaddingRequired={false}>
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
				<Image src="/about.png" altText="about-us" maxWidth="90%" />
			</CenterDiv>
		</Section>
	);
};

const ContentWrapper = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TextWrapper = styled.div`
	width: 50%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid blue;
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
	font-size: 2.4rem;
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
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
	font-weight: 400;
`;

export default AboutUs;
