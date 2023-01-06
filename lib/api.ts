const API_BASE_URL = "https://myfreemarket.vercel.app/api";

export async function fetchAPI(input: RequestInfo, options: any, token?: any) {
	const url = API_BASE_URL + input;
	const newOptions = options || {};
	newOptions.headers ||= {};
	newOptions.headers["Content-Type"] = "application/json";
	if (newOptions.body) {
		newOptions.body = JSON.stringify(newOptions.body);
	}
	if (token) {
		newOptions.headers.Authorization = "bearer " + token;
	}
	const res = await fetch(url, newOptions);

	if (res.status >= 200 && res.status < 300) {
		return res.json();
	} else {
		const data = await res.json();
		return {
			message: data.message,
			status: res.status,
		};
	}
}

export async function sendCode(email: string) {
	return fetchAPI("/auth/login", { method: "POST", body: { email } });
}

export async function getToken(email: string, code: string) {
	const data = await fetchAPI("/auth/token", {
		method: "POST",
		body: { email, code: parseInt(code) },
	});
	return data.token;
}

export async function signupUser(userData: {}) {
	const data = await fetchAPI("/auth/signup", {
		method: "POST",
		body: { ...userData },
	});
	return data;
}

export async function createOrder(token: string, items: any) {
	const data = await fetchAPI(
		"/order",
		{
			method: "POST",
			body: items,
		},
		token
	);
	return data;
}

export async function fetchUserData(input: RequestInfo) {
	const localData = sessionStorage.getItem("local_data");
	const parsedData = JSON.parse(localData as string);
	const token = parsedData.auth_token;
	const data = await fetchAPI(
		input,
		{
			method: "GET",
		},
		token
	);
	return data;
}

export async function modifyUserData(body: any) {
	const localData = sessionStorage.getItem("local_data");
	const parsedData = JSON.parse(localData as string);
	const token = parsedData.auth_token;
	const data = await fetchAPI(
		"/me",
		{
			method: "PATCH",
			body: body,
		},
		token
	);
	return data;
}

export async function fetchAllProducts() {
	const data = await fetchAPI("/products?offset=0&limit=10", { method: "GET" });
	return data;
}

export async function fetchFeaturedProducts() {
	const data = await fetchAPI("/products/featured?offset=0&limit=15", {
		method: "GET",
	});
	return data;
}
