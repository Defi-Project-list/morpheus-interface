import RobotAddress from '@assets/icons/robot-address';

import { useEthers } from '../../config';

const ConnectWalletButton = ({ openModal, error }) => {
  if (error) {
    return (
      <button
        onClick={openModal}
        className={`first-letter:capitalize w-min rounded-lg py-1 px-4 bg-red-500 text-white whitespace-nowrap 	hover:bg-red-600`}
      >
        {error}
      </button>
    );
  }
  return (
    <button
      onClick={openModal}
      className={`
		 	border
			border-transparent
			first-letter:capitalize
			w-min rounded-md py-1 px-4 
			bg-accent-200 	
			text-accent-500 
			whitespace-nowrap
			hover:border-accent-500
			 `}
    >
      Connect Wallet
    </button>
  );
};

function formatWalletAddress(walletAddress) {
  return `${walletAddress?.slice(0, 10)}...
					${walletAddress?.slice(walletAddress?.length - 4, walletAddress?.length)}`;
}

const AddressHeader = ({ setAccountData }) => {
  const { providerAddress, openModal, error } = useEthers(setAccountData);
  return (
    <div className="flex justify-end w-1/3 items-end text-primary-500 font-semibold items-center">
      {providerAddress ? (
        <p className="mr-6 text-lg">{formatWalletAddress(providerAddress)}</p>
      ) : (
        <ConnectWalletButton openModal={openModal} error={error} />
      )}
      <RobotAddress w="60px" h="60px" />
    </div>
  );
};

export default AddressHeader;
