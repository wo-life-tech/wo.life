import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../common/layout/CenterDiv';
import Image from './Image';

const Endorse = () => {
	return (
		<CenterDiv>
			<TextWrapper>
				<HeadingText>
					Endorse what you love & <br />
					Earn
				</HeadingText>
				<ParagraphWrapper>
					<div>
						<Paragraph>Help people discover products and</Paragraph>
						<Paragraph>make easy purchase decisions.</Paragraph>
					</div>
					<div>
						<Paragraph>You earn a commission for every</Paragraph>
						<Paragraph>successful sale.</Paragraph>
					</div>
				</ParagraphWrapper>
			</TextWrapper>
			<Image src="/endorse.png" altText="endorse" maxWidth="100%" />
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

const HeadingText = styled.h1`
	margin: 0;
	padding: 10px 0;
	font-size: 2.4rem;
	font-weight: 600;
`;

const Paragraph = styled.p`
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 1;
`;

const ParagraphWrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	display: flex;
	gap: 2rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

export default Endorse;
