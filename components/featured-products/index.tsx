import { useEffect, useState } from "react";
import { Card } from "ui/card";
import { Container, Content } from "./styled";
import { SubTitle } from "ui/typography";

export function FeaturedProducts({ products }: any) {
	const [featuredProducts, setFeaturedProducts] = useState<any>([]);

	useEffect(() => {
		const selectedProducts = products
			.sort(() => Math.random() - Math.random())
			.slice(0, 3);
		setFeaturedProducts(selectedProducts);
	}, [products]);

	return (
		<Container>
			<SubTitle>Featured Products</SubTitle>
			<Content>
				{featuredProducts.map((p: any) => (
					<Card
						itemId={p.objectID}
						key={p.objectID}
						imgURL={p.Images[0].url}
						name={p.Name}
						price={p["Unit cost"]}
						color='var(--fucsia)'
					></Card>
				))}
			</Content>
		</Container>
	);
}
