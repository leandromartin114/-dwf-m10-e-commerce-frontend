import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<RecoilRoot>
				<Head>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Component {...pageProps} />
			</RecoilRoot>
		</div>
	);
}
