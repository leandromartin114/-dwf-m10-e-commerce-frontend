import styled from "styled-components";

export const Container = styled.div`
	display: none;
	justify-content: center;
	flex-grow: 1;
	width: 100%;
	@media (min-width: 769px) {
		display: flex;
	}
`;

export const List = styled.ul`
	list-style: none;
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
`;

export const Item = styled.li`
	margin: 0px 15px;
`;

export const SesionContent = styled.div`
	text-align: center;
	cursor: pointer;
	margin: 0px 15px;
`;
