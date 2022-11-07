import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import Heading from './Heading';
import CenterDiv from '../common/layout/CenterDiv';
import Image from './Image';
import TextWrapper from '../common/layout/TextWrapper';
import { HeadingText } from '../common/layout/Text';

const AboutUs = () => {
	return (
		<Section id="about us">
			<Heading heading="About&nbsp;Us" />
			<CenterDiv isPaddingRequired={false}>
				<TextWrapper>
					<HeadingText heading1="Create and Consume" heading2="Engaging content" />
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
