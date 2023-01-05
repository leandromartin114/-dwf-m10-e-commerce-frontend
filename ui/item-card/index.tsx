import { Title, SubTitle, Body } from "ui/typography";
import { BuyButton, SecondaryButton } from "ui/buttons";
import {
	MyImage,
	MainContainer,
	ContentContainer,
	Content,
	DescriptionContainer,
} from "./styled";

export function ItemCard({
	onBuy,
	onCart,
	imgURL,
	name,
	price,
	description,
}: any) {
	return (
		<MainContainer>
			<ContentContainer>
				<MyImage src={imgURL} alt={name} />
				<Content>
					<SubTitle>{name}</SubTitle>
					<Title>{"$" + price}</Title>
					<BuyButton onClick={onBuy}>Buy</BuyButton>
					<SecondaryButton onClick={onCart}>Add to kart</SecondaryButton>
				</Content>
			</ContentContainer>
			<DescriptionContainer>
				<Body>{description}</Body>
			</DescriptionContainer>
		</MainContainer>
	);
}
