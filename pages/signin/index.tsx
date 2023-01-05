import Head from "next/head";
import { Layout } from "components/layout";
import { Signin } from "components/form-signin";
import { Content } from "../../styles/signin";
import { Title } from "ui/typography";

export default function SigninPage() {
	return (
		<div>
			<Head>
				<title>Signin</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Content>
					<Title>Signin</Title>
					<Signin />
				</Content>
			</Layout>
		</div>
	);
}
