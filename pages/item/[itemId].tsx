import Head from 'next/head'
import { Layout } from 'ui/layout'
import { Item } from 'components/item'
import { fetchItemById } from 'lib/api'

export default function ItemPage({ data }: any) {
	return (
		<div>
			<Head>
				<title>Item detail</title>
				<meta name='description' content='Best e-commerce ever' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Item itemData={data} />
			</Layout>
		</div>
	)
}

export async function getStaticProps(context: any) {
	const itemId = context.params.itemId
	const data = await fetchItemById(itemId as string)
	return { props: { data }, revalidate: 10 }
}
export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	}
}
