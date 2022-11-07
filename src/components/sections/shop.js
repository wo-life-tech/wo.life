import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../common/layout/CenterDiv';
import { TextWrapper, ParagraphWrapper } from '../common/layout/TextWrapper';
import Image from './Image';
import { HeadingText } from '../common/layout/Text';

const Shop = () => {
	return (
		<CenterDiv isPaddingRequired={true}>
			<Image src="/shop.png" altText="shop" maxWidth="100%" />
			<TextWrapper>
				<HeadingText heading1="Shop from your favourite" heading2="brands" />
				<ParagraphWrapper>
					<Paragraph>
						Easy to purchase directly from a <br /> users post or our marketplace.
					</Paragraph>
					<Paragraph>
						Shop from a catalog of verified <br /> direct to consumer brands
					</Paragraph>
				</ParagraphWrapper>
			</TextWrapper>
		</CenterDiv>
	);
};

const Paragraph = styled.p`
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 1;
`;

export default Shop;
