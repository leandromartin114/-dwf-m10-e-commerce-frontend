import styled from "styled-components";
import { TinyText } from "ui/typography";

export const Label = styled(TinyText)``;

export const Input = styled.input`
	font-size: 16px;
	padding: 8px;
	border: 3px solid black;
	border-radius: 8px;
`;
export function TextField({ label, placeholder, type }: any) {
	return (
		<label>
			<Label>{label}</Label>
			<Input placeholder={placeholder} type={type}></Input>
		</label>
	);
}
