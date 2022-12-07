import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	border: 4px solid black;
	border-radius: 8px;
	width: 328px;
	height: 322px;
`;

export const TextContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	background-color: ${(props) => props.color || "var(--fucsia)"};
	width: 100%;
`;
