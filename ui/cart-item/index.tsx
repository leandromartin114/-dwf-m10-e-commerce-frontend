import { Container, MyImage, Text, TextS } from "./styled";
import { BodyBold, Body } from "ui/typography";

export function CartItem({
	imgURL,
	name,
	price,
	quantity,
	materials,
	size,
}: any) {
	return (
		<Container>
			<MyImage src={imgURL} alt={name} />
			<Text>
				<BodyBold style={{ marginRight: "3px" }}>{name}</BodyBold>
				<Body>{"x" + quantity}</Body>
			</Text>
			<TextS>
				<Body>{"Materials: " + materials}</Body>
				<Body>{"Size: " + size}</Body>
			</TextS>
			<BodyBold>{"$" + price}</BodyBold>
		</Container>
	);
}
