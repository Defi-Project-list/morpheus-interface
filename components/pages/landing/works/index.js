import Image from 'next/image';
import WorkCard from './work-card';

const workData = [
	{
		number: '01',
		title: 'Choose your risk',
		description: 'Connect your wallet and start earning within minutes',
	},
	{},
	{
		number: '02',
		title: 'Deposit Money',
		description: 'Connect your wallet and start earning within minutes',
	},
	{
		number: '03',
		title: 'Start getting crypto exposure',
		description: 'Connect your wallet and start earning within minutes',
	},
	{},
	{
		number: '04',
		title: 'Passive grow',
		description: 'Connect your wallet and start earning within minutes',
	},
];

const Works = () => {
	return (
		<div className='relative flex flex-col justify-center items-center mt-56'>
			<div className='z-10'>
				<h1 className='text-5xl'>How it works</h1>
			</div>
			<div className='absolute left-0 top-10 w-full'>
				<img
					src='/assets/works.png'
					alt='mockup-app'
					className='w-3/4 mx-auto transform -translate-x-4'
				/>
			</div>
			<div className='grid grid-cols-3 grid-rows-2 gap-x-48 gap-y-36 mt-28 w-full z-10 pl-6'>
				{workData.map((data, index) => (
					<WorkCard
						key={index}
						number={data?.number}
						title={data?.title}
						description={data?.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Works;
