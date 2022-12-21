import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { useRecoilValue, useRecoilState } from "recoil";
import { fetchAPI } from "./api";
import { emailAtom, tokenAtom, userAtom } from "./atoms";

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

export function useMe() {
	const { data, error } = useSWR("/me", fetchAPI);
	return data;
}

export function useProducts() {
	const { data, error } = useSWRImmutable(
		"/products?offset=0&limit=10",
		fetchAPI
	);
	return data;
}

export function useProductById(productId: string) {
	const { data, error } = useSWRImmutable("/products/" + productId, fetchAPI);
	return data;
}
