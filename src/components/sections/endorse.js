import React from 'react';
import styled from 'styled-components';
import { TextWrapper, ParagraphWrapper } from '../common/layout/TextWrapper';
import { YellowText, Paragraph } from '../common/layout/Text';
import CenterDiv from '../common/layout/CenterDiv';
import Image from '../common/image';

const Endorse = () => {
	return (
		<CenterDiv isPaddingRequired={true}>
			<TextWrapper>
				<MainText>
					Endorse through your Social channels & <YellowText text="Earn" />
				</MainText>
				<ParagraphWrapper>
					<Paragraph text="Help people discover products and make easy purchase decisions." />
					<Paragraph text="You earn real money after every successful sale through our robust affiliate marketing system." />
				</ParagraphWrapper>
			</TextWrapper>
			<Image
				src="/boy-influencer.webp"
				fallbackSrc="/boy-influencer.png"
				altText="endorse"
				style={{ maxWidth: '80%' }}
			/>
		</CenterDiv>
	);
};

const MainText = styled.h1`
	margin: 0;
	padding: 0;
	font-size: 3.4rem;
	font-weight: 900;
	line-height: 1.15;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		font-size: 1.8rem;
		width: 100%;
		padding: 0 3rem;
	}
`;

export default Endorse;
