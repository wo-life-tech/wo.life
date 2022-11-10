import React from 'react';
import styled from 'styled-components';

export const TextWrapper = (props) => {
	const { children } = props;
	return <TextBox>{children}</TextBox>;
};

export const ParagraphWrapper = (props) => {
	const { children } = props;
	return <ParagraphWrapperStyled>{children}</ParagraphWrapperStyled>;
};

const TextBox = styled.div`
	width: 50%;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	line-height: 1.15;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
	}
`;

const ParagraphWrapperStyled = styled.div`
	margin: 1rem;
	padding: 1rem;
	display: flex;
	gap: 1rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		flex-direction: column;
	}
`;
