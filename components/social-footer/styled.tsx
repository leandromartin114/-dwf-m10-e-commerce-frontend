import styled from "styled-components";

export const List = styled.ul`
	flex-grow: 1;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 0;
	padding: 20px 0px;
	@media (min-width: 769px) {
		align-items: flex-end;
	}
`;

export const Item = styled.li`
	margin: 0;
	padding: 5px 0px;
`;
