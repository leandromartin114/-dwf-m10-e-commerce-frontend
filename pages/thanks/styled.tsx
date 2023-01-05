import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	padding: 50px 20px;
`;

export const Message = styled.div`
	border: 3px solid var(--lightblue);
	border-radius: 6px;
	padding: 20px;
	display: grid;
	gap: 10px;
	justify-items: center;
	align-items: center;
	text-align: center;
	width: 290px;
	height: 100%;
	@media (min-width: 769px) {
		width: 540px;
		height: 400px;
	}
`;
