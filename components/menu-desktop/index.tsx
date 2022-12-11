import Link from "next/link";
import { Container, List, Item, SesionContent } from "./styled";
import { Body, LargeText, LargeTextBold } from "ui/typography";
import { SecondaryButton } from "ui/buttons";
import { useMe } from "lib/hooks";

export function MenuDesktop({ text }: any) {
	const data = useMe();
	const email = data.email;

	return (
		<Container>
			<List>
				<Item>
					<Link href={"/signup"} passHref>
						<SecondaryButton>Sign up</SecondaryButton>
					</Link>
				</Item>
				<Item>
					<Link href={"/signin"} passHref>
						<LargeTextBold color='var(--lightblue)'>Sign in</LargeTextBold>
					</Link>
				</Item>
				<Item>
					<Link href={"/profile"} passHref>
						<LargeTextBold color={text}>My profile</LargeTextBold>
					</Link>
				</Item>
				<Item>
					<Link href={"/search"} passHref>
						<LargeTextBold color={text}>Search</LargeTextBold>
					</Link>
				</Item>
			</List>
			<SesionContent>
				<Body color='white'>{email}</Body>
				<LargeText color='var(--fucsia)'>Cerrar sesión</LargeText>
			</SesionContent>
		</Container>
	);
}
