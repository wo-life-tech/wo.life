import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../common/layout/CenterDiv';
import ImgWithFallBack from '../common/ImgWithFallBack';
import { BlueText, YellowText } from '../common/layout/Text';
import { flexCenter } from '../global';

const mediaType = 'image/webp';
const playstoreLink = 'https://play.google.com/store/apps/details?id=com.app.wolife';
const appstoreLink = 'https://play.google.com/store/apps/details?id=com.app.wolife';

const Header = () => {
	const appDownloadLinks = (src, fallbackSrc, alt, link) => {
		return (
			<FlexBox>
				<a style={{ width: '100%' }} href={link} target="blank">
					<picture style={flexCenter}>
						<source srcSet={src} type={mediaType} />
						<IconsImage src={fallbackSrc} alt={alt} />
					</picture>
				</a>
			</FlexBox>
		);
	};

	return (
		<HeaderWrapper id="top">
			<CenterDiv isPaddingRequired={true}>
				<HeaderTextGroup>
					<MainText>
						Use your social influence to become a <BlueText text="Sociopreneur" /> &{' '}
						<YellowText text="Earn" />
					</MainText>
					<InviteText>We’re currently invite only</InviteText>
					<Flex>
						{appDownloadLinks(
							'/google-play-badge.webp',
							'/google-play-badge.png',
							'playstore',
							playstoreLink,
						)}
						{appDownloadLinks('/app-store-badge.webp', '/app-store-badge.png', 'appstore', appstoreLink)}
					</Flex>
				</HeaderTextGroup>
				<ImageWrapper>
					<ImgWithFallBack
						src="/shopping.webp"
						fallbackSrc="/shopping.png"
						altText="shopping"
						style={{ maxWidth: '90%' }}
					/>
				</ImageWrapper>
			</CenterDiv>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	margin: 0;
	padding: 100px 0 60px 110px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.color.background.regular};
	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding: 100px 0 40px 0;
	}
`;

const HeaderTextGroup = styled.div`
	width: 50%;
	margin: 0;
	padding: 0;
	line-height: 2.5rem;
	letter-spacing: 0.5px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	color: ${(props) => props.theme.color.background.white};
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
		padding: 0 2rem;
		align-items: center;
	}
`;

const MainText = styled.h1`
	font-size: 2.4rem;
	font-weight: 900;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		font-size: 2.2rem;
	}
	@media (max-width: ${(props) => props.theme.screen.sm}) {
		font-size: 1.8rem;
		line-height: 2.2rem;
	}
`;

const InviteText = styled.h2`
	padding: 80px 0 50px;
`;

const Flex = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 70%;
		padding: 0;
	}
	@media (max-width: ${(props) => props.theme.screen.xs}) {
		width: 90%;
	}
`;

const FlexBox = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 75%;
	}

	@media (max-width: ${(props) => props.theme.screen.sm}) {
		width: 100%;
	}
`;

const IconsImage = styled.img`
	width: 80%;
	font-weight: 600;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 90%;
	}
`;

const ImageWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	align-items: flex-end;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
		justify-self: center;
	}
`;
