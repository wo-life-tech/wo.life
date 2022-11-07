import React from 'react';
import { Section } from '../global';
import { TextWrapper, ParagraphWrapper } from '../common/layout/TextWrapper';
import { HeadingText, Paragraph } from '../common/layout/Text';
import CenterDiv from '../common/layout/CenterDiv';
import Heading from './Heading';
import Image from './Image';

const AboutUs = () => {
	return (
		<Section id="about us">
			<Heading heading="About&nbsp;Us" />
			<CenterDiv isPaddingRequired={false}>
				<TextWrapper>
					<HeadingText heading1="Create and Consume" heading2="Engaging content" />
					<ParagraphWrapper>
						<div>
							<Paragraph text="Connect and Socialize with your" />
							<Paragraph text="friends and following." />
						</div>
						<div>
							<Paragraph text="Get entertained by your favourite" />
							<Paragraph text="creators." />
						</div>
					</ParagraphWrapper>
				</TextWrapper>
				<Image src="/about.png" altText="about-us" maxWidth="90%" />
			</CenterDiv>
		</Section>
	);
};

export default AboutUs;
