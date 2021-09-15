import Link from 'next/link';

import Button from '@components/components/button';

import { PlanetIcon } from '@assets/icons';
import Burger from '@assets/icons/burger';

const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

export const Header = () => {
	return (
		<header className='flex items-center justify-between w-full h-24 xl:h-28 px-10 xl:px-36 py-4'>
			<div className='h-full flex items-center justify-start w-1/3'>
				{/* <div className='pt-4'>
					<PlanetIcon w='35px' />
				</div> */}
				<h1 className='text-xl xl:text-3xl font-bold text-primary-500 font-gugi'>
					Epsilon
				</h1>
			</div>
			<div className='hidden xl:flex justify-center text-lg w-1/3'>
				<p className='mr-8'>How it works</p>
				<p className='mr-8'>Why use it</p>
				<p>About us</p>
			</div>
			<div className='w-1/3 hidden xl:flex items-center justify-end'>
				<Link href='/app'>
					<Button text='Enter App' />
				</Link>
			</div>
			<div className='w-1/3 flex xl:hidden items-center justify-end'>
				<Burger w='20px' />
			</div>
		</header>
	);
};
