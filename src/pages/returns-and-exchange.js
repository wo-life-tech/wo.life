import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/common/navigation/navigation';
import Footer from '../components/sections/footer';
import Layout from '../components/common/layout/layout';
import SEO from '../components/common/layout/seo';

const ReturnsAndExchange = () => {
	const TextBox = (heading, text) => {
		return (
			<ContainerDiv>
				<SubHeading>{heading}</SubHeading>
				<p>{text}</p>
			</ContainerDiv>
		);
	};

	const ListItem = (text) => {
		return (
			<li>
				<Paragraph>{text}</Paragraph>
			</li>
		);
	};

	return (
		<Layout>
			<SEO title="Returns & Exchange" />
			<Navigation />
			<ReturnsAndExchangeWrapper>
				<CenterDiv>
					<PrimaryHeading>Return</PrimaryHeading>
					<SubCenterDiv>
						{TextBox(
							'Can I return a product?',
							`You may raise a return request for Products you buy from Wo.life Platform within 7
Days of delivery. However, products that are explicitly identified as ‘not returnable’ on
the product detail page cannot be returned. For return, contact our customer care at
8088-415-454.
`,
						)}
						<Paragraph>
							However, if you receive a damaged/defective/wrong product from Wo.life, you will be allowed
							return/replacement even if the product is categorized as ‘non-returnable’ in the product
							description.
						</Paragraph>
						{TextBox(
							'How to return a product?',
							`If a product is eligible for a return, the user will be able to initiate the return request
under the ‘My Orders’ section.`,
						)}
						<Paragraph>
							If a Product is not eligible for return and is delivered as damaged/defective/wrong product,
							Contact Customer Care at 8088-415-454.
						</Paragraph>
						{TextBox(
							'Why has Wo.life cancelled my return request?',
							`If the product is non-returnable, your return request will be cancelled.`,
						)}
						{TextBox(
							'How long will it take for me to receive my refund for a returned product?',
							`Once the product reaches the brand's warehouse and goes through the required quality
check, your refund will be processed to you via the same payment method within 7
working days`,
						)}
						{TextBox(
							'How do I self-ship a product to Wo.life?',
							`You will need to self-ship a product you need to return through a reliable courier partner
if your area’s pin code is not serviceable for pickup. Please ensure you follow these
guidelines with accuracy:`,
						)}
						<ul>
							{ListItem(`Attach a sheet of paper with the Order ID and Return ID for each item that is included
in the package.`)}
							{ListItem(`Scan the courier bill and share it to us through the ‘Contact Us’ option available in the
App/Website.`)}
							{ListItem(`Please mention the weight of the package you return to us.`)}
							{ListItem(`Please mention your office/residential address including the destination address,
amount and date of the shipment.`)}
							{ListItem(`Do not overwrite or modify any information on the receipt.`)}
							{ListItem(`The amount mentioned in the receipt will be cross-checked with the courier service
provider and should match the sender-destination service combo.`)}
						</ul>
					</SubCenterDiv>
					<PrimaryHeading>Exchange</PrimaryHeading>
					<SubCenterDiv>
						{TextBox(
							'Can I exchange a product delivered to me by Wo.life?',
							`Exchange is allowed only in the unlikely event when damaged, defective or different
items are delivered to you.
`,
						)}
						{TextBox(
							'What are the steps to exchange a product?',
							`For exchange, contact our customer service no 0-8088-415-454`,
						)}
						{TextBox(
							'What are the refund policies for exchange orders and will a full or partial refund be available?',
							`We do not provide any refund for exchange orders. In case if the brand does not have
the inventory, the customer will receive a full refund.`,
						)}
						{TextBox(
							'What is the time frame for requesting an exchange?',
							`The exchange should be processed within 24 hours once the order is delivered. For
fashion - clothing ( except innerwear), the same should be 15 days.`,
						)}
						{TextBox(
							'Does the customer need to bear the exchange shipping cost?',
							`No, the customer does not need to pay any extra shipping charge for an exchange order.`,
						)}
						{TextBox(
							'What is the time frame to exchange orders?',
							`The brand will pack the order and the courier partners will get the products delivered in
7-10 business days once the exchange order is approved.`,
						)}
					</SubCenterDiv>
				</CenterDiv>
				<Footer />
			</ReturnsAndExchangeWrapper>
		</Layout>
	);
};

const ReturnsAndExchangeWrapper = styled.div`
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

const PrimaryHeading = styled.h4`
	text-align: center;
	font-weight: 600;
	margin-bottom: 1rem;
	text-transform: uppercase;
	@media (max-width: ${(props) => props.theme.screen.xs}) {
		margin-bottom: 0.3rem;
	}
`;

const ContainerDiv = styled.div`
	margin: 0,
	padding: 0,
	display: flex,
	justify-content: flex-start,
	margin-bottom: 1rem,
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

const Paragraph = styled.p`
	margin: -0.5rem 0 1rem;
	padding: 0;
`;

const SubHeading = styled.h5`
	display: inline;
	font-weight: 600;
`;

export default ReturnsAndExchange;
