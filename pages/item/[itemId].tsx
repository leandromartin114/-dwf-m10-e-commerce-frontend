import Head from "next/head";
import { Layout } from "components/layout";
import { Item } from "components/item";
import { fetchItemById } from "lib/api";

export default function ItemPage({ data }: any) {
	return (
		<div>
			<Head>
				<title>Item detail</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Item itemData={data} />
			</Layout>
		</div>
	);
}

export async function getStaticProps(context: any) {
	const itemId = context.params.itemId;
	const data = await fetchItemById(itemId as string);
	return { props: { data }, revalidate: 10 };
}
export async function getStaticPaths() {
	return {
		paths: [
			{ params: { itemId: "receT4Ew4LOWySPRu" } },
			{ params: { itemId: "recqOTGrGKPvuUQ9E" } },
			{ params: { itemId: "reckSRhrkIg8YGVba" } },
			{ params: { itemId: "recGKmXrIyM8FG64G" } },
			{ params: { itemId: "recjM67d7CZtjQmxa" } },
			{ params: { itemId: "recFGILR0jvxcNlID" } },
			{ params: { itemId: "recSmwTjgHlCcj8ED" } },
			{ params: { itemId: "recFvw7C8gw04BKV5" } },
			{ params: { itemId: "rec19xw4A4ZcPjJpG" } },
			{ params: { itemId: "recsPYyoRSHxyJM4A" } },
			{ params: { itemId: "recTEm2YXFdDl0wPo" } },
			{ params: { itemId: "reci4bavaKm8fOFrK" } },
			{ params: { itemId: "recZrRriPxyX9IkZK" } },
			{ params: { itemId: "recjXXxzLLIoyMF8u" } },
		],
		fallback: "blocking", // can also be false or 'blocking'
	};
}
