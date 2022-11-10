import React from 'react';
import { flexCenter } from '../global';

const ImgWithFallBack = (props) => {
	const { src, alt, fallbackSrc, style, mediaType = 'image/webp' } = props;
	return (
		<picture style={flexCenter}>
			<source srcSet={src} type={mediaType} />
			<img src={fallbackSrc} alt={alt} style={style} />
		</picture>
	);
};

export default ImgWithFallBack;
