import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
	const { src, altText, maxWidth } = props;
	return (
		<ImageWrapper>
			<img src={src} alt={altText} style={{ maxWidth: maxWidth }} />
		</ImageWrapper>
	);
};

const ImageWrapper = styled.div`
	width: 50%;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Image;
