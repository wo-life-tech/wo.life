import React from 'react';
import styled from 'styled-components';

const TextWrapper = (props) => {
	const { children } = props;
	return <TextBox>{children}</TextBox>;
};

const TextBox = styled.div`
	width: 50%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default TextWrapper;
