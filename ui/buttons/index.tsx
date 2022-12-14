import styled from "styled-components";

export const MainButton = styled.button`
	width: 100%;
	background-color: var(--blue);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 16px;
	font-weight: 700;
	padding: 8px 16px;
	margin: 0;
	border: none;
	border-radius: 8px;
	cursor: pointer;
`;

export const SecondaryButton = styled(MainButton)`
	background-color: var(--yellow);
`;

export const BuyButton = styled(MainButton)`
	background-color: var(--lightblue);
`;
