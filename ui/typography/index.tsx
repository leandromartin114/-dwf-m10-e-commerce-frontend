import styled from "styled-components";

export const Title = styled.h1`
	font-size: 48px;
	font-weight: 700;
	margin: 0;
`;

export const SubTitle = styled.h2`
	font-size: 32px;
	font-weight: 700;
	margin: 0;
`;

export const LargeText = styled.p`
	font-size: 20px;
	margin: 0;
`;

export const LargeTextBold = styled(LargeText)`
	font-weight: 700;
`;

export const Body = styled(LargeText)`
	font-size: 16px;
`;

export const BodyBold = styled(Body)`
	font-weight: 700;
`;

export const TinyText = styled(Body)`
	font-size: 12px;
`;
