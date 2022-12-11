import { Container, Content } from "./styled";
import { MenuFooter } from "components/menu-footer";
import { SocialFooter } from "components/social-footer";
import { Body } from "ui/typography";

export function Footer({ background = "black", text = "white" }) {
	return (
		<Container color={background}>
			<Content>
				<MenuFooter text={text} />
				<SocialFooter text={text} />
			</Content>
			<Body color='white'>©2022 Leandro Roldán</Body>
		</Container>
	);
}
