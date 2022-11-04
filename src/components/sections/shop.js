import React from 'react';
import styled from 'styled-components';

const Shop = () => {
	return (
		<CenterDiv>
			<ImageWrapper>
				<img src="/shop.png" alt="banner" style={{ maxWidth: '100%' }} />
			</ImageWrapper>
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

const CenterDiv = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
`;

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

const ImageWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Shop;
