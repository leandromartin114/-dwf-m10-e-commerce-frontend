import { ResultContainer } from "./styled";
import { Card } from "ui/card";

export function SearchResults({ results }: any) {
	return (
		<ResultContainer>
			{results.map((p: any) => (
				<Card
					itemId={p.objectID}
					key={p.objectID}
					imgURL={p.Images[0].url}
					name={p.Name}
					price={p["Unit cost"]}
					color='var(--fucsia)'
				></Card>
			))}
		</ResultContainer>
	);
}
