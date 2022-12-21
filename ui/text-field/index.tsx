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
export function TextField({
	register,
	required,
	error,
	id,
	label,
	...inputProps
}: any) {
	return (
		<label>
			{label ? <Label>{label}</Label> : null}
			<Input
				{...register(id, { required: required })}
				id={id}
				{...inputProps}
			/>
			{error && <span>this field is required</span>}
		</label>
	);
}
