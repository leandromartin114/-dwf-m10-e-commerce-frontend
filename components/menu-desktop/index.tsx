import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, List, Item, SessionContent } from "./styled";
import { Body, LargeText, LargeTextBold } from "ui/typography";
import { SecondaryButton } from "ui/buttons";
import { useEmailValue, useTokenValeu, useEmail, useToken } from "lib/hooks";

export function MenuDesktop({ text }: any) {
	const [logged, setLogged] = useState(false);
	const [email, setEmail] = useEmail();
	const [token, setToken] = useToken();
	const emailValue = useEmailValue();
	const tokenValue = useTokenValeu();
	const router = useRouter();

	function logOut() {
		setEmail("");
		setToken("");
		router.push("/");
	}

	useEffect(() => {
		if (tokenValue) {
			setLogged(true);
		} else {
			setLogged(false);
		}
	}, [tokenValue]);

	return (
		<Container>
			<List>
				<Item>
					<Link href={"/signup"} passHref>
						<SecondaryButton>Sign up</SecondaryButton>
					</Link>
				</Item>
				<Item>
					<Link href={tokenValue ? "/profile" : "/signin"} passHref>
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
			<SessionContent defaultValue={logged ? "inherit" : "none"}>
				<Body color='white'>{logged ? emailValue : ""}</Body>
				<LargeText
					onClick={logOut}
					color='var(--fucsia)'
					style={{ cursor: "pointer" }}
				>
					Cerrar sesión
				</LargeText>
			</SessionContent>
		</Container>
	);
}
