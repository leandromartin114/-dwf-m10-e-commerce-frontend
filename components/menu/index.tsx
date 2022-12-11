import Link from "next/link";
import { useState } from "react";
import { Container, Content, List, Item, SesionContent } from "./styled";
import { SubTitle, Body, LargeText } from "ui/typography";
import { MenuIcon, XIcon } from "ui/icons";
import { useMe } from "lib/hooks";

export function Menu({ background, text }: any) {
	const [open, setOpen] = useState(false);
	function handleToggle() {
		setOpen(!open);
	}
	const data = useMe();
	const email = data.email;

	return (
		<Container>
			<MenuIcon onClick={handleToggle} color='white' />
			<Content defaultValue={open ? "flex" : "none"} color={background}>
				<XIcon onClick={handleToggle} color='white' />
				<List>
					<Item>
						<Link href={"/signin"} passHref>
							<SubTitle color={text}>Sign in</SubTitle>
						</Link>
					</Item>
					<Item>
						<Link href={"/signup"} passHref>
							<SubTitle color={text}>Sign up</SubTitle>
						</Link>
					</Item>
					<Item>
						<Link href={"/profile"} passHref>
							<SubTitle color={text}>My profile</SubTitle>
						</Link>
					</Item>
					<Item>
						<Link href={"/search"} passHref>
							<SubTitle color={text}>Search</SubTitle>
						</Link>
					</Item>
				</List>
				<SesionContent>
					<Body color='white'>{email}</Body>
					<LargeText color='var(--fucsia)'>Cerrar sesión</LargeText>
				</SesionContent>
			</Content>
		</Container>
	);
}
