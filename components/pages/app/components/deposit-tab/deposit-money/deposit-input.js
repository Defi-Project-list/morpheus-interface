import { ButtonSpinner } from '@components/components/spinner';
import NumberFormat from 'react-number-format';

import styles from './deposit-animation.module.css';

export const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-full whitespace-nowrap capitalize text-lg font-seminole px-2 py-3 rounded-lg bg-primary-500 text-black-500 font-bold hover:-border-2 hover:bg-primary-600  hover:shadow-lg"
    >
      {children}
    </button>
  );
};

const DepositButtonSection = ({
  depositStatus,
  acceptedAllowance,
  submitDeposit,
  submitApprove,
}) => {
  if (depositStatus?.loading) {
    return (
      <Button>
        <ButtonSpinner />
      </Button>
    );
  }
  if (acceptedAllowance) {
    return <Button onClick={submitDeposit}>Deposit Amount</Button>;
  }
  return <Button onClick={submitApprove}> Approve Deposit</Button>;
};

const DepositAmountSection = ({
  deposit,
  handleDeposit,
  loading,
  depositStatus,
  acceptedAllowance,
  submitDeposit,
  submitApprove,
}) => {
  return (
    <>
      <div className="flex mb-8">
        <NumberFormat
          value={deposit}
          onValueChange={handleDeposit}
          thousandSeparator
          inputMode="numeric"
          className="w-full border-t border-l border-b border-gray-200 pt-2 pb-2 rounded-t-lg rounded-l-lg rounded-b-lg rounded-r-none text-2xl text-right pr-4"
        />
        <div
          className="py-1 px-3 rounded-t-lg rounded-r-lg rounded-b-lg rounded-l-none text-xl bg-primary-50 flex items-center border border-primary-500"
          style={{ width: '100px' }}
        >
          <img
            src="https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            width="20px"
            alt=""
          />
          <span className="ml-1 text-black-500 font-bold">DAI</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <DepositButtonSection
          depositStatus={depositStatus}
          acceptedAllowance={acceptedAllowance}
          submitDeposit={submitDeposit}
          submitApprove={submitApprove}
        />
      </div>
    </>
  );
};

const DepositInput = ({
  screenState,
  acceptedAllowance,
  deposit,
  submitDeposit,
  submitApprove,
  setDeposit,
  depositStatus,
  approveStatus,
}) => {
  const handleDeposit = (values) => {
    const { value } = values;
    setDeposit(value);
  };

  if (approveStatus?.loading) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center justify-center py-4 h-40 `}>
      <DepositAmountSection
        deposit={deposit}
        handleDeposit={handleDeposit}
        loading={approveStatus?.loading}
        depositStatus={depositStatus}
        acceptedAllowance={acceptedAllowance}
        submitDeposit={submitDeposit}
        submitApprove={submitApprove}
      />
    </div>
  );
};

export default DepositInput;
