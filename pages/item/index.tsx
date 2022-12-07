import { BuyButton, MainButton, SecondaryButton } from "ui/buttons";
import {
	Body,
	BodyBold,
	LargeText,
	LargeTextBold,
	SubTitle,
	TinyText,
	Title,
} from "ui/typography";
import { Card } from "ui/card";
import { TextField } from "ui/text-field";

export default function ItemPage() {
	return (
		<div>
			<Card
				imgURL='https://i.picsum.photos/id/767/400/260.jpg?hmac=na_lfiyTGdO7paa5zeExU2MFd3wRfGED-AvWeKwTD7E'
				name='Producto'
				price='$999'
			/>
			<TextField label='Nombre' placeholder='tu nombre' type='text'></TextField>
			<Title style={{ color: "var(--blue)" }}>Titulo</Title>
			<SubTitle>Subtitulo</SubTitle>
			<LargeText>Large Text</LargeText>
			<LargeTextBold>Large Bold</LargeTextBold>
			<Body>Soy un parrafo</Body>
			<BodyBold>Parrafo bold</BodyBold>
			<TinyText>Soy un texto pequeño</TinyText>
			<MainButton>Botón principal</MainButton>
			<SecondaryButton>Botón secundario</SecondaryButton>
			<BuyButton>Botón comprar</BuyButton>
		</div>
	);
}
