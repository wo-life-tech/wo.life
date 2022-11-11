import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import { HeadingText } from '../common/layout/Text';
import CenterDiv from '../common/layout/CenterDiv';
import Image from '../common/image';
import './faq.css';
import FaqData from '../FaqData';
import SingleQuestion from './SingleQuestion';

const Faq = () => {
	const questions = FaqData;

	return (
		<Section id="faqs">
			<CenterDiv isPaddingRequired={false} isflexDirectionReverse={true}>
				<Image
					src="/faq.webp"
					fallbackSrc="/faq.png"
					altText="faq"
					style={{ maxWidth: '80%', padding: '1rem' }}
				/>
				<TextWrapper>
					<HeaderBox>
						<HeadingText heading1="FAQs" />
					</HeaderBox>
					<FaqContainer>
						<section className="info">
							{questions.map((question) => (
								<SingleQuestion key={question.id} {...question} />
							))}
						</section>
					</FaqContainer>
				</TextWrapper>
			</CenterDiv>
		</Section>
	);
};

const TextWrapper = styled.div`
	margin: 0;
	padding: 0;
	width: 50%;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
	}
`;

const FaqContainer = styled.div`
	background: 0 5px 15px rgba(0, 0, 0, 0.1);
	padding: 2rem 1.7rem;
	border: 1px solid yellow;
	h3 {
		line-height: 1.2;
		font-weight: 500;
	}
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
		padding: 1rem;
	}
`;

const HeaderBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding-left: 5rem;
	}
`;

export default Faq;
