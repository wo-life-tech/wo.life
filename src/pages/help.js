import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/layout/layout';
import Seo from '../components/common/layout/seo';

const help = () => {
	return (
		<Layout>
			<Seo title="help" />
			<HelpWrapper>
				<CenterDiv>
					<PrimaryHeading>Please connect at support@wo.life for any queries and complaints</PrimaryHeading>
				</CenterDiv>
			</HelpWrapper>
		</Layout>
	);
};

export default help;

const HelpWrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: 'center';
	margin: 0 auto;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
`;

const CenterDiv = styled.div`
	margin: 5rem 15rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		margin: 5rem 5rem;
	}
	@media (max-width: ${(props) => props.theme.screen.xs}) {
		margin: 3rem 2rem;
	}
`;

const PrimaryHeading = styled.h2`
	text-align: center;
	font-weight: 600;
	letter-spacing: 2px;
	margin: 3rem 0 1rem;
`;
