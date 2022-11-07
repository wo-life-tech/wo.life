import React from 'react';
import styled from 'styled-components';

const CenterDiv = ({ children }) => {
	return <FlexBox>{children}</FlexBox>;
};

const FlexBox = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
`;

export default CenterDiv;
