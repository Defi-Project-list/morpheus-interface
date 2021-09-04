import RobotAddress from '@assets/icons/robot-address'

import { useEthers } from '../../config'

const AddressHeader = () => {
	const { providerAddress, openModal } = useEthers()
	// console.log(providerAddress)
	return (
		<div className='flex justify-end w-1/3 items-end text-primary-500 font-semibold items-center'>
			{providerAddress ? (
				<p className='mr-6 text-lg'>
					{providerAddress?.slice(0, 10)}...
					{providerAddress?.slice(
						providerAddress?.length - 4,
						providerAddress?.length
					)}
				</p>
			) : (
				<button
					onClick={openModal}
					className={`first-letter:capitalize w-min rounded-lg py-1 px-4 bg-accent-500 text-white`}>
					Connect
				</button>
			)}
			<RobotAddress w='40px' h='40px' />
		</div>
	)
}

export default AddressHeader
