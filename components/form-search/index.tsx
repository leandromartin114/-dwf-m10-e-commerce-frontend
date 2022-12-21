import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { Form } from "./styled";
import Swal from "sweetalert2";

export function Search() {
	const router = useRouter();

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({ mode: "onSubmit" });

	async function handleSearch(data: any) {
		const query = data.query;
		try {
			console.log(query);
		} catch (error) {
			console.log(error);
		}
		reset();
	}

	return (
		<Form onSubmit={handleSubmit(handleSearch)}>
			<TextField
				type='text'
				id='query'
				name='query'
				placeholder='search...'
				register={register}
				required={true}
				error={errors.query}
			/>
			<MainButton type='submit'>Search</MainButton>
		</Form>
	);
}
