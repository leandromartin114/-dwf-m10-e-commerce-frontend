import { Menu } from "components/menu";
import { MenuDesktop } from "components/menu-desktop";
import { LogoIcon } from "ui/icons";
import { Container } from "./styled";

export function Header({ background = "black", text = "white" }: any) {
	return (
		<Container color={background}>
			<LogoIcon />
			<Menu background={background} text={text} />
			<MenuDesktop text={text} />
		</Container>
	);
}
