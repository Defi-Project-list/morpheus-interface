import NumberFormat from 'react-number-format'

const Button = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className='w-full uppercase text-lg font-semibold px-2 py-3 rounded-lg bg-primary-500 text-white hover:-border-2 hover:bg-primary-600  hover:shadow-lg'>
			{children}
		</button>
	)
}

const DepositInput = ({
	screenState,
	acceptedAllowance,
	deposit,
	withdraw,
	submitDeposit,
	submitWithdraw,
	submitApprove,
	setDeposit,
	setWithdraw
}) => {
	const handleDeposit = (values) => {
		const { value } = values
		setDeposit(value)
	}

	const handleWithdraw = (e) => {
		setWithdraw(e.target.value)
	}

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='mt-12 w-10/12 flex flex-col items-center justify-center py-4 h-40'>
				<div className='w-3/5'>
					<p className='w-full text-left text-lg mb-2'>Deposit Amount</p>
					<div className='flex mb-8'>
						<NumberFormat
							value={deposit}
							onValueChange={handleDeposit}
							thousandSeparator={true}
							inputMode='numeric'
							className='w-full border-t border-l border-b border-gray-200 pt-2 pb-2 rounded-t-lg rounded-l-lg rounded-b-lg rounded-r-none text-2xl text-right pr-4'
						/>
						<div className='py-1 px-3 rounded-t-lg rounded-r-lg rounded-b-lg rounded-l-none text-xl bg-primary-100 flex items-center'>
							DAI
						</div>
					</div>
					<div className='w-full flex justify-center items-center'>
						{acceptedAllowance ? (
							<Button onClick={submitDeposit}>Deposit Amount</Button>
						) : (
							<Button onClick={submitApprove}> Approve Transfer</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DepositInput
