import NumberFormat from 'react-number-format';

const DepositInput = ({
	screenState,
	acceptedAllowance,
	deposit,
	withdraw,
	submitDeposit,
	submitWithdraw,
	submitApprove,
	setDeposit,
	setWithdraw,
}) => {
	const handleDeposit = (values) => {
		const { value } = values;
		setDeposit(value);
	};

	const handleWithdraw = (e) => {
		setWithdraw(e.target.value);
	};

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='mt-16 w-10/12 flex flex-col items-center justify-center py-4 h-40'>
				<div className='w-3/5'>
					<p className='w-full text-left text-lg mb-2'>Deposit Amount</p>
					<div className='flex mb-8'>
						<NumberFormat
							value={deposit}
							onValueChange={handleDeposit}
							thousandSeparator={true}
							inputMode='numeric'
							className='w-full border-t border-l border-b border-black rounded-t-lg rounded-l-lg rounded-b-lg rounded-r-none text-2xl text-right pr-2'
						/>
						<div className='py-1 px-3 border border-black rounded-t-lg rounded-r-lg rounded-b-lg rounded-l-none bg-purple-300 text-xl bg-primary-300'>
							DAI
						</div>
					</div>
					<div className='w-full flex justify-center items-center'>
						{acceptedAllowance ? (
							<button
								onClick={submitDeposit}
								className='w-4/5 uppercase border border-gray-200 text-lg font-semibold px-2 py-3 rounded-2xl shadow-md bg-primary-100 text-primary-600 hover:-border-2 hover:border-primary-500'>
								Deposit Amount
							</button>
						) : (
							<button
								onClick={submitApprove}
								className='w-4/5 uppercase border border-gray-200 text-lg font-semibold px-2 py-3 rounded-2xl shadow-md bg-primary-100 text-primary-600 hover:-border-2 hover:border-primary-500'>
								Approve Transfer
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DepositInput;
