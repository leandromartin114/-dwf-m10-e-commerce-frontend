import { Menu } from "components/menu";
import { MenuDesktop } from "components/menu-desktop";
import { LogoIcon } from "ui/icons";
import { Container } from "./styled";

export function Header() {
	return (
		<Container>
			<LogoIcon />
			<Menu />
			<MenuDesktop />
		</Container>
	);
}
