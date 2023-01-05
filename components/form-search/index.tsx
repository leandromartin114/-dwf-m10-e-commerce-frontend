import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TextField } from "ui/text-field";
import { MainButton, SecondaryButton } from "ui/buttons";
import { MainForm, SecondaryForm } from "./styled";

export function SearchForm({ type }: any) {
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
			router.push("/search/" + query);
		} catch (error) {
			console.log(error);
		}
		reset();
	}

	return type == "main" ? (
		<MainForm onSubmit={handleSubmit(handleSearch)}>
			<TextField
				type='text'
				id='query'
				name='query'
				placeholder='search your products...'
				register={register}
				required={true}
				error={errors.query}
			/>
			<MainButton type='submit'>Search</MainButton>
		</MainForm>
	) : (
		<SecondaryForm onSubmit={handleSubmit(handleSearch)}>
			<TextField
				color='black'
				type='text'
				id='query'
				name='query'
				placeholder='search your products...'
				register={register}
				required={true}
				error={errors.query}
			/>
			<SecondaryButton type='submit'>Search</SecondaryButton>
		</SecondaryForm>
	);
}
