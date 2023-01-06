import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Content, List, Item, SessionContent } from "./styled";
import { SubTitle, Body, LargeText } from "ui/typography";
import { MenuIcon, XIcon } from "ui/icons";
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

export function Menu({ background, text }: any) {
	const [open, setOpen] = useState(false);
	const [logged, setLogged] = useState(false);
	const [email, setEmail] = useEmail();
	const [token, setToken] = useToken();
	const [cart, setCart] = useCart();
	const [user, setUser] = useUserData();
	const emailValue = useEmailValue();
	const tokenValue = useTokenValeu();
	const cartValue = useCartValeu();
	const router = useRouter();

	function handleToggle() {
		setOpen(!open);
	}

	function logOut() {
		setEmail("");
		setToken("");
		setUser({});
		setCart([]);
		router.push("/");
		handleToggle();
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
			<Cart onClick={handleCart} items={cartValue.length} />
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
			</Content>
		</Container>
	);
}
