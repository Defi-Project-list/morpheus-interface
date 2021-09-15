import Link from 'next/link';

import Button from '@components/components/button';

const Hero = () => {
	return (
		<div className='flex w-full xl:min-h-3/4-screen'>
			<div className='w-full flex flex-col justify-center pr-5 xl:pr-0 pt-0 xl:pt-20'>
				<div>
					<h1 className='hidden xl:block text-4xl xl:text-8xl font-sans'>
						Investing <br />
						Made <span className='text-primary-600'>Simple</span>
					</h1>
					<h1 className='xl:hidden block text-3xl xl:text-8xl'>
						Investing Made <span className='text-primary-600'>Simple</span>
					</h1>
					<h3 className='hidden xl:block text-xl font-light text-gray-500 pt-6'>
						Link your crypto account in seconds, choose your level of risk,
						<br /> and start earn up to 10% interest with DeFI-powered savings
					</h3>
					<h3 className='xl:hidden block text-md font-light text-gray-500 pt-4'>
						Link your crypto account in seconds, choose your level of risk, and
						start earn up to 10% interest with DeFI-powered savings
					</h3>
				</div>
				<div className='mt-5 xl:mt-14'>
					<Link href='/app'>
						<Button
							text='Enter App'
							size='large'
							textColor='text-primary-600'
						/>
					</Link>
					<p className='mt-3 text-sm xl:text-base font-light text-gray-500'>
						☑️ {' Simple, Fast & Secure'}
					</p>
				</div>
			</div>
			<div className='w-full hidden xl:flex justify-end items-center'>
				<img src='/assets/hero.png' alt='hero image' className='w-5/6' />
			</div>
		</div>
	);
};

export default Hero;
