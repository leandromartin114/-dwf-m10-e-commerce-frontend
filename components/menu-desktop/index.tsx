import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, List, Item, SessionContent } from "./styled";
import { Body, LargeText, LargeTextBold } from "ui/typography";
import { SecondaryButton } from "ui/buttons";
import { Cart } from "ui/cart";
import Swal from "sweetalert2";
import {
	useEmailValue,
	useTokenValeu,
	useEmail,
	useToken,
	useCartValeu,
	useCart,
	useUserData,
} from "lib/hooks";

export function MenuDesktop({ text }: any) {
	const [logged, setLogged] = useState(false);
	const [email, setEmail] = useEmail();
	const [token, setToken] = useToken();
	const [cart, setCart] = useCart();
	const [user, setUser] = useUserData();
	const emailValue = useEmailValue();
	const tokenValue = useTokenValeu();
	const cartValue = useCartValeu();
	const router = useRouter();

	function logOut() {
		setEmail("");
		setToken("");
		setUser({});
		setCart([]);
		router.push("/");
	}

	function handleCart() {
		if (tokenValue) {
			if (cartValue.length !== 0) {
				router.push("/checkout");
			} else {
				Swal.fire({
					title: "¡The cart is empty!",
					icon: "warning",
					confirmButtonColor: "var(--blue)",
				});
			}
		} else {
			Swal.fire({
				title: "You are not logged in",
				text: "Please, sign in with your email to keep shopping",
				icon: "warning",
				confirmButtonColor: "var(--blue)",
			});
		}
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
			<Cart onClick={handleCart} items={cartValue.length} />
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
