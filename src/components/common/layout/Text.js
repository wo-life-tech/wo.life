import React from 'react';
import styled from 'styled-components';

export const HeadingText = (props) => {
	const { heading1, heading2 } = props;
	return (
		<HeadingTextStyled>
			{heading1}
			<br />
			{heading2}
		</HeadingTextStyled>
	);
};

const HeadingTextStyled = styled.h1`
	margin: 0;
	padding: 10px 0;
	font-size: 2.4rem;
	font-weight: 600;
`;
