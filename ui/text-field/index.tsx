import styled from "styled-components";
import { TinyText } from "ui/typography";

export const Label = styled(TinyText)``;

export const Input = styled.input`
	width: 100%;
	font-size: 16px;
	padding: 8px;
	border: 3px solid black;
	border-radius: 8px;
`;
export function TextField({ label, placeholder, type, name }: any) {
	return (
		<label>
			<Label>{label}</Label>
			<Input placeholder={placeholder} type={type} name={name} />
		</label>
	);
}
