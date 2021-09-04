import NumberFormat from 'react-number-format';

const DepositHeader = ({ deposit, APY }) => {
	return (
		<div className='w-full flex items-center justify-around'>
			<div>
				<p className='text-3xl font-bold text-primary-500'>
					{APY * 100}%{' APY'}
				</p>
				<p className='text-lg font-normal'>Expected APY</p>
			</div>
			<div className='text-center'>
				{deposit !== '0' ? (
					<p className='text-3xl font-bold text-primary-500'>
						<NumberFormat
							value={deposit * APY}
							displayType='text'
							thousandSeparator={true}
							prefix='DAI  '
						/>
					</p>
				) : (
					<p className='text-3xl font-bold text-primary-500'>
						<span className='text-lg font-light text-primary-500'>
							*Add Deposit Amount
						</span>
					</p>
				)}
				<p className='text-lg font-normal'>{'Expected Benefit (1 year)'}</p>
			</div>
		</div>
	);
};

export default DepositHeader;
