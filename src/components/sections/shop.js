import React from 'react';
import { TextWrapper, ParagraphWrapper } from '../common/layout/TextWrapper';
import { HeadingText, Paragraph } from '../common/layout/Text';
import CenterDiv from '../common/layout/CenterDiv';
import Image from '../common/image';

const Shop = () => {
	return (
		<CenterDiv isPaddingRequired={true} isflexDirectionReverse={true}>
			<Image src="/phone-shop.webp" fallbackSrc="/phone-shop.png" altText="shop" style={{ maxWidth: '90%' }} />
			<TextWrapper>
				<HeadingText heading1="Shop from your favourite brands" />
				<ParagraphWrapper>
					<Paragraph text="Easy to purchase directly from a users post , marketplace or shared links." />
					<Paragraph text="Shop from a catalog of verified direct to consumer brands & curated products from your favourite creators." />
				</ParagraphWrapper>
			</TextWrapper>
		</CenterDiv>
	);
};

export default Shop;
