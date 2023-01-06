import { Header } from "ui/header";
import { Footer } from "ui/footer";

export function Layout({ children }: any) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
