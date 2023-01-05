import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	gap: 10px;
	justify-items: center;
	width: 300px;
	@media (min-width: 480px) {
		width: 450px;
	}
	@media (min-width: 769px) {
		width: 600px;
	}
`;
