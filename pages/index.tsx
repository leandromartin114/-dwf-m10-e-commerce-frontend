import Head from "next/head";
import { Layout } from "components/layout";
import { FeaturedProducts } from "components/featured-products";
import { SearchForm } from "components/form-search";
import { Title } from "ui/typography";
import { Container, MainSection } from "../styles/home";
import { fetchFeaturedProducts } from "lib/api";

export default function Home({ featProducts }: any) {
	return (
		<div>
			<Head>
				<title>My Free Market</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Container>
					<MainSection>
						<Title>
							We have awsome chairs, tables, and rugs waiting for you
						</Title>
						<SearchForm type='main' />
					</MainSection>
					<FeaturedProducts products={featProducts} />
				</Container>
			</Layout>
		</div>
	);
}

export async function getServerSideProps() {
	const data = await fetchFeaturedProducts();
	const featProducts = data.results;
	return { props: { featProducts } };
}
