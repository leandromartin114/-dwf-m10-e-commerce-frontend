import Head from "next/head";
import { Layout } from "ui/layout";
import { Signup } from "components/form-signup";
import { Content } from "../../styles/signup";
import { Title } from "ui/typography";

export default function SignupPage() {
	return (
		<div>
			<Head>
				<title>Signup</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Content>
					<Title>Signup</Title>
					<Signup />
				</Content>
			</Layout>
		</div>
	);
}
