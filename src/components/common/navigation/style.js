import styled from 'styled-components';
import { Container } from '../../global';

export const Nav = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	padding: 0;
	z-index: 1000;
	color: ${(props) => props.theme.color.background.white};
	background: ${(props) => props.theme.color.background.regular};
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

export const StyledContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavListWrapper = styled.div`
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;

		${({ mobile }) =>
			mobile &&
			`
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
	}
`;

export const NavItem = styled.li`
	margin: 0 2em;
	letter-spacing: 0.5px;
	font-size: ${(props) => props.theme.font_size.larger};
	${(props) => props.theme.font_size.xsmall};

	a {
		text-decoration: none;
		opacity: 0.9;
		color: ${(props) => props.theme.color.background.white};
	}

	&.active {
		a {
			opacity: 1;
		}
	}
`;

export const MobileMenu = styled.div`
	width: 100%;
	height: 100vh;
	z-index: 1000;
	background: ${(props) => props.theme.color.regular};
`;

export const Brand = styled.div`
	font-family: ${(props) => props.theme.font.normal};
	color: ${(props) => props.theme.color.white.regular};
	text-decoration: none;
	letter-spacing: 1px;
	margin: 0;
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		a {
			color: ${(props) => props.theme.color.white.regular};
			text-decoration: none;
		}
	}
`;
export const ActionsContainer = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: ${(props) => props.theme.screen.xs}) {
		display: none;
	}

	button {
		font-family: ${(props) => props.theme.font.normal};
		${(props) => props.theme.font_size.xsmall};
		color: white;
		background: #098b8c;
		border-radius: 4px;
		padding: 10px 16px;
		text-transform: uppercase;
		font-size: 12px;
	}
`;

export const Mobile = styled.div`
	display: none;

	@media (max-width: ${(props) => props.theme.screen.xs}) {
		display: block;
	}

	${(props) =>
		props.hide &&
		`
    display: block;

    @media (max-width: ${props.theme.screen.xs}) {
      display: none;
    }
  `}
`;
