import { useCart, useCartValeu, useTokenValeu } from "lib/hooks";
import { CartItem } from "ui/cart-item";
import { groupItemsById } from "lib/helpers";
import { Container, ListContainer, ButtonContainer } from "./styled";
import { Title } from "ui/typography";
import { BuyButton, SecondaryButton } from "ui/buttons";
import { createOrder } from "lib/api";
import { useRouter } from "next/router";

export function Cart() {
	const router = useRouter();
	const cartValue = useCartValeu();
	const [cart, setCart] = useCart();
	const token = useTokenValeu();
	const newCart = groupItemsById(cartValue);
	let items: any = [];
	newCart.map((i) => {
		const obj = {
			objectID: i.objectID,
			title: i.Name,
			quantity: i.quantity,
			unit_price: i["Unit cost"],
			currency_id: "ARS",
		};
		items.push(obj);
	});

	async function buyHandler() {
		const data = await createOrder(token, items);
		router.replace(data.url, data.url, {
			shallow: true,
		});
	}

	function emptyHandler() {
		setCart([]);
		router.push("/");
	}

	return (
		<Container>
			<Title>Shopping Cart</Title>
			<ListContainer>
				{newCart.map((p: any) => (
					<CartItem
						key={p.objectID}
						imgURL={p.Images[0].url}
						name={p.Name}
						quantity={p.quantity}
						materials={p.Materials}
						size={p["Size (WxLxH)"]}
						price={p["Unit cost"]}
					></CartItem>
				))}
			</ListContainer>
			<ButtonContainer>
				<BuyButton onClick={buyHandler}>Buy</BuyButton>
				<SecondaryButton onClick={emptyHandler}>Empty Cart</SecondaryButton>
			</ButtonContainer>
		</Container>
	);
}
