import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>NextJS Starter kit</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1 className='text-4xl font-bold'>
				NextJS Started Kit <span className='mx-4'>🎉</span>
			</h1>
		</>
	);
}
