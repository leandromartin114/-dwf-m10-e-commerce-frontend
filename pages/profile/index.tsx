import Head from "next/head";
import { Layout } from "ui/layout";
import { Profile } from "components/form-profile";
import { Title } from "ui/typography";
import { ProfileSwitch } from "ui/profile-switch";
import { useEffect, useState } from "react";
import { Container } from "../../styles/profile";
import { MyOrders } from "components/orders";
import { useTokenValeu } from "lib/hooks";
import { useRouter } from "next/router";

export default function ProfilePage() {
	const [active, setActive] = useState("");
	const token = useTokenValeu();
	const router = useRouter();

	const activeA = () => {
		setActive("A");
	};

	const activeB = () => {
		setActive("B");
	};

	useEffect(() => {
		if (!token) {
			router.push("/signin");
		}
	});

	return (
		<div>
			<Head>
				<title>My Profile</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Title>My Profile</Title>
				<Container>
					<ProfileSwitch
						textA='My data'
						colorA={active == "A" ? "var(--darkblue)" : "var(--lightgrey)"}
						onClickA={activeA}
						textB='My orders'
						colorB={active == "B" ? "var(--darkblue)" : "var(--lightgrey)"}
						onClickB={activeB}
					/>
					<Profile active={active == "A" ? true : false} />
					<MyOrders active={active == "B" ? true : false} />
				</Container>
			</Layout>
		</div>
	);
}
