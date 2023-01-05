import Head from "next/head";
import { Layout } from "components/layout";
import { Cart } from "components/cart";

export default function CheckoutPage() {
	return (
		<div>
			<Head>
				<title>Checkout</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Cart />
			</Layout>
		</div>
	);
}
