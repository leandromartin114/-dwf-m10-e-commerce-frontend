import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "components/layout";
import { Item } from "components/item";

export default function ItemPage() {
	const router = useRouter();
	const itemId = router.query.itemId;

	return (
		<div>
			<Head>
				<title>Item detail</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Item itemId={itemId} />
			</Layout>
		</div>
	);
}
