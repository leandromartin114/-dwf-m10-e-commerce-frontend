import Image from "next/image";
import { useRouter } from "next/router";
import { LargeTextBold, LargeText } from "ui/typography";
import { Container, TextContent } from "./styled";

export function Card({ itemId, imgURL, name, price, color }: any) {
	const router = useRouter();

	const handleClick = () => {
		router.push("/item/" + itemId);
	};

	return (
		<Container onClick={handleClick}>
			<Image width={280} height={210} src={imgURL} alt={name} />
			<TextContent color={color}>
				<LargeText>{name}</LargeText>
				<LargeTextBold>{"$" + price}</LargeTextBold>
			</TextContent>
		</Container>
	);
}
