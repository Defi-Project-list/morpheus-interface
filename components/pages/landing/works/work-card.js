const WorkCard = ({ number, title, description }) => {
	return (
		<div className='flex flex-col items-start justify-center'>
			<h3 className='text-xl font-semibold text-primary-600'>{number}</h3>
			<h3 className='text-3xl'>{title}</h3>
			<p className='text-base mt-3 text-start font-light text-gray-500'>
				{description}
			</p>
		</div>
	);
};

export default WorkCard;
