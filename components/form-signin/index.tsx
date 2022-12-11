import { useState } from "react";
import Router from "next/router";
import { sendCode, getToken } from "lib/api";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { Form } from "./styled";

export function Signin() {
	const [email, setEmail] = useState("");

	async function handleEmailSend(e: any) {
		e.preventDefault();
		const email = e.target.email.value;
		setEmail(email);
		await sendCode(email);
	}

	async function handleLogin(e: any) {
		e.preventDefault();
		const code = e.target.code.value;
		try {
			await getToken(email, code);
			Router.push("/users");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			{!email ? (
				<Form onSubmit={handleEmailSend}>
					<TextField
						name='email'
						placeholder='youremail@email.com'
						type='email'
						label='Email'
					/>
					<MainButton type='submit'>Enviar</MainButton>
				</Form>
			) : (
				<Form onSubmit={handleLogin}>
					<TextField
						name='code'
						placeholder='123456'
						type='text'
						label='Code'
					/>
					<MainButton type='submit'>Singin</MainButton>
				</Form>
			)}
		</div>
	);
}
