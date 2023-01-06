import Head from "next/head";
import { Layout } from "ui/layout";
import { Container, Message } from "../../styles/fail";
import { LargeText, SubTitle } from "ui/typography";
import { BigLogoIcon } from "ui/icons";

export default function FailPage() {
	return (
		<div>
			<Head>
				<title>Fail</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Container>
					<Message>
						<SubTitle color='var(--yellow)'>Your order was cancelled</SubTitle>
						<BigLogoIcon />
						<LargeText>
							There was a problem with the order. Try sending it back with
							another payment method. Sorry for the inconvenience.
						</LargeText>
					</Message>
				</Container>
			</Layout>
		</div>
	);
}
