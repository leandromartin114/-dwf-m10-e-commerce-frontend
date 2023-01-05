import { CartIcon } from "ui/icons";
import { BodyBold } from "ui/typography";
import { Container } from "./styled";

export function Cart({ items, onClick }: any) {
	const number = JSON.stringify(items);

	return (
		<Container onClick={onClick}>
			<CartIcon color='white' />
			<BodyBold style={{ lineHeight: "16px" }} color='red'>
				{number !== "0" ? number : null}
			</BodyBold>
		</Container>
	);
}
