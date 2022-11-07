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

const HeadingTextStyled = styled.h1`
	margin: 0;
	padding: 10px 0;
	font-size: 2.4rem;
	font-weight: 600;
`;

const ParagraphStyled = styled.p`
	margin: 0;
	padding: 5px 0;
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 0.8;
`;
