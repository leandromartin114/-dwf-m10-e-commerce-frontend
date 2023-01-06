import Head from "next/head";
import { Layout } from "ui/layout";
import { SearchForm } from "components/form-search";
import { SearchContainer } from "styles/search";

export default function SearchPage() {
	return (
		<div>
			<Head>
				<title>Search</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<SearchContainer>
					<SearchForm />
				</SearchContainer>
			</Layout>
		</div>
	);
}
