import React from 'react';
import Navigation from '../components/common/navigation/navigation';
import Footer from '../components/sections/footer';
import styled from 'styled-components';
import Layout from '../components/common/layout/layout';
import SEO from '../components/common/layout/seo';

const Privacypolicy = () => {
	const TextBox = (heading, text) => {
		return (
			<ContainerDiv>
				<SubHeading>{heading}</SubHeading>
				<p>{text}</p>
			</ContainerDiv>
		);
	};

	return (
		<Layout>
			<SEO title="privacy policy" />
			<Navigation />
			<PrivacyPolicyWrapper>
				<CenterDiv>
					<PrimaryHeading>Privacy Policy</PrimaryHeading>
					<p>
						wo.life recognizes the importance of maintaining your privacy. We value your privacy and
						appreciate your trust in us. This Policy describes how we treat user information we collect on
						https://www.wo.life and other offline sources. This Privacy Policy applies to current and former
						visitors to our website and to our online customers. By visiting and/or using our website, you
						agree to this Privacy Policy.
					</p>
					<p>
						wo.life is a property of Hewo Products Private Limited, an Indian Company registered under the
						Companies Act, 2013 having its registered office at No 122, 6th cross, 29th main, BTM layout 2nd
						stage, Bengaluru – 560076.
					</p>
					<SecondaryHeading>Information we collect</SecondaryHeading>
					<SubCenterDiv>
						{TextBox(
							`Contact information`,
							`We might collect your name, email, mobile number, phone number, street, city, state, pincode,  country and ip address.`,
						)}
						{TextBox(
							`Payment and billing information`,
							`We might collect your billing name, billing address and payment method when you buy a ticket. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner RazorPay.`,
						)}
						{TextBox(
							`Information you post`,
							`We collect information you post in a public space on our app or on a third-party social media site belonging to www.wo.life.`,
						)}
						{TextBox(
							`Demographic information`,
							`We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our app. We might collect this as a part of a survey also.`,
						)}
						{TextBox(
							`Other information`,
							` If you use our app, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running. `,
						)}
						{TextBox(
							`We collect information directly from you`,
							`We collect information directly from you when purchase products. We also collect information if you post a comment on our websites or ask us a question through phone or email.`,
						)}
						{TextBox(
							`We collect information from you passively`,
							`We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website and app. `,
						)}
						{TextBox(
							`We get information about you from third parties`,
							`For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.`,
						)}
					</SubCenterDiv>
					<SecondaryHeading>Use of your personal information</SecondaryHeading>
					<SubCenterDiv>
						{TextBox(
							`We use information to contact you`,
							`We might use the information you provide to contact you for confirmation of a purchase on our website or app for other promotional purposes.`,
						)}
						{TextBox(
							`We use information to respond to your requests or questions`,
							`We might use your information to confirm your registration for an event or contest. `,
						)}
						{TextBox(
							`We use information to improve our products and services`,
							`We might use your information to customize your experience with us. This could include displaying content based upon your preferences.`,
						)}
						{TextBox(
							`We use information to look at site trends and customer interests`,
							`We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.`,
						)}
						{TextBox(
							`We use information for security purposes`,
							`We may use information to protect our company, our customers, or our websites.`,
						)}
						{TextBox(
							`We use information for marketing purposes`,
							`We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you order products from a particular brand from us we'll enroll you for notifications.`,
						)}
						{TextBox(
							`We use information to send you transactional communications`,
							`We might send you emails or SMS about your account or a product purchase.`,
						)}
						<p>We use information as otherwise permitted by law.</p>
					</SubCenterDiv>
					<SecondaryHeading>Sharing of information with third-parties</SecondaryHeading>
					<SubCenterDiv>
						{TextBox(
							`We will share information with third parties who perform services on our behalf`,
							`We share information with vendors who help us manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of India.`,
						)}
						{TextBox(
							`We will share information with the event organizers`,
							`We share your information with event organizers and other parties responsible for fulfilling the purchase obligation. The event organizers and other parties may use the information we give them as described in their privacy policies. `,
						)}
						{TextBox(
							`We will share information with our business partners`,
							`This includes a third party who provide or sponsor an event, or who operates a venue where we hold events. Our partners use the information we give them as described in their privacy policies.`,
						)}
						{TextBox(
							`We may share information if we think we have to in order to comply with the law or to protect ourselves`,
							`We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.`,
						)}
						{TextBox(
							`We may share information with any successor to all or part of our business`,
							`For example, if part of our business is sold we may give our customer list as part of that transaction.`,
						)}
						{TextBox(
							`We may share your information for reasons not described in this policy`,
							`We will tell you before we do this.`,
						)}
					</SubCenterDiv>
					<SecondaryHeading>Email Opt-Out</SecondaryHeading>
					<SubCenterDiv>
						{TextBox(
							`You can opt out of receiving our marketing emails`,
							`To stop receiving our promotional emails, please email unsubscriber@wo.life. It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your purchases.`,
						)}
						{TextBox(
							`Third party sites`,
							`If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites.`,
						)}
						{TextBox(
							`Grievance Officer`,
							`In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below.`,
						)}
					</SubCenterDiv>
					<ContainerDiv>
						<SubHeading>Mr. Arun Kumar</SubHeading>
						<p>No 122, 6th cross, 29th main</p>
						<p>BTM layout 2nd stage</p>
						<p>Bengaluru - 560076</p>
						<p>Email: arunkumar@wo.life</p>
					</ContainerDiv>
					<p>
						If you have any questions about this Policy or other privacy concerns, you can also email us at
						<BoldSpan> support@wolife</BoldSpan>
					</p>
					<SubCenterDiv>
						{TextBox(
							`Updates to this policy`,
							`This Privacy Policy was last updated on 12.04.2022. From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.`,
						)}
						{TextBox(
							`Jurisdiction`,
							`If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website's terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.`,
						)}
					</SubCenterDiv>
				</CenterDiv>
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

const SubCenterDiv = styled.div`
	margin: 0 5rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		margin: 0 3rem;
	}
	@media (max-width: ${(props) => props.theme.screen.xs}) {
		margin: 0 2rem;
	}
`;

const ContainerDiv = styled.div`
	margin: 0,
	padding: 0,
	display: flex,
	justify-content: flex-start,
	margin-bottom: 1rem,
`;

const PrimaryHeading = styled.h4`
	text-align: center;
	font-weight: 600;
	margin-bottom: 2rem;
	text-transform: uppercase;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		margin-bottom: 1rem;
	}
`;

const SecondaryHeading = styled.h5`
	text-align: center;
	font-weight: 600;
	text-transform: uppercase;
	color: ${(props) => props.theme.color.secondary};
`;

const SubHeading = styled.h5`
	display: inline;
	font-weight: 600;
`;

const BoldSpan = styled.span`
	font-weight: 600;
`;

export default Privacypolicy;
