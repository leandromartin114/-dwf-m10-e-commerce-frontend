import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 3px solid black;
	border-radius: 6px;
`;

export const MyImage = styled.img`
	width: 70px;
	height: 62px;
`;

export const Text = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const TextS = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	text-align: center;
	@media (min-width: 769px) {
		display: flex;
	}
`;
