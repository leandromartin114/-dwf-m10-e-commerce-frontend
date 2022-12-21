import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEmail, useToken } from "lib/hooks";
import { sendCode, getToken } from "lib/api";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { Form } from "./styled";
import Swal from "sweetalert2";

export function Signin() {
	const [email, setEmail] = useEmail();
	const [token, setToken] = useToken();
	const router = useRouter();
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({ mode: "onSubmit" });

	async function handleEmailSend(data: any) {
		const emailInput = data.email;
		const res = await sendCode(emailInput);
		if (res.message == "the user doesn't exist") {
			Swal.fire({
				title: "User not found",
				text: "Please, sign up with your email",
				icon: "warning",
				confirmButtonColor: "var(--yellow)",
			});
			router.push("/signup");
		} else {
			setEmail(emailInput);
			Swal.fire({
				title: "Code sended",
				text: "Check your email. We've sent you a code to sign in.",
				icon: "success",
				confirmButtonColor: "var(--fucsia)",
			});
		}
		reset();
	}

	async function handleLogin(data: any) {
		const code = data.code;
		try {
			const tokenValue = await getToken(email, code);
			setToken(tokenValue);
			router.push("/");
		} catch (error) {
			console.log(error);
		}
		reset();
	}

	return (
		<div>
			{!email ? (
				<Form onSubmit={handleSubmit(handleEmailSend)}>
					<TextField
						type='email'
						id='email'
						name='email'
						placeholder='youremail@mail.com'
						label='Email'
						register={register}
						required={true}
						error={errors.email}
					/>
					<MainButton type='submit'>Send</MainButton>
				</Form>
			) : (
				<Form onSubmit={handleSubmit(handleLogin)}>
					<TextField
						type='text'
						id='code'
						name='code'
						placeholder='123456'
						label='Code'
						register={register}
						required={true}
						error={errors.code}
					/>
					<MainButton type='submit'>Sign in</MainButton>
				</Form>
			)}
		</div>
	);
}
