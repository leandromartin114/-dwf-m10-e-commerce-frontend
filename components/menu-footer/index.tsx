import Link from "next/link";
import { List, Item } from "./styled";
import { Body } from "ui/typography";

export function MenuFooter({ text }: any) {
	return (
		<List>
			<Item>
				<Link href={"/signin"} passHref>
					<Body color={text}>Sign in</Body>
				</Link>
			</Item>
			<Item>
				<Link href={"/signup"} passHref>
					<Body color={text}>Sign up</Body>
				</Link>
			</Item>
			<Item>
				<Link href={"/profile"} passHref>
					<Body color={text}>My profile</Body>
				</Link>
			</Item>
			<Item>
				<Link href={"/search"} passHref>
					<Body color={text}>Search</Body>
				</Link>
			</Item>
		</List>
	);
}
