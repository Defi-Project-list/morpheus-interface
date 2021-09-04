import Link from 'next/link';

import Button from '@components/components/button';

const Solution = () => {
	return (
		<div className='flex w-full mt-32'>
			<div className='w-full flex flex-col justify-center pt-20'>
				<div>
					<h1 className='text-7xl font-serif'>
						What we want
						<br /> to <span className='text-primary-600'>Solve</span>
					</h1>
					<h3 className='text-xl font-light text-gray-500 pt-6'>
						Defi is a pretty complex thing, and it is a live changing enviroment
						so you need to be learning everyday to be up to date, somthing that
						no everone has time for.
						<br />
						<br />
						Defi is a pretty complex thing, and it is a live changing enviroment
						so you need to be learning everyday to be up to date, somthing that
						no everone has time for.
					</h3>
				</div>
				<div className='mt-14'>
					<Link href='/app'>
						<Button
							text='Enter App'
							size='large'
							textColor='text-primary-600'
						/>
					</Link>
				</div>
			</div>
			<div className='w-full flex justify-end items-center'>
				<img src='/assets/solution.png' alt='solution' className='w-5/6' />
			</div>
		</div>
	);
};

export default Solution;
