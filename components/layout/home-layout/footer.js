import { PlanetIcon } from '@assets/icons';

export const Footer = () => {
	return (
		<footer className='flex flex-col xl:flex-row items-start xl:items-center justify-center w-full px-10 xl:px-36 py-10 xl:py-0 xl:my-10 mb-20 xl:h-60 bg-black'>
			<div className='w-full xl:w-2/6 h-full flex xl:flex-col justify-start items-start'>
				<PlanetIcon w='25px' />
				<h1 className='ml-4 text-xl xl:text-3xl font-bold text-primary-500 font-gugi tracking-wide'>
					Epsilon
				</h1>
				<div className='pt-8 hidden xl:block'>
					<p className='flex items-center font-serif justify-center text-xl font-semibold'>
						Made with 💜 👾 <br /> by idealist dreamers
					</p>
					<p className='mt-6 font-serif'>©AppName, Inc 2021</p>
				</div>
			</div>
			<div className='w-full xl:w-4/6 grid grid-cols-2  xl:grid-cols-3 gap-y-10 gap-x-10 xl:gap-x-20 h-full mt-10 xl:mt-0'>
				<div>
					<h4 className='text-lg font-medium mb-4 text-primary-500'>Pages</h4>
					<div className='w-4/6 grid grid-cols-1 grid-rows-6 h-full text-white'>
						<p>Home</p>
						<p>App</p>
						<p>How it works</p>
						<p>Why to use it</p>
						<p>About us</p>
					</div>
				</div>
				<div>
					<h4 className='text-lg font-medium mb-4 text-primary-500'>Docs</h4>
					<div className='w-4/6 grid grid-cols-1 grid-rows-6 h-full text-white'>
						<p>Documentation</p>
						<p>Terms</p>
						<p>Privacy</p>
					</div>
				</div>
				<div className='hidden xl:block'>
					<h4 className='text-lg font-medium mb-4 text-primary-500'>Social</h4>
					<div className='w-4/6 grid grid-cols-1 grid-rows-6 h-full text-white'>
						<p>Twitter</p>
						<p>Linkedin</p>
						<p>Blog</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
