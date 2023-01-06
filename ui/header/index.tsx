import { Menu } from "components/menu";
import { MenuDesktop } from "components/menu-desktop";
import { LogoIcon } from "ui/icons";
import { Container } from "./styled";
import { useRouter } from "next/router";

export function Header({ background = "black", text = "white" }: any) {
	const router = useRouter();

	function clickHandler() {
		router.push("/");
	}
	return (
		<Container color={background}>
			<LogoIcon onClick={clickHandler} />
			<Menu background={background} text={text} />
			<MenuDesktop text={text} />
		</Container>
	);
}
