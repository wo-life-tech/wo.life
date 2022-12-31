import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/layout/layout';
import Seo from '../components/common/layout/seo';

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Not found" />
		<NotFoundWrapper>
			<CenterDiv>
				<img height={'70%'} width={'70%'} src="/notFound.png" alt="notFound" />
				<PrimaryHeading>NOT FOUND</PrimaryHeading>
				<SecondaryHeading>You just hit a route that doesn&#39;t exist... the sadness.</SecondaryHeading>
			</CenterDiv>
		</NotFoundWrapper>
	</Layout>
);

export default NotFoundPage;

const NotFoundWrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: 'center';
	margin: 0 auto;
	color: ${(props) => props.theme.color.background.regular};
`;

const CenterDiv = styled.div`
	margin: 0 2rem;
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

const SecondaryHeading = styled.h4`
	text-align: center;
	font-weight: 600;
	color: ${(props) => props.theme.color.secondary};
`;
