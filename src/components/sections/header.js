import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../common/layout/CenterDiv';

const iconsWidth = '100';
const woLife = 'https://wo.life/';

const Header = () => {
	const appDownloadLinks = (image, altText, link) => {
		return (
			<a href={link} target="blank">
				<img src={image} alt={altText} width={iconsWidth} />
			</a>
		);
	};

	return (
		<HeaderWrapper id="top">
			<CenterDiv isPaddingRequired={false}>
				<HeaderTextGroup>
					<h1>
						A seamless social
						<br />
						commerce experience
					</h1>
					<BottomText>Download Now : </BottomText>
					<Flex>
						{appDownloadLinks('/playstore.png', 'playstore', woLife)}
						{appDownloadLinks('/app-store.png', 'appstore', woLife)}
					</Flex>
				</HeaderTextGroup>
				<ImageWrapper>
					<img src="/mainscreen.png" alt="banner" style={{ maxWidth: '80%', transform: 'rotate(-90deg)' }} />
				</ImageWrapper>
			</CenterDiv>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	background-color: ${(props) => props.theme.color.background.regular};
	padding: 160px 0 80px 0;
	position: relative;
	@media (max-width: ${(props) => props.theme.screen.md}) {
	}
`;

const BottomText = styled.h1`
	color: ${(props) => props.theme.color.white.regular};
	letter-spacing: 1px;
	margin-top: 200px;
`;

const HeaderTextGroup = styled.div`
	width: 50%;
	margin: 0 2rem;
	padding: 1rem;
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
	@media (max-width: ${(props) => props.theme.screen.md}) {
		justify-self: center;
	}
`;
