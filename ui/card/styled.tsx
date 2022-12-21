import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-rows: 3fr 1fr;
	border: 4px solid black;
	border-radius: 8px;
	width: 288px;
	height: 282px;
`;

export const TextContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 5px;
	background-color: ${(props) => props.color || "var(--fucsia)"};
	width: 100%;
`;
