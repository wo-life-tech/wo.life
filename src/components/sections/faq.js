import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';

const Faq = () => {
	const questionText = (ques1, ques2, ans1, ans2, showHorizonalRule) => {
		return (
			<>
				<h2>
					{ques1}
					<br />
					{ques2}
				</h2>
				{ans1 !== '' && (
					<p>
						{ans1}
						<br />
						{ans2}
					</p>
				)}
				{showHorizonalRule && <HorizontalRule />}
			</>
		);
	};

	return (
		<Section id="faqs">
			<CenterDiv>
				<ImageWrapper>
					<img src="/faq.png" alt="faq" style={{ maxWidth: '100%' }} />
				</ImageWrapper>
				<TextWrapper>
					<PrimaryHeading>FAQs</PrimaryHeading>
					{questionText(
						'Does my Earning depend on the number of',
						'followers I have?',
						'No, You can earn irrespective of the number of',
						'followers you have.',
						true,
					)}
					{questionText('Does my Earning depend on the number of', 'followers I have?', '', '', true)}
					{questionText('Does my Earning depend on the number of', 'followers I have?', '', '', false)}
				</TextWrapper>
			</CenterDiv>
		</Section>
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
	width: 60%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.color.background.white};
	h2 {
		font-size: 2rem;
	}
	p {
		font-size: 1.5rem;
		font-weight: 500;
	}
`;

const PrimaryHeading = styled.h1`
	font-size: 3rem;
	color: ${(props) => props.theme.color.background.white};
`;

const ImageWrapper = styled.div`
	width: 50%;
	padding: 1rem;
	border: 1px solid blue;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HorizontalRule = styled.hr`
	width: 70%;
	height: 2px;
	background-color: ${(props) => props.theme.color.background.white};
`;

export default Faq;
