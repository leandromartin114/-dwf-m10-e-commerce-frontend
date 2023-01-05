import styled from "styled-components";

export const ResultContainer = styled.div`
	display: grid;
	gap: 20px;
	align-items: center;
	justify-items: center;
	padding: 20px;
	@media (min-width: 969px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
