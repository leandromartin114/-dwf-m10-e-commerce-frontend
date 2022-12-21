import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	gap: 20px;
	align-items: center;
	justify-items: center;
	padding: 20px;
	background-color: var(--fucsia);
	width: 100%;
	@media (min-width: 969px) {
		background-color: var(--lightblue);
	}
`;
export const Content = styled.div`
	display: grid;
	gap: 20px;
	align-items: center;
	justify-items: center;
	@media (min-width: 969px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
