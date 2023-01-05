import Head from "next/head";
import { Layout } from "components/layout";
import { Cart } from "components/cart";

export default function CartPage() {
	return (
		<div>
			<Head>
				<title>My Cart</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Cart></Cart>
			</Layout>
		</div>
	);
}