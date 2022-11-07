import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import CenterDiv from '../common/layout/CenterDiv';
import { HorizontalRow, PrimaryHeading } from '../common/layout/Text';
import { TextWrapper } from '../common/layout/TextWrapper';
import Image from '../common/image';

const Faq = () => {
	const QuestionContainer = (ques1, ques2, ans1, ans2, showHorizontalRow) => {
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
				{showHorizontalRow && <HorizontalRow />}
			</div>
		);
	};

	return (
		<Section id="faqs">
			<CenterDiv isPaddingRequired={false}>
				<Image
					src="/faq.webp"
					fallbackSrc="/faq.png"
					altText="faq"
					style={{ maxWidth: '80%', padding: '1rem' }}
				/>
				<TextWrapper>
					<PrimaryHeading heading="FAQs" isLarger={true} />
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

export default Faq;
