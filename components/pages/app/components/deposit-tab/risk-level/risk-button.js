const riskColorMapping = () => {}

const RiskButton = ({
	riskLevel,
	value,
	handleRiskLevel,
	text,
	imageSrc,
	apy
}) => {
	const isSelected = riskLevel === value
	return (
		<button
			onClick={() => handleRiskLevel(value)}
			className={`flex flex-col justify-center border items-center h-36 rounded-2xl bg-white relative overflow-hidden transition-transform duration-300  ${
				isSelected && 'border-primary-500 scale-110 '
			}`}
			style={
				isSelected
					? {
							boxShadow:
								'rgb(139 92 246 / 1%) 0px 0px 1px, rgb(139 92 246 / 4%) 0px 4px 8px, rgb(139 92 246 / 4%) 0px 16px 24px, rgb(139 92 246 / 1%) 0px 24px 32px'
					  }
					: {}
			}>
			<div className='absolute top-0 right-0 rotate-45 w-100 m-2 bg-green-100  w-24 translate-x-1/3'>
				<span className='font-semibold text-green-500 text-lg '>{apy}%</span>
			</div>
			<img src={imageSrc} width={80} className='object-contain h-16' />
			<span className='mt-3 font-normal text-xl'> {text}</span>
		</button>
	)
}

export default RiskButton
