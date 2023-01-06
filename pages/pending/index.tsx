import Head from "next/head";
import { Layout } from "ui/layout";
import { Container, Message } from "../../styles/pending";
import { LargeText, SubTitle } from "ui/typography";
import { BigLogoIcon } from "ui/icons";

export default function PendingPage() {
	return (
		<div>
			<Head>
				<title>Pending</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Container>
					<Message>
						<SubTitle color='var(--blue)'>Your order is pending</SubTitle>
						<BigLogoIcon />
						<LargeText>
							The order is processing. Thank you for your trust. We will send
							the products to you as soon as possible.
						</LargeText>
					</Message>
				</Container>
			</Layout>
		</div>
	);
}
