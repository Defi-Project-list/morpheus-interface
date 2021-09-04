import { PlanetIcon } from '@assets/icons';

export const Footer = () => {
	return (
		<footer className='flex items-center justify-center w-full px-36 my-10 mb-20 h-60'>
			<div className='w-2/6 h-full flex flex-col justify-start items-start'>
				<PlanetIcon w='65px' />
				<div className='pt-8'>
					<p className='flex items-center font-serif justify-center text-xl font-semibold'>
						Made with 💜 👾 <br /> by idealist dreamers
					</p>
					<p className='mt-6 font-serif'>©AppName, Inc 2021</p>
				</div>
			</div>
			<div className='w-4/6 grid grid-cols-3 gap-x-20 h-full'>
				<div>
					<h4 className='text-lg font-medium mb-4'>Pages</h4>
					<div className='w-4/6 grid grid-cols-1 grid-rows-6 h-full'>
						<p>Home</p>
						<p>App</p>
						<p>How it works</p>
						<p>Why to use it</p>
						<p>About us</p>
					</div>
				</div>
				<div>
					<h4 className='text-lg font-medium mb-4'>Docs</h4>
					<div className='w-4/6 grid grid-cols-1 grid-rows-6 h-full'>
						<p>Documentation</p>
						<p>Terms</p>
						<p>Privacy</p>
					</div>
				</div>
				<div>
					<h4 className='text-lg font-medium mb-4'>Social</h4>
					<div className='w-4/6 grid grid-cols-1 grid-rows-6 h-full'>
						<p>Twitter</p>
						<p>Linkedin</p>
						<p>Blog</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
