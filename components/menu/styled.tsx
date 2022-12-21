import styled from "styled-components";

export const Container = styled.div`
	display: inherit;
	@media (min-width: 769px) {
		display: none;
	}
`;

export const Content = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${(props) => props.color};
	display: ${(props) => props.defaultValue};
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	overflow-y: scroll;
	overflow: hidden;
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	bottom: 0;
`;

export const List = styled.ul`
	flex-grow: 1;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin: 0;
	padding: 40px 0px;
`;

export const Item = styled.li`
	margin: 0;
`;

export const SessionContent = styled.div`
	text-align: center;
	display: ${(props) => props.defaultValue};
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
