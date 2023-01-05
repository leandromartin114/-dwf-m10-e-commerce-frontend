import { useForm } from "react-hook-form";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { Form } from "./styled";
import { useMe } from "lib/hooks";
import Swal from "sweetalert2";

export function Profile() {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({ mode: "onSubmit" });
	const userData = useMe();

	async function onSubmit(data: any) {
		console.log(data);
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
				defaultValue={userData.email}
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
				defaultValue={userData.fullName}
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
				defaultValue={userData.address}
			/>
			<MainButton type='submit'>Send</MainButton>
		</Form>
	);
}
