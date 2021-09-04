import Head from 'next/head';

import Landing from '@components/pages/landing';
import { Layout } from '@components/layout';

export default function LandingPage() {
	return (
		<Layout>
			<Head>
				<title>AppName Finance</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Landing />
		</Layout>
	);
}
