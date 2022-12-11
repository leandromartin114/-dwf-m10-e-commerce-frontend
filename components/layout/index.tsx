import { Header } from "components/header";
import { Footer } from "components/footer";

export function Layout({ children }: any) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
