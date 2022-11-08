import React from 'react';
import { Section } from '../global';
import { TextWrapper, ParagraphWrapper } from '../common/layout/TextWrapper';
import { HeadingText, Paragraph } from '../common/layout/Text';
import CenterDiv from '../common/layout/CenterDiv';
import Heading from '../common/layout/Heading';
import Image from '../common/image';

const AboutUs = () => {
	return (
		<Section id="about us">
			<Heading heading="About&nbsp;Us" />
			<CenterDiv isPaddingRequired={true}>
				<TextWrapper>
					<HeadingText heading1="Create and Consume Engaging content"/>
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
				<Image
					src="/create-and-consume.webp"
					fallbackSrc="/create-and-consume.png"
					altText="about-us"
					style={{ maxWidth: '70%' }}
				/>
			</CenterDiv>
		</Section>
	);
};

export default AboutUs;
