import React from 'react';

const ImgWithFallBack = (props) => {
	const { src, alt, fallbackSrc, style, mediaType = 'image/webp' } = props;
	return (
		<picture style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<source srcSet={src} type={mediaType} />
			<img src={fallbackSrc} alt={alt} style={style} />
		</picture>
	);
};

export default ImgWithFallBack;
