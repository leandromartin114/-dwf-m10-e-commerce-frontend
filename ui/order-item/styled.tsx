import styled from "styled-components";

export const Container = styled.div`
	border: 3px solid var(--darkblue);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	gap: 8px;
	padding: 3px;
`;

export const Content = styled.div`
	display: grid;
	gap: 4px;
	width: 100%;
	grid-template-rows: 1fr 1fr;
	border-bottom: 3px solid var(--darkblue);
	border-top: 3px solid var(--darkblue);
`;

export const Item = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	justify-items: center;
	text-align: center;
`;
