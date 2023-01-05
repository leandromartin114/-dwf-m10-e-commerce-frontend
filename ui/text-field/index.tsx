import { Label, Input, InputBlack } from "./styled";

export function TextField({
	register,
	required,
	error,
	id,
	label,
	color,
	...inputProps
}: any) {
	return (
		<label>
			{label ? <Label>{label}</Label> : null}
			{color == "black" ? (
				<InputBlack
					{...register(id, { required: required })}
					id={id}
					{...inputProps}
				/>
			) : (
				<Input
					{...register(id, { required: required })}
					id={id}
					{...inputProps}
				/>
			)}
			{error && <span>this field is required</span>}
		</label>
	);
}
