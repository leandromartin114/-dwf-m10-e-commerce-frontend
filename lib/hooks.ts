import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { useRecoilValue, useRecoilState } from "recoil";
import { fetchAPI, fetchUserData } from "./api";
import { emailAtom, tokenAtom, userAtom, cartAtom } from "./atoms";

export function useEmail(): [
	string,
	React.Dispatch<React.SetStateAction<any>>
] {
	const [email, setEmail] = useRecoilState(emailAtom);
	return [email, setEmail];
}

export function useEmailValue(): string {
	const email = useRecoilValue(emailAtom);
	return email;
}

export function useToken(): [
	string,
	React.Dispatch<React.SetStateAction<any>>
] {
	const [token, setToken] = useRecoilState(tokenAtom);
	return [token, setToken];
}

export function useTokenValeu(): string {
	const token = useRecoilValue(tokenAtom);
	return token;
}

export function useUserData(): [
	any,
	React.Dispatch<React.SetStateAction<any>>
] {
	const [user, setUser] = useRecoilState(userAtom);
	return [user, setUser];
}

export function useCart(): [any, React.Dispatch<React.SetStateAction<any>>] {
	const [cart, setCart] = useRecoilState(cartAtom);
	return [cart, setCart];
}

export function useCartValeu(): any {
	const cart = useRecoilValue(cartAtom);
	return cart;
}

export function useProducts() {
	const { data, error } = useSWRImmutable(
		"/products?offset=0&limit=10",
		fetchAPI
	);
	return data;
}

export function useProductById(productId: any) {
	const { data, error } = useSWRImmutable("/products/" + productId, fetchAPI);
	return data;
}

export function useSearchProduct(query: string) {
	const { data, error } = useSWR(
		"/search?q=" + query + "&offset=0&limit=30",
		fetchAPI
	);
	return data;
}

export function useMe() {
	const { data, error } = useSWR("/me", fetchUserData);
	return data;
}

export function useMeOrders() {
	const { data, error } = useSWR("/me/orders", fetchUserData);
	return data;
}
