import React from 'react';
import styled from 'styled-components';

const Shop = () => {
	return (
		<CenterDiv>
			<ImageWrapper>
				<img src="/shop.png" alt="banner" style={{ maxWidth: '100%' }} />
			</ImageWrapper>
			<TextWrapper>
				<h1>Shop from your favourite brands</h1>
				<TextContainer>
					<p>
						Easy to purchase directly from a <br /> users post or our marketplace.
					</p>
					<p>
						Shop from a catalog of verified <br /> direct to consumer brands
					</p>
				</TextContainer>
			</TextWrapper>
		</CenterDiv>
	);
};

const CenterDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.color.background.regular};
	border: 1px solid red;
	padding: 4rem 0;
`;

const TextWrapper = styled.div`
	width: 40%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.color.background.white};
	h1 {
		font-size: 2.4rem;
	}
	p {
		font-size: 1.2rem;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ImageWrapper = styled.div`
	width: 50%;
	padding: 1rem;
	border: 1px solid blue;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Shop;
