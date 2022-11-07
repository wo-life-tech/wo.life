import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import CenterDiv from '../common/layout/CenterDiv';
import Image from './Image';

const Faq = () => {
	const QuestionContainer = (ques1, ques2, ans1, ans2, showHorizontalRule) => {
		return (
			<div>
				<Question>
					{ques1}
					<br />
					{ques2}
				</Question>
				{ans1 !== '' && (
					<Answer>
						{ans1}
						<br />
						{ans2}
					</Answer>
				)}
				{showHorizontalRule && <HorizontalRule />}
			</div>
		);
	};

	return (
		<Section id="faqs">
			<CenterDiv isPaddingRequired={false}>
				<Image src="/faq.png" altText="faq" maxWidth="100%" />
				<TextWrapper>
					<PrimaryHeading>FAQs</PrimaryHeading>
					{QuestionContainer(
						'Does my Earning depend on the number of',
						'followers I have?',
						'No, You can earn irrespective of the number of',
						'followers you have.',
						true,
					)}
					{QuestionContainer('Does my Earning depend on the number of', 'followers I have?', '', '', true)}
					{QuestionContainer('Does my Earning depend on the number of', 'followers I have?', '', '', false)}
				</TextWrapper>
			</CenterDiv>
		</Section>
	);
};

const PrimaryHeading = styled.h1`
	font-size: 4rem;
	font-weight: bold;
`;

const TextWrapper = styled.div`
	width: 60%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Question = styled.h2`
	font-size: 2rem;
	letter-spacing: 0.1px;
	line-height: 1.5;
`;

const Answer = styled.p`
	padding: 1rem 0;
	font-size: 1.5rem;
	letter-spacing: 0.1px;
`;

const HorizontalRule = styled.hr`
	margin: 0;
	width: 100%;
	height: 2px;
	background-color: ${(props) => props.theme.color.background.white};
`;

export default Faq;
