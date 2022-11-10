import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import CenterDiv from '../common/layout/CenterDiv';
import { HorizontalRow, PrimaryHeading } from '../common/layout/Text';
import { TextWrapper } from '../common/layout/TextWrapper';
import Image from '../common/image';

const Faq = () => {
	const QuestionContainer = (question, answer, showHorizontalRow) => {
		return (
			<div>
				<Question>{question}</Question>
				{answer !== '' && <Answer>{answer}</Answer>}
				{showHorizontalRow && <HorizontalRow />}
			</div>
		);
	};

	return (
		<Section id="faqs">
			<CenterDiv isPaddingRequired={true} isflexDirectionReverse={true}>
				<Image
					src="/faq.webp"
					fallbackSrc="/faq.png"
					altText="faq"
					style={{ maxWidth: '80%', padding: '1rem' }}
				/>
				<FAQsContainer></FAQsContainer>
			</CenterDiv>
		</Section>
	);
};

const FAQsContainer = styled.div`
	margin: 0;
	padding: 0;
	border: 1px solid blue;
`;

const Question = styled.h4`
	letter-spacing: 0.1px;
	line-height: 1.15;
`;

const Answer = styled.p`
	padding: 1rem 0;
	letter-spacing: 0.1px;
	line-height: 1.15;
`;

export default Faq;
