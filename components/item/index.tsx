import { useRouter } from "next/router";
import { ItemCard } from "ui/item-card";
import { useProductById, useCart, useTokenValeu } from "lib/hooks";
import { useEffect, useState } from "react";
import { Container } from "./styled";
import Swal from "sweetalert2";

export function Item({ itemId }: any) {
	const router = useRouter();
	const detail = useProductById(itemId);
	const token = useTokenValeu();
	const [product, setProduct] = useState<any>({});
	const [cart, setCart] = useCart();

	const handleBuy = () => {
		if (token) {
			if (cart.lenght == 0) {
				const items = [];
				items.push(product);
				setCart(items);
			} else {
				const newCart = [...cart, product];
				setCart(newCart);
			}
			router.push("/cart");
		} else {
			router.push("/signin");
			Swal.fire({
				title: "You are not logged in",
				text: "Please, sign in with your email to keep shopping",
				icon: "warning",
				confirmButtonColor: "var(--blue)",
			});
		}
	};

	const handleCart = () => {
		if (token) {
			if (cart.lenght == 0) {
				const items = [];
				items.push(product);
				setCart(items);
			} else {
				const newCart = [...cart, product];
				setCart(newCart);
			}
			Swal.fire({
				title: "Item added to your shopping cart",
				text: "Please, go to your cart to finish your purchase",
				icon: "success",
				confirmButtonColor: "var(--lightblue)",
			});
		} else {
			router.push("/signin");
			Swal.fire({
				title: "You are not logged in",
				text: "Please, sign in with your email to keep shopping",
				icon: "warning",
				confirmButtonColor: "var(--blue)",
			});
		}
	};

	useEffect(() => {
		if (detail !== undefined) {
			setProduct(detail);
		}
	}, [detail, product]);

	return product.Images == undefined ? (
		<p>Loading detail...</p>
	) : (
		<Container>
			<ItemCard
				onBuy={handleBuy}
				onCart={handleCart}
				imgURL={product.Images[0].url}
				name={product.Name}
				price={product["Unit cost"]}
				description={product.Description}
			/>
		</Container>
	);
}
