import styled from "styled-components";

export const MainForm = styled.form`
	display: grid;
	gap: 10px;
	width: 280px;
	padding: 20px;
	@media (min-width: 769px) {
		width: 350px;
	}
`;
export const SecondaryForm = styled.form`
	display: grid;
	gap: 10px;
	width: 280px;
	padding: 20px;
	background-color: black;
	@media (min-width: 480px) {
		width: 350px;
	}
	@media (min-width: 769px) {
		width: 600px;
		grid-template-columns: 3fr 1fr;
	}
`;
