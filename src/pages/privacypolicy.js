import React from 'react';
import Navigation from '../components/common/navigation/navigation';
import Footer from '../components/sections/footer';
import styled from 'styled-components';

import Layout from '../components/common/layout/layout';
import SEO from '../components/common/layout/seo';

const PrivacyPolicy = () => {
	return (
		<Layout>
			<PrivacyPolicyWrapper>
				<Navigation />
				<h2>Privacy Policy</h2>
				<p>
					wo.life recognizes the importance of maintaining your privacy. We value your privacy and appreciate
					your trust in us. This Policy describes how we treat user information we collect on
					http://www.wo.life and other offline sources. This Privacy Policy applies to current and former
					visitors to our website and to our online customers. By visiting and/or using our website, you agree
					to this Privacy Policy.
				</p>
				<p>
					Bookmyseats.in is a property of Hewo Products Private Limited, an Indian Company registered under
					the Companies Act, 2013 having its registered office at No 122, 6th cross, 29th main, BTM layout 2nd
					stage, Bengaluru 560076.
				</p>
				<Footer />
			</PrivacyPolicyWrapper>
		</Layout>
	);
};

const PrivacyPolicyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
`;

export default PrivacyPolicy;
