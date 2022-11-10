import React from 'react';
import { TextWrapper, ParagraphWrapper } from '../common/layout/TextWrapper';
import { HeadingText, Paragraph } from '../common/layout/Text';
import CenterDiv from '../common/layout/CenterDiv';
import Image from '../common/image';

const Endorse = () => {
	return (
		<CenterDiv isPaddingRequired={false}>
			<TextWrapper>
				<HeadingText heading1="Endorse through your Social channels & Earn" />
				<ParagraphWrapper>
					<Paragraph text="Help people discover products and make easy purchase decisions." />
					<Paragraph text="You earn real money after every successful sale through our robust affiliate marketing system." />
				</ParagraphWrapper>
			</TextWrapper>
			<Image
				src="/boy-influencer.webp"
				fallbackSrc="/boy-influencer.png"
				altText="endorse"
				style={{ maxWidth: '80%' }}
			/>
		</CenterDiv>
	);
};

export default Endorse;
