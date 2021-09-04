import Image from 'next/image';

const Cards = () => {
	return (
		<div className='w-full flex flex-col justify-center mt-40 mb-32'>
			<div className='relative border rounded-xl py-8 px-14 h-72 flex flex-col justify-center items-start'>
				<h3 className='text-4xl font-bold'>Refer friends, earn more</h3>
				<p className='mt-3 text-base font-light'>
					Get +1% APY for 30 days, when you refer to a friend
				</p>
				<p className='mt-12'>{'Learm more ->'}</p>
				<div className='absolute right-0 bottom-0 w-80 h-64'>
					<Image layout='fill' src='/assets/robot.png' alt='card-robot' />
				</div>
			</div>
			<div className='relative border rounded-xl py-8 px-14 h-72 flex flex-col justify-center items-start mt-10'>
				<h3 className='text-4xl font-bold'>Refer friends, earn more</h3>
				<p className='mt-3 text-base font-light'>
					Get +1% APY for 30 days, when you refer to a friend
				</p>
				<p className='mt-12'>{'Learm more ->'}</p>
				<div className='absolute right-0 bottom-0 w-80 h-64'>
					<Image layout='fill' src='/assets/robot.png' alt='card-robot' />
				</div>
			</div>
		</div>
	);
};

export default Cards;
