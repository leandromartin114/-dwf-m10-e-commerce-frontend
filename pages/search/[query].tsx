import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "ui/layout";
import { SearchProductsPage } from "components/search-products-page";

export default function SearchQueryPage() {
	const router = useRouter();
	const query = JSON.stringify(router.query.query);

	return (
		<div>
			<Head>
				<title>Search</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<SearchProductsPage query={query} />
			</Layout>
		</div>
	);
}
