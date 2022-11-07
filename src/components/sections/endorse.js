import React from 'react';
import { TextWrapper, ParagraphWrapper } from '../common/layout/TextWrapper';
import { HeadingText, Paragraph } from '../common/layout/Text';
import CenterDiv from '../common/layout/CenterDiv';
import Image from '../common/image';

const Endorse = () => {
	return (
		<CenterDiv isPaddingRequired={true}>
			<TextWrapper>
				<HeadingText heading1="Endorse what you love & " heading2="Earn" />
				<ParagraphWrapper>
					<div>
						<Paragraph text="Help people discover products and" />
						<Paragraph text="make easy purchase decisions." />
					</div>
					<div>
						<Paragraph text="You earn a commission for every" />
						<Paragraph text="successful sale." />
					</div>
				</ParagraphWrapper>
			</TextWrapper>
			<Image
				src="/boy-influencer.webp"
				fallbackSrc="/boy-influencer.png"
				altText="endorse"
				style={{ maxWidth: '100%' }}
			/>
		</CenterDiv>
	);
};

export default Endorse;
