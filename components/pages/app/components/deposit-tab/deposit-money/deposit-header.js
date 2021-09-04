import NumberFormat from 'react-number-format'

const DepositHeader = ({ deposit, APY }) => {
	return (
		<div className='w-full flex items-center justify-around mt-5'>
			<div>
				<p className='text-6xl font-bold text-primary-500'>
					{APY * 100}%
					<span className='text-base font-normal text-primary-500 ml-1'>
						{' APY'}
					</span>
				</p>
				<p className='text-sm mt-2 text-gray-400'>Expected, may vary</p>
			</div>
			<div className='text-center'>
				{deposit !== '0' ? (
					<p className='text-6xl font-bold text-primary-500'>
						{/* TODO: change css so it does not move everything when number grows */}
						{!!deposit && (
							<span className='text-6xl font-bold text-green-400'>+</span>
						)}
						<NumberFormat
							value={deposit * APY}
							displayType='text'
							thousandSeparator={true}
						/>
						<span className='text-base font-normal text-primary-500 ml-1'>
							DAI
						</span>
					</p>
				) : (
					<p className='text-3xl font-bold text-primary-500'>
						<span className='text-lg font-light text-primary-500'>
							*Add Deposit Amount
						</span>
					</p>
				)}
				<p className='text-sm font-normal text-gray-400'>
					Expected Profits 1 year
				</p>
			</div>
		</div>
	)
}

export default DepositHeader
