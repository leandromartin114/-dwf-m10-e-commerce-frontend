import { Container } from "./styled";
import styles from "./pagination.module.css";

export function Pagination({
	totalProducts,
	productsPerPage,
	setCurrentPage,
	currentPage,
}: any) {
	let pages = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pages.push(i);
	}

	return (
		<Container>
			{pages.map((page, index) => {
				return (
					<button
						key={index}
						onClick={() => setCurrentPage(page)}
						className={page == currentPage ? styles.active : styles.button}
					>
						{page}
					</button>
				);
			})}
		</Container>
	);
}
