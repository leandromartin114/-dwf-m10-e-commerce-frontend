const API_BASE_URL = "https://myfreemarket.vercel.app/api";

export async function fetchAPI(
	input: RequestInfo,
	options: any,
	token?: string
) {
	const url = API_BASE_URL + input;
	const newOptions = options || {};
	newOptions.headers ||= {};
	newOptions.headers["Content-Type"] = "application/json";
	if (token) {
		newOptions.headers.Authorization = "bearer " + token;
	}
	if (newOptions.body) {
		newOptions.body = JSON.stringify(newOptions.body);
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
