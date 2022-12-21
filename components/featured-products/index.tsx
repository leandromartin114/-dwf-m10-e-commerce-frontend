import { useProducts } from "lib/hooks";
import { useEffect, useState } from "react";
import { Card } from "ui/card";
import { Container, Content } from "./styled";
import { SubTitle } from "ui/typography";

export function FeaturedProducts() {
	const allProducts = useProducts();
	const [featuredProducts, setFeaturedProdcuts] = useState<any>([]);

	function chooseProducts(products: []) {
		const selectedProducts = products
			.sort(() => Math.random() - Math.random())
			.slice(0, 3);
		setFeaturedProdcuts(selectedProducts);
	}

	useEffect(() => {
		if (allProducts) {
			chooseProducts(allProducts.results);
		}
	}, [allProducts]);

	return (
		<Container>
			<SubTitle>Featured Products</SubTitle>
			<Content>
				{featuredProducts.map((p: any) => (
					<Card
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
