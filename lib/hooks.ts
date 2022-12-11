import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchAPI } from "./api";

export function useMe() {
	const { data, error } = useSWR("/me", fetchAPI);
	return data;
}
export function useProduct(productId: string) {
	const { data, error } = useSWRImmutable("/products/" + productId, fetchAPI);
	return data;
}
