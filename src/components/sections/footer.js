import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { Container } from '../global';

const socialIconWidth = '30';

const Footer = () => (
	<FooterWrapper id="footer">
		<FooterColumnContainer>
			<FooterColumn>
				<span>Policy</span>
				<ul>
					<li>
						<FooterLink to="/returns-and-exchange">Returns & Exchange</FooterLink>
					</li>
					<li>
						<FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
					</li>
					<li>
						<FooterLink to="/terms-and-conditions">Terms & Conditions</FooterLink>
					</li>
				</ul>
			</FooterColumn>
			<SocialLinks>
				<span>Social</span>
				<ul>
					<li>
						<a href="" target="blank">
							<img src="/facebook.png" alt="facebook" width={socialIconWidth} />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/wolifeofficial" target="blank">
							<img src="/instagram.png" alt="instagram" width={socialIconWidth} />
						</a>
					</li>
					<li>
						<a href="" target="blank">
							<img src="/twitter.png" alt="twitter" width={socialIconWidth} />
						</a>
					</li>
					<li>
						<a href="https://in.linkedin.com/company/wolife" target="blank">
							<img src="/linkedin.png" alt="linkedin" width={socialIconWidth} />
						</a>
					</li>
				</ul>
			</SocialLinks>
		</FooterColumnContainer>
		<BrandContainer>
			<Logo>wo.life</Logo>
		</BrandContainer>
	</FooterWrapper>
);

const FooterWrapper = styled.footer`
	padding: 48px 0;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
`;

const Logo = styled.div`
	font-family: ${(props) => props.theme.font.extrabold};
	${(props) => props.theme.font_size.regular};
	text-decoration: none;
	letter-spacing: 1px;
	margin: 0;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 9;
	text-decoration: none;
	outline: 0px;
`;

const BrandContainer = styled(Container)`
	position: relative;
	padding-top: 48px;
	display: flex;
	align-items: flex-end;

	@media (max-width: ${(props) => props.theme.screen.sm}) {
	}
`;
const FooterColumnContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-top: 48px;
	padding-bottom: 48px;

	@media (max-width: ${(props) => props.theme.screen.sm}) {
	}
`;

const FooterColumn = styled.div`
	span {
		font-size: 16px;
		font-family: ${(props) => props.theme.font.bold};
	}
	ul {
		list-style: none;
		margin: 16px 0;
		padding: 0;
		li {
			margin-bottom: 12px;
			font-family: ${(props) => props.theme.font.normal};
			font-size: 15px;
		}
	}
`;

const SocialLinks = styled.div`
	color: ${(props) => props.theme.color.background.white};
	span {
		font-size: 16px;
		padding-bottom: 10px;
		font-family: ${(props) => props.theme.font.bold};
	}
	ul {
		padding: 0.5rem 0;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		border: 1px solid grey;
	}
	ul li {
		list-style: none;
		margin: 0 15px;
	}
`;

const FooterLink = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.color.background.white};
	&:hover {
		color: ${(props) => props.theme.color.background.white};
	}
`;

export default Footer;
