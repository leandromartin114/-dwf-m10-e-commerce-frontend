import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	display: grid;
	justify-items: center;
`;

export const ListContainer = styled.div`
	padding: 10px 0px;
	width: 90%;
	display: grid;
	gap: 10px;
`;

export const ButtonContainer = styled.div`
	display: grid;
	gap: 10px;
	width: 260px;
	@media (min-width: 769px) {
		width: 300px;
	}
`;
