import { useMeOrders } from "lib/hooks";
import { OrderItem } from "ui/order-item";
import { Container } from "./styled";
import _ from "lodash";

export function MyOrders({ active }: any) {
	const orders = useMeOrders();

	return (
		<Container style={{ display: active == true ? "inherit" : "none" }}>
			{_.map(orders, (o) => {
				return <OrderItem order={o} />;
			})}
		</Container>
	);
}
