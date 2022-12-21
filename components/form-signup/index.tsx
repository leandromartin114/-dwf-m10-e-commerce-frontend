import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { Form } from "./styled";
import { useUserData, useEmail } from "lib/hooks";
import { signupUser } from "lib/api";
import Swal from "sweetalert2";

export function Signup() {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({ mode: "onSubmit" });
	const [user, setUser] = useUserData();
	const [email, setEmail] = useEmail();
	const router = useRouter();

	async function onSubmit(data: any) {
		const res = await signupUser(data);
		if (res.message == "The user already exists") {
			Swal.fire({
				title: "The user already exists",
				text: "Please, sign in with your email",
				icon: "warning",
				confirmButtonColor: "var(--lightblue)",
			});
			router.push("/signin");
		} else {
			setEmail(data.email);
			setUser(data);
			Swal.fire({
				title: "Code sended",
				text: "Check your email. We've sent you a code to sign in.",
				icon: "success",
				confirmButtonColor: "var(--fucsia)",
			});
			router.push("/signin");
		}
		reset();
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
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
			<TextField
				type='text'
				id='fullName'
				name='fullName'
				placeholder='John Doe'
				label='Full Name'
				register={register}
				required={true}
				error={errors.fullName}
			/>
			<TextField
				type='text'
				id='address'
				name='address'
				placeholder='Main Street 55'
				label='Address'
				register={register}
				required={true}
				error={errors.address}
			/>
			<MainButton type='submit'>Sign up</MainButton>
		</Form>
	);
}
