import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../common/layout/CenterDiv';
import Image from './Image';

const Shop = () => {
	return (
		<CenterDiv isPaddingRequired={true}>
			<Image src="/shop.png" altText="shop" maxWidth="100%" />
			<TextWrapper>
				<HeadingText>
					Shop from your favourite <br /> brands
				</HeadingText>
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

const TextWrapper = styled.div`
	width: 50%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ParagraphWrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	display: flex;
	gap: 2rem;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

const HeadingText = styled.h1`
	font-size: 2.4rem;
`;

const Paragraph = styled.p`
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 1;
`;

export default Shop;
