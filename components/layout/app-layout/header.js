import RobotAddress from '@assets/icons/robot-address';

const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

export const Header = () => {
	return (
		<header className='flex items-center justify-between w-full h-20 px-36'>
			<div className='h-full flex items-center justify-start'></div>
			<div className='flex justify-center items-end text-primary-500 font-semibold'>
				<p className='mr-6 text-lg'>
					{address.slice(0, 10)}...
					{address.slice(address.length - 4, address.length)}
				</p>
				<RobotAddress w='40px' h='40px' />
			</div>
		</header>
	);
};
