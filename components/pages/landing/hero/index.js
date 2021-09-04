import Link from 'next/link';

import Button from '@components/components/button';

const Hero = () => {
	return (
		<div className='flex w-full min-h-3/4-screen'>
			<div className='w-full flex flex-col justify-center pt-20'>
				<div>
					<h1 className='text-8xl font-sans'>
						Investing <br />
						Made <span className='text-primary-600'>Simple</span>
					</h1>
					<h3 className='text-xl font-light text-gray-500 pt-6'>
						Link your crypto account in seconds, choose your level of risk,
						<br /> and start earn up to 10% interest with DeFI-powered savings
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
					<p className='mt-3 font-light text-gray-500'>
						☑️ {' Simple, Fast & Secure'}
					</p>
				</div>
			</div>
			<div className='w-full flex justify-end items-center'>
				<img src='/assets/hero.png' alt='hero image' className='w-5/6' />
			</div>
		</div>
	);
};

export default Hero;
