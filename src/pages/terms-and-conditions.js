import React from 'react';
import Navigation from '../components/common/navigation/navigation';
import Footer from '../components/sections/footer';
import styled from 'styled-components';
import Layout from '../components/common/layout/layout';
import SEO from '../components/common/layout/seo';

const Termsandconditions = () => {
	const ListItem = (text) => {
		return (
			<li>
				<Paragraph>{text}</Paragraph>
			</li>
		);
	};

	return (
		<Layout>
			<SEO title="faqs" />
			<Navigation />
			<TermsWrapper>
				<CenterDiv>
					<PrimaryHeading>Terms & Conditions</PrimaryHeading>
					<SecondaryHeading>Introduction</SecondaryHeading>
					<Paragraph>Welcome to Hewo Products Private Limited ('Company', 'we', 'our', 'us') !</Paragraph>
					<Paragraph>
						These Terms of Service ('Terms', 'Terms of Service') govern your use of our website located at
						<BoldSpan> www.wo.life</BoldSpan> (together or individually 'Service') operated by{' '}
						<BoldSpan>Hewo Products Private Limited</BoldSpan>.
					</Paragraph>
					<Paragraph>
						Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard
						and disclose information that results from your use of our web pages.
					</Paragraph>
					<Paragraph>
						Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You
						acknowledge that you have read and understood Agreements, and agree to be bound of them.
					</Paragraph>
					<Paragraph>
						If you do not agree with (or cannot comply with) Agreements, then you may not use the Service,
						but please let us know by emailing at support@wo.life so we can try to find a solution. These
						Terms apply to all visitors, users and others who wish to access or use Service.
					</Paragraph>
					<SecondaryHeading>Communications</SecondaryHeading>
					<Paragraph>
						By using our Service, you agree to subscribe to newsletters, marketing or promotional materials
						and other information we may send. However, you may opt out of receiving any, or all, of these
						communications from us by following the unsubscribe link or by emailing at support@wo.life.
					</Paragraph>
					<SecondaryHeading>Purchases</SecondaryHeading>
					<Paragraph>
						If you wish to purchase any product or service made available through Service (“Purchase”), you
						may be asked to supply certain information relevant to your Purchase including but not limited
						to, your credit or debit card number, the expiration date of your card, your billing address,
						and your shipping information.
					</Paragraph>
					<Paragraph>
						You represent and warrant that: (i) you have the legal right to use any card(s) or other payment
						method(s) in connection with any Purchase; and that (ii) the information you supply to us is
						true, correct and complete.
					</Paragraph>
					<Paragraph>
						We may employ the use of third party services for the purpose of facilitating payment and the
						completion of Purchases. By submitting your information, you grant us the right to provide the
						information to these third parties subject to our Privacy Policy.
					</Paragraph>
					<Paragraph>
						We reserve the right to refuse or cancel your order at any time for reasons including but not
						limited to: product or service availability, errors in the description or price of the product
						or service, error in your order or other reasons.
					</Paragraph>
					<Paragraph>
						We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal
						transaction is suspected.
					</Paragraph>
					<Paragraph>
						We Don’t Sell Your personal Information to Third Parties or any Advertisers. We use it to
						provide and improve our products and services.
					</Paragraph>
					<SecondaryHeading>Contests, Sweepstakes and Promotions</SecondaryHeading>
					<Paragraph>
						Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available
						through Service may be governed by rules that are separate from these Terms of Service. If you
						participate in any Promotions, please review the applicable rules as well as our Privacy Policy.
						If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
					</Paragraph>
					<SecondaryHeading>Refunds & Cancellations</SecondaryHeading>
					<ol>
						{ListItem(`Transactions may be disputed anytime within up to 2 days, from the date of transaction
								by the user.`)}
						{ListItem(
							` Failed transactions would be captured automatically in the user account and any amount paid by the user would be refunded within 72hrs.`,
						)}
						{ListItem(
							`Where a failed transaction does not get reflected in user account, user may inform wo.life about the failed/ incomplete transaction.`,
						)}
						{ListItem(
							`Disputes resolved in favor of the user may result in reversal of payment provided there is no fault or negligence by the user.`,
						)}
						{ListItem(
							`The user should provide us with a statement explaining how the Disputed Transaction is not warranted, together with all documented evidence in support of contesting such Disputed Transaction.`,
						)}
						{ListItem(
							`All refunds shall be made as wo.life credits(discounts on transactions). Our policy may include a refund though some restrictions may apply. So please review the terms.`,
						)}
						{ListItem(
							`For any transaction related disputes after a payment to a vendor, must be handled directly with the vendor itself. wo.life is not liable for any transactional disputes between our vendor and clients.`,
						)}
						{ListItem(
							`In case of any transactional errors to wo.life such as double repayments, the money shall be refunded to the user’s bank account within 3-5 working days.`,
						)}
					</ol>
					<SecondaryHeading>Content</SecondaryHeading>
					<Paragraph>
						Content found on or through this Service are the property of Hewo Products Private Limited or
						used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy,
						or use said Content, whether in whole or in part, for commercial purposes or for personal gain,
						without express advance written permission from us.
					</Paragraph>
					<SecondaryHeading>Prohibited Uses</SecondaryHeading>
					<Paragraph>
						You may use Service only for lawful purposes and in accordance with Terms. You agree not to use
						Service:
					</Paragraph>
					<ol>
						{ListItem(
							`In any way that violates any applicable national or international law or regulation.`,
						)}
						{ListItem(
							`For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.`,
						)}
						{ListItem(
							`To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.`,
						)}
						{ListItem(
							`To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.`,
						)}
						{ListItem(
							`In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.`,
						)}
						{ListItem(
							`To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.`,
						)}
					</ol>
					<Paragraph>Additionally, you agree not to:</Paragraph>
					<ol>
						{ListItem(
							`Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service.`,
						)}
						{ListItem(
							`Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.`,
						)}
						{ListItem(
							`Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.`,
						)}
						{ListItem(
							`Use any device, software, or routine that interferes with the proper working of Service.`,
						)}
						{ListItem(
							`Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.`,
						)}
						{ListItem(
							`Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.`,
						)}
						{ListItem(
							`Attack Service via a denial-of-service attack or a distributed denial-of-service attack.`,
						)}
						{ListItem(`Take any action that may damage or falsify Company rating.`)}
						{ListItem(`. Otherwise attempt to interfere with the proper working of Service.`)}
					</ol>
					<SecondaryHeading>Analytics</SecondaryHeading>
					<Paragraph>
						We may use third-party Service Providers to monitor and analyze the use of our Service.
					</Paragraph>
					<SecondaryHeading>No Use By Minors</SecondaryHeading>
					<Paragraph>
						Service is intended only for access and use by individuals at least eighteen (18) years old. By
						accessing or using Service, you warrant and represent that you are at least eighteen (18) years
						of age and with the full authority, right, and capacity to enter into this agreement and abide
						by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old,
						you are prohibited from both the access and usage of Service.
					</Paragraph>
					<SecondaryHeading>Accounts</SecondaryHeading>
					<Paragraph>
						When you create an account with us, you guarantee that you are above the age of 18, and that the
						information you provide us is accurate, complete, and current at all times. Inaccurate,
						incomplete, or obsolete information may result in the immediate termination of your account on
						Service.
					</Paragraph>
					<Paragraph>
						You are responsible for maintaining the confidentiality of your account and password, including
						but not limited to the restriction of access to your computer and/or account. You agree to
						accept responsibility for any and all activities or actions that occur under your account and/or
						password, whether your password is with our Service or a third-party service. You must notify us
						immediately upon becoming aware of any breach of security or unauthorized use of your account.
					</Paragraph>
					<Paragraph>
						You may not use as a username the name of another person or entity or that is not lawfully
						available for use, a name or trademark that is subject to any rights of another person or entity
						other than you, without appropriate authorization. You may not use as a username any name that
						is offensive, vulgar or obscene.
					</Paragraph>
					<Paragraph>
						We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel
						orders in our sole discretion.
					</Paragraph>
					<SecondaryHeading>Intellectual Property</SecondaryHeading>
					<Paragraph>
						Service and its original content (excluding Content provided by users), features and
						functionality are and will remain the exclusive property of Hewo Products Private Limited and
						its licensors. Service is protected by copyright, trademark, and other laws of and foreign
						countries. Our trademarks may not be used in connection with any product or service without the
						prior written consent of Hewo Products Private Limited.
					</Paragraph>
					<SecondaryHeading>Copyright Policy</SecondaryHeading>
					<Paragraph>
						We respect the intellectual property rights of others. It is our policy to respond to any claim
						that Content posted on Service infringes on the copyright or other intellectual property rights
						(“Infringement”) of any person or entity.
					</Paragraph>
					<Paragraph>
						If you are a copyright owner, or authorized on behalf of one, and you believe that the
						copyrighted work has been copied in a way that constitutes copyright infringement, please submit
						your claim via email to support@wo.life, with the subject line: “Copyright Infringement” and
						include in your claim a detailed description of the alleged Infringement as detailed below,
						under “DMCA Notice and Procedure for Copyright Infringement Claims”
					</Paragraph>
					<Paragraph>
						You may be held accountable for damages (including costs and attorneys’ fees) for
						misrepresentation or bad-faith claims on the infringement of any Content found on and/or through
						Service on your copyright.
					</Paragraph>
					<SecondaryHeading>DMCA Notice and Procedure for Copyright Infringement Claims</SecondaryHeading>
					<Paragraph>
						You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by
						providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3)
						for further detail):
					</Paragraph>
					<ol>
						{ListItem(
							`An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;`,
						)}
						{ListItem(
							`A description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;`,
						)}
						{ListItem(
							`Identification of the URL or other specific location on Service where the material that you claim is infringing is located;`,
						)}
						{ListItem(`Your address, telephone number, and email address;`)}
						{ListItem(
							`A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;`,
						)}
						{ListItem(
							`A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.`,
						)}
					</ol>
					<Paragraph>You can contact our Copyright Agent via email at support@wo.life.</Paragraph>
					<SecondaryHeading>Error Reporting and Feedback</SecondaryHeading>
					<Paragraph>
						You may provide us either directly at support@wo.life or via third party sites and tools with
						information and feedback concerning errors, suggestions for improvements, ideas, problems,
						complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree
						that:
					</Paragraph>
					<ol type="i">
						{ListItem(
							`You shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback;`,
						)}
						{ListItem(`Company may have development ideas similar to the Feedback;`)}
						{ListItem(
							`Feedback does not contain confidential information or proprietary information from you or any third party;`,
						)}
						{ListItem(
							`Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.`,
						)}
					</ol>
					<SecondaryHeading>Links To Other Web Sites</SecondaryHeading>
					<Paragraph>
						Our Service may contain links to third party web sites or services that are not owned or
						controlled by Hewo Products Private Limited.
					</Paragraph>
					<Paragraph>
						Hewo Products Private Limited has no control over, and assumes no responsibility for the
						content, privacy policies, or practices of any third party web sites or services. We do not
						warrant the offerings of any of these entities/individuals or their websites.
					</Paragraph>
					<Paragraph>
						YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR
						INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE
						OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD
						PARTY WEB SITES OR SERVICES.
					</Paragraph>
					<Paragraph>
						WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB
						SITES OR SERVICES THAT YOU VISIT.
					</Paragraph>
					<SecondaryHeading>Disclaimer Of Warranty</SecondaryHeading>
					<Paragraph>
						THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO
						REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR
						SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT
						YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR
						SOLE RISK.
					</Paragraph>
					<Paragraph>
						NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH
						RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
						SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY
						REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED
						THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL
						BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR
						OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
						SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
					</Paragraph>
					<Paragraph>
						COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR
						OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND
						FITNESS FOR PARTICULAR PURPOSE.
					</Paragraph>
					<Paragraph>
						THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER
						APPLICABLE LAW.
					</Paragraph>
					<SecondaryHeading>Limitation Of Liability</SecondaryHeading>
					<Paragraph>
						EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS
						HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT
						ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND
						ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS
						INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING
						OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL
						INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL,
						STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY
						ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY
						FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR
						SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME
						STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL
						DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
					</Paragraph>
					<SecondaryHeading>Termination</SecondaryHeading>
					<Paragraph>
						We may terminate or suspend your account and bar access to Service immediately, without prior
						notice or liability, under our sole discretion, for any reason whatsoever and without
						limitation, including but not limited to a breach of Terms.
					</Paragraph>
					<Paragraph>
						If you wish to terminate your account, you may simply discontinue using Service
					</Paragraph>
					<Paragraph>
						All provisions of Terms which by their nature should survive termination shall survive
						termination, including, without limitation, ownership provisions, warranty disclaimers,
						indemnity and limitations of liability.
					</Paragraph>
					<SecondaryHeading>Governing Law</SecondaryHeading>
					<Paragraph>
						These Terms shall be governed and construed in accordance with the laws of India, which
						governing law applies to agreement without regard to its conflict of law provisions.
					</Paragraph>
					<Paragraph>
						Our failure to enforce any right or provision of these Terms will not be considered a waiver of
						those rights. If any provision of these Terms is held to be invalid or unenforceable by a court,
						the remaining provisions of these Terms will remain in effect. These Terms constitute the entire
						agreement between us regarding our Service and supersede and replace any prior agreements we
						might have had between us regarding Service.
					</Paragraph>
					<SecondaryHeading>Changes To Service</SecondaryHeading>
					<Paragraph>
						We reserve the right to withdraw or amend our Service, and any service or material we provide
						via Service, in our sole discretion without notice. We will not be liable if for any reason all
						or any part of Service is unavailable at any time or for any period. From time to time, we may
						restrict access to some parts of Service, or the entire Service, to users, including registered
						users.
					</Paragraph>
					<SecondaryHeading>Amendments To Terms</SecondaryHeading>
					<Paragraph>
						We may amend Terms at any time by posting the amended terms on this site. It is your
						responsibility to review these Terms periodically.
					</Paragraph>
					<Paragraph>
						Your continued use of the Platform following the posting of revised Terms means that you accept
						and agree to the changes. You are expected to check this page frequently so you are aware of any
						changes, as they are binding on you.
					</Paragraph>
					<Paragraph>
						By continuing to access or use our Service after any revisions become effective, you agree to be
						bound by the revised terms. If you do not agree to the new terms, you are no longer authorized
						to use Service.
					</Paragraph>
					<SecondaryHeading>Waiver And Severability</SecondaryHeading>
					<Paragraph>
						No waiver by Company of any term or condition set forth in Terms shall be deemed a further or
						continuing waiver of such term or condition or a waiver of any other term or condition, and any
						failure of Company to assert a right or provision under Terms shall not constitute a waiver of
						such right or provision.
					</Paragraph>
					<Paragraph>
						If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be
						invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited
						to the minimum extent such that the remaining provisions of Terms will continue in full force
						and effect.
					</Paragraph>
					<SecondaryHeading>Acknowledgement</SecondaryHeading>
					<Paragraph>
						BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE
						TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
					</Paragraph>
					<SecondaryHeading>Contact Us</SecondaryHeading>
					<Paragraph>
						Please send your feedback, comments, requests for technical support by email:{' '}
						<BoldSpan>support@wo.life</BoldSpan>
					</Paragraph>
				</CenterDiv>
				<Footer />
			</TermsWrapper>
		</Layout>
	);
};

const TermsWrapper = styled.div`
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
	align-items: flex-start;
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
`;

const Paragraph = styled.p`
	margin: 0.3rem 0;
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
	margin-bottom: 1rem;
	text-transform: uppercase;
	@media (max-width: ${(props) => props.theme.screen.xs}) {
		margin-bottom: 0.3rem;
	}
`;

const SecondaryHeading = styled.h5`
	text-align: center;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.1px;
	color: ${(props) => props.theme.color.secondary};
	margin: 1rem 0 0.5rem 0;
`;

const SubHeading = styled.h5`
	display: inline;
	font-weight: 600;
`;

const BoldSpan = styled.span`
	font-weight: 600;
`;

export default Termsandconditions;
