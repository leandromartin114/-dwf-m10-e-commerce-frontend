import _ from "lodash";
import { Body, BodyBold } from "ui/typography";
import { Container, Content, Item } from "./styled";

export function OrderItem({ order }: any) {
	function totalCost(array: any) {
		let total = 0;
		for (const i of array) {
			let price = parseInt(i.unit_price);
			total = total + price;
		}
		return total;
	}
	const cost = totalCost(order.items);

	return (
		<Container>
			<BodyBold>{"Order ID: " + JSON.stringify(order.merchant_order)}</BodyBold>
			<Content>
				{_.map(order.items, (i) => {
					return (
						<Item key={i.objectID}>
							<BodyBold>{i.title}</BodyBold>
							<Body>{"quantity: " + i.quantity}</Body>
							<Body>{"$" + i.unit_price}</Body>
						</Item>
					);
				})}
			</Content>
			<BodyBold>{"Total: $" + cost.toString()}</BodyBold>
			<BodyBold>{"Order status: " + order.status}</BodyBold>
		</Container>
	);
}
