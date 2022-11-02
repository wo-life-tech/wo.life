import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Header = () => {
	const displayImage = (image, altText) => {
		return <img src={image} alt={altText} width="100" />;
	};

	return (
		<HeaderWrapper id="top">
			<CenterDiv>
				<HeaderTextGroup>
					<h1>
						A seamless social
						<br />
						commerce experience
					</h1>
					<BottomText>Download Now : </BottomText>
					<Flex>
						{displayImage('/google-playstore.png', 'playstore')}
						{displayImage('/app-store.png', 'appstore')}
					</Flex>
				</HeaderTextGroup>
				<ImageWrapper>
					<img
						src="/mainscreen.png"
						alt="banner"
						style={{ maxWidth: '80%', transform: 'rotate(-90deg)', border: '1px solid green' }}
					/>
				</ImageWrapper>
			</CenterDiv>
		</HeaderWrapper>
	);
};

export default Header;

const CenterDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.color.background.regular};
	border: 1px solid red;
`;

const HeaderWrapper = styled.header`
	background-color: ${(props) => props.theme.color.background.regular};
	padding: 160px 0 80px 0;
	position: relative;
	@media (max-width: ${(props) => props.theme.screen.md}) {
	}
	border: 1px solid white;
`;

const BottomText = styled.h1`
	color: ${(props) => props.theme.color.white.regular};
	letter-spacing: 1px;
	margin-top: 200px;
`;

const HeaderTextGroup = styled.div`
	width: 50%;
	margin: 0;
	padding: 1rem;
	border: 1px solid blue;
	h1 {
		color: ${(props) => props.theme.color.background.white};
	}
`;

const Flex = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-around;
	align-content: center;
	grid-template-columns: 1fr 1fr;
	border: 1px solid green;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		grid-template-columns: 1fr;
		grid-gap: 64px;
	}
`;

const ImageWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	border: 2px solid white;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		justify-self: center;
	}
`;

const StyledImage = styled(Img)`
	width: 500px;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 400px;
	}
	@media (max-width: ${(props) => props.theme.screen.sm}) {
		width: 300px;
		display: none;
	}
`;
