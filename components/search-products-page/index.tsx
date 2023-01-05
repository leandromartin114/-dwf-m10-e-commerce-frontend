import { useEffect, useState } from "react";
import { SearchContainer, Content } from "./styled";
import { useSearchProduct } from "lib/hooks";
import { SearchForm } from "components/form-search";
import { Pagination } from "components/pagination";
import { SearchResults } from "components/search-results";
import { Body } from "ui/typography";

export function SearchProductsPage({ query }: any) {
	const data = useSearchProduct(query);
	const [products, setProducts] = useState([]);
	const [totalProducts, setTotalProducts] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(3);
	const lastProductIndex = currentPage * productsPerPage;
	const firstProductIndex = lastProductIndex - productsPerPage;
	const currentProducts = products.slice(firstProductIndex, lastProductIndex);

	useEffect(() => {
		if (query && data) {
			setProducts(data.results);
			setTotalProducts(data.pagination.total);
			setCurrentPage(1);
		}
	}, [query, data]);

	return (
		<div>
			<SearchContainer>
				<SearchForm />
			</SearchContainer>
			<Content>
				<Body>
					{"Showing " +
						JSON.stringify(currentProducts.length) +
						" of " +
						JSON.stringify(totalProducts) +
						" results."}{" "}
				</Body>
				<SearchResults results={currentProducts} />
				<Pagination
					totalProducts={totalProducts}
					productsPerPage={productsPerPage}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			</Content>
		</div>
	);
}
