import React from 'react';
import styled from 'styled-components';

const Endorse = () => {
	return (
		<CenterDiv>
			<TextWrapper>
				<h1>
					Endorse what you love & <br />
					Earn
				</h1>
				<TextContainer>
					<p>Help people discover products and make easy purchase decisions. </p>
					<p>You earn a commission for every successful sale. </p>
				</TextContainer>
			</TextWrapper>
			<ImageWrapper>
				<img src="/endorse.png" alt="banner" style={{ maxWidth: '100%' }} />
			</ImageWrapper>
		</CenterDiv>
	);
};

const CenterDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4rem 0;
	background-color: ${(props) => props.theme.color.background.regular};
	border: 1px solid red;
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

export default Endorse;
