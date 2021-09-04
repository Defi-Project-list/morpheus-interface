import RobotAddress from '@assets/icons/robot-address';

import { useEthers } from '../../config';

const AddressHeader = () => {
	const { providerAddress } = useEthers();

	return (
		<div className='flex justify-end w-1/3 items-end text-primary-500 font-semibold'>
			<p className='mr-6 text-lg'>
				{providerAddress?.slice(0, 10)}...
				{providerAddress?.slice(
					providerAddress?.length - 4,
					providerAddress?.length
				)}
			</p>
			<RobotAddress w='40px' h='40px' />
		</div>
	);
};

export default AddressHeader;
