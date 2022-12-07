import Image from "next/image";
import { SubTitle, LargeText } from "ui/typography";
import { Container, TextContent } from "./styled";

export function Card({ imgURL, name, price, color }: any) {
	return (
		<Container>
			<Image width={320} height={231} src={imgURL} alt={name} />
			<TextContent color={color}>
				<LargeText>{name}</LargeText>
				<SubTitle>{price}</SubTitle>
			</TextContent>
		</Container>
	);
}
