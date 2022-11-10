import React, { useState } from 'react';
import validator from 'validator';
import styled from 'styled-components';
import { Section } from '../global';
import { showToast, ShowWarningToast } from '../common/ShowToast';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [message, setMessage] = useState('');

	const handleChange = (event) => {
		const { id, value } = event.target;
		if (id === 'name') {
			setName(value);
		} else if (id === 'email') {
			setEmail(value);
		} else if (id === 'mobile') {
			setMobile(value);
		} else if (id === 'message') {
			setMessage(value);
		}
	};

	const handleFormSubmit = (event) => {
		toast.dismiss();
		event.preventDefault();
		if (name === '') {
			ShowWarningToast('Please enter your name');
			return;
		} else if (!validator.isEmail(email)) {
			ShowWarningToast('Please enter a valid email address');
			return;
		} else if (!validator.isMobilePhone(mobile, 'en-IN')) {
			ShowWarningToast('Please enter a valid mobile number');
			return;
		} else if (message === '') {
			ShowWarningToast('Please enter your message');
			return;
		}
		showToast('success', 'Your message has been sent successfully');
		setName('');
		setEmail('');
		setMobile('');
		setMessage('');
		// api call to send the message
	};

	return (
		<Section id="contact">
			<CenterDiv>
				<Toaster />
				<SecText>Have any questions? </SecText>
				<SecText>We'd be happy to respond :)</SecText>
				<FormContainer>
					<InputField
						type="text"
						id="name"
						required
						value={name}
						onChange={handleChange}
						placeholder="Name"
					/>
					<InputField
						type="email"
						id="email"
						required
						value={email}
						onChange={handleChange}
						placeholder="Email"
					/>
					<InputField
						type="text"
						id="mobile"
						required
						value={mobile}
						onChange={handleChange}
						placeholder="Mobile"
					/>
					<TextArea value={message} id="message" required onChange={handleChange} placeholder="Message" />
					<Button onClick={handleFormSubmit} type="submit">
						Send
					</Button>
				</FormContainer>
			</CenterDiv>
		</Section>
	);
};

const CenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
`;

const FormContainer = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.1rem;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
	}
`;

const InputField = styled.input`
	width: 60%;
	display: block;
	height: 1rem;
	margin: 1.5rem 0;
	padding: 1rem 0 1.5rem 0;
	font-size: 1.5rem;
	font-weight: 600;
	outline: none;
	letter-spacing: 0.1rem;
	border: 0;
	border-bottom: 2px solid lightgrey;
	background-color: transparent;
	color: ${(props) => props.theme.color.background.white};
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 80%;
		font-size: 1rem;
		font-weight: 400;
		margin: 1rem 0;
		padding: 1rem 0;
	}
`;

const TextArea = styled.textarea`
	width: 60%;
	height: 5rem;
	margin: 1rem 0;
	padding: 1rem 0;
	font-size: 1.5rem;
	font-weight: 600;
	display: block;
	outline: none;
	border: 0;
	border-bottom: 2px solid lightgrey;
	background-color: transparent;
	letter-spacing: 0.1rem;
	color: ${(props) => props.theme.color.background.white};
	@media (max-width: ${(props) => props.theme.screen.md}) {
		height: 2.5rem;
		font-size: 1rem;
		width: 80%;
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1.5rem;
	padding: 1.5rem;
	margin: 2rem;
	color: #fff;
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	letter-spacing: 0.2px;
	background-color: #3498db;
	border: 2px solid #3498db;
	border-radius: 0.5rem;
	cursor: pointer;
	text-decoration: none;
	box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
	transition: all 150ms ease-in-out;
	&:hover {
		box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
	}
	@media (max-width: ${(props) => props.theme.screen.md}) {
		height: 1rem;
		padding: 1rem;
		margin: 1rem;
		font-size: 1rem;
		font-weight: 600;
	}
`;

const SecText = styled.h2`
	margin: 0.3rem 0;
	padding: 5px 0;
	letter-spacing: 0.1rem;
	font-size: 1.5rem;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		font-size: 1rem;
		margin: 0.2rem 0;
		padding: 5px 0;
	}
`;

export default ContactForm;
