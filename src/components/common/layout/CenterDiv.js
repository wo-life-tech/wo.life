import React from 'react';
import styled from 'styled-components';

const CenterDiv = (props) => {
	const { children, isPaddingRequired = false, isflexDirectionReverse = false } = props;
	return (
		<FlexBox isPaddingRequired={isPaddingRequired} isflexDirectionReverse={isflexDirectionReverse}>
			{children}
		</FlexBox>
	);
};

const FlexBox = styled.div`
	padding: ${(props) => (props.isPaddingRequired ? '4rem 0' : '0 7rem')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
	@media (max-width: ${(props) => props.theme.screen.md}) {
		flex-direction: ${(props) => (props.isflexDirectionReverse ? 'column-reverse' : 'column')};
		padding: ${(props) => (props.isPaddingRequired ? '4rem 0' : '0')};
	}
`;

export default CenterDiv;
