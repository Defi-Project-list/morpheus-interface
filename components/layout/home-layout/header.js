import Link from 'next/link';

import Button from '@components/components/button';

import { PlanetIcon } from '@assets/icons';

const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

export const Header = () => {
	return (
		<header className='flex items-center justify-between w-full h-28 px-36 py-4'>
			<div className='h-full flex items-center justify-start w-1/3'>
				<div className='pt-4'>
					<PlanetIcon w='65px' />
				</div>
				<h1 className='text-3xl font-bold pl-8 text-primary-500 font-serif'>
					AppName
				</h1>
			</div>
			<div className='flex justify-center text-lg w-1/3'>
				<p className='mr-8'>How it works</p>
				<p className='mr-8'>Why use it</p>
				<p>About us</p>
			</div>
			<div className='w-1/3 flex items-center justify-end'>
				<Link href='/app'>
					<Button text='Enter App' />
				</Link>
			</div>
			{/* <div className='border px-2 py-1 rounded-lg shadow-sm border-black text-green-600 font-semibold'>
				{address.slice(0, 7)}...
				{address.slice(address.length - 4, address.length)}
			</div> */}
		</header>
	);
};
