import styled from "styled-components";

export const Container = styled.div`
	background-color: ${(props) => props.color};
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 0px;
	@media (min-width: 769px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
