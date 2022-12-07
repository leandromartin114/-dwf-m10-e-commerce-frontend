import styled from "styled-components";

export const MainButton = styled.button`
	background-color: var(--blue);
	display: flex;
	align-items: center;
	text-align: center;
	color: white;
	font-size: 16px;
	font-weight: 700;
	padding: 8px 16px;
	margin: 0;
	border: none;
	border-radius: 8px;
`;

export const SecondaryButton = styled(MainButton)`
	background-color: var(--yellow);
`;

export const BuyButton = styled(MainButton)`
	background-color: var(--lightblue);
`;
