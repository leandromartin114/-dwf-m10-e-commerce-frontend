import Head from "next/head";
import { Layout } from "components/layout";
import { FeaturedProducts } from "components/featured-products";
import { SearchForm } from "components/form-search";
import { Title } from "ui/typography";
import { Container, MainSection } from "../styles/home";

export default function Home() {
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
					<FeaturedProducts />
				</Container>
			</Layout>
		</div>
	);
}
