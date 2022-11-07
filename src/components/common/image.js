import React from 'react';
import styled from 'styled-components';
import ImgWithFallBack from './ImgWithFallBack';

const Image = (props) => {
	const { src, fallbackSrc, altText, style } = props;
	return (
		<ImageWrapper>
			<ImgWithFallBack src={src} alt={altText} fallbackSrc={fallbackSrc} style={style} />
		</ImageWrapper>
	);
};

const ImageWrapper = styled.div`
	width: 50%;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
	}
`;

export default Image;
