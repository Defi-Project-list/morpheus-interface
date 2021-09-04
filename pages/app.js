import Head from 'next/head';
import App from '@components/pages/app';

export default function AppPage() {
	return (
		<>
			<Head>
				<title>AppName App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<App />
		</>
	);
}
