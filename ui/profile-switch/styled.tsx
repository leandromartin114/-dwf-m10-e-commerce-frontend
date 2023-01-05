import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: 1fr 1fr;
	width: 300px;
	@media (min-width: 480px) {
		width: 450px;
	}
	@media (min-width: 769px) {
		width: 600px;
	}
`;

export const SwitchButton = styled.button`
	width: 100%;
	background-color: ${(props) => props.color};
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
