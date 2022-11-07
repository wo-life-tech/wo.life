import React from 'react';
import styled from 'styled-components';

const CenterDiv = (props) => {
	const { children, isPaddingRequired = true } = props;
	return <FlexBox isPaddingRequired={isPaddingRequired}>{children}</FlexBox>;
};

const FlexBox = styled.div`
	padding: ${(props) => (props.isPaddingRequired ? '4rem 0' : '0')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
	@media (max-width: ${(props) => props.theme.screen.md}) {
		flex-direction: column;
	}
`;

export default CenterDiv;
