import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<QuestionContainer>
			<header>
				<QuestionTitle onClick={() => setExpanded(!expanded)}>{title}</QuestionTitle>
				<ToggleButton onClick={() => setExpanded(!expanded)}>
					{expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</ToggleButton>
			</header>
			{expanded && <p>{info}</p>}
		</QuestionContainer>
	);
};

const QuestionContainer = styled.article`
	padding: 1rem 1.5rem;
	border: 2px solid #eae6eb;
	margin-bottom: 1rem;
	border-radius: 0.25rem;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	h4 {
		font-size: 1.5rem;
		text-transform: none;
		letter-spacing: 0.1rem;
		line-height: 1.5;
	}
	p {
		color: #fff;
		margin-bottom: 0;
		margin-top: 0.5rem;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header h4 {
		margin-bottom: 0;
	}
	@media (max-width: ${(props) => props.theme.screen.md}) {
		h4 {
			font-size: 1rem;
			line-height: 1;
		}
	}
`;

const QuestionTitle = styled.h4`
	cursor: pointer;
`;

const ToggleButton = styled.button`
	background: transparent;
	border-color: transparent;
	width: 2rem;
	height: 2rem;
	background: #eae6eb;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: #b4345c;
	cursor: pointer;
	margin-left: 1rem;
	align-self: center;
	min-width: 2rem;
`;

export default SingleQuestion;
