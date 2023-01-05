import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//this is necesary to recognize the storage methods in the server side
const sessionStorage =
	typeof window !== `undefined` ? window.sessionStorage : undefined;

//persist in sessionStorage/localStorage
const { persistAtom } = recoilPersist({
	key: "local_data",
	storage: sessionStorage,
});

//atoms
export const emailAtom = atom({
	key: "email",
	default: "",
	effects_UNSTABLE: [persistAtom],
});

export const tokenAtom = atom({
	key: "auth_token",
	default: "",
	effects_UNSTABLE: [persistAtom],
});

export const userAtom = atom({
	key: "user_data",
	default: {},
	effects_UNSTABLE: [persistAtom],
});

export const cartAtom = atom({
	key: "cart_data",
	default: [],
	effects_UNSTABLE: [persistAtom],
});
