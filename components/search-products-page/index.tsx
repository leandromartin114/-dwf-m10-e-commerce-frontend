import { useEffect, useState } from "react";
import { FormContainer, NoResultContainer } from "./styled";
import { useSearchProduct } from "lib/hooks";
import { SearchForm } from "components/form-search";
import { SearchProducts } from "components/search-products";
import { Body } from "ui/typography";
import Swal from "sweetalert2";

export function SearchProductsPage({ query }: any) {
	const response = useSearchProduct(query);
	const [data, setData] = useState<any>();

	useEffect(() => {
		if (response) {
			response.results
				? setData(response)
				: Swal.fire({
						title: "Item not found",
						text: "Try with chair, table or rug...",
						icon: "warning",
						confirmButtonColor: "var(--yellow)",
				  });
		}
	}, [response]);

	return (
		<div>
			<FormContainer>
				<SearchForm />
			</FormContainer>
			{data ? (
				<SearchProducts data={data} />
			) : (
				<NoResultContainer>
					<Body>No results</Body>
				</NoResultContainer>
			)}
		</div>
	);
}
