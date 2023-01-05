import { SwitchButton, Container } from "./styled";

export function ProfileSwitch({
	textA,
	textB,
	colorA,
	colorB,
	onClickA,
	onClickB,
}: any) {
	return (
		<Container>
			<SwitchButton onClick={onClickA} color={colorA}>
				{textA}
			</SwitchButton>
			<SwitchButton onClick={onClickB} color={colorB}>
				{textB}
			</SwitchButton>
		</Container>
	);
}
