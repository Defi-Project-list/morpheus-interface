const IntroCards = ({ title, description, img, alt }) => {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<img src={img} alt={alt} className='w-full' />
			<h3 className='text-3xl'>{title}</h3>
			<p className='text-base mt-3 text-center font-light text-gray-500'>
				{description}
			</p>
		</div>
	)
}

export default IntroCards
