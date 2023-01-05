import styled from "styled-components";

export const MyImage = styled.img`
	width: 280px;
	height: 210px;
	@media (min-width: 769px) {
		width: 300px;
		height: 230px;
	}
	@media (min-width: 1024px) {
		width: 450px;
		height: 290px;
	}
`;

export const MainContainer = styled.div`
	display: grid;
	gap: 15px;
	padding: 20px;
	width: 300px;
	justify-items: center;
	@media (min-width: 769px) {
		width: 700px;
	}
	@media (min-width: 1024px) {
		width: 900px;
	}
`;

export const ContentContainer = styled.div`
	display: grid;
	gap: 15px;
	width: 100%;
	align-items: center;
	@media (min-width: 769px) {
		width: 700px;
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 1024px) {
		width: 840px;
		grid-template-columns: 3fr 2fr;
	}
`;

export const Content = styled.div`
	display: grid;
	gap: 10px;
	width: 100%;
	justify-items: start;
	@media (min-width: 1024px) {
		height: 250px;
	}
`;

export const DescriptionContainer = styled.div`
	width: 100%;
`;
