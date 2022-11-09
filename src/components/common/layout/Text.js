import React from 'react';
import styled from 'styled-components';

export const HeadingText = (props) => {
	const { heading1, heading2 = '' } = props;
	return (
		<HeadingTextStyled>
			{heading1}
			<br />
			{heading2 !== '' ? <span>{heading2}</span> : null}
		</HeadingTextStyled>
	);
};

export const Paragraph = (props) => {
	const { text } = props;
	return <ParagraphStyled>{text}</ParagraphStyled>;
};

export const HorizontalRow = () => <HorizontalRowStyled />;

export const PrimaryHeading = (props) => {
	const { heading, isLarger = false } = props;
	return <PrimaryHeadingStyled isLarger={isLarger}>{heading}</PrimaryHeadingStyled>;
};

export const BlueText = (props) => {
	const { text } = props;
	return <BlueStyledText>{text}</BlueStyledText>;
};

export const YellowText = (props) => {
	const { text } = props;
	return <YellowStyledText>{text}</YellowStyledText>;
};

const HeadingTextStyled = styled.h1`
	margin: 0;
	padding: 10px 0;
	font-size: 2.4rem;
	font-weight: 600;
	line-height: 1.15;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		font-size: 1.8rem;
	}
`;

const ParagraphStyled = styled.p`
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
	font-weight: 400;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		font-size: 1.2rem;
	}
`;

const HorizontalRowStyled = styled.hr`
	margin: 0;
	width: 100%;
	height: 2px;
	background-color: ${(props) => props.theme.color.background.white};
`;

const PrimaryHeadingStyled = styled.h3`
	font-weight: 600;
	font-size: ${(props) => (props.isLarger ? '3rem' : '2rem')};
	line-height: 1.15;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		font-size: ${(props) => (props.isLarger ? '2.4rem' : '1.7rem')};
	}
`;

const BlueStyledText = styled.span`
	color: #74ffff;
`;

const YellowStyledText = styled.span`
	color: #ffff6e;
`;
