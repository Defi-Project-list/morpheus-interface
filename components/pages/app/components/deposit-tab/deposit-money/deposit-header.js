import NumberFormat from 'react-number-format';

const IncomeSection = ({ deposit, APY }) => {
  return (
    <div className="text-center">
      {deposit !== '0' ? (
        <p className="text-2xl font-bold text-primary-500">
          {/* TODO: change css so it does not move everything when number grows */}
          {!!deposit && <span className="text-2xl font-bold text-green-400">+</span>}
          <NumberFormat value={deposit * APY} displayType="text" thousandSeparator />
          <span className="text-base font-normal text-black-100 ml-1">DAI</span>
        </p>
      ) : (
        <p className="text-2xl font-bold text-primary-500">
          <span className="text-lg font-light text-primary-500">*Add Deposit Amount</span>
        </p>
      )}
      <p className="text-sm font-normal text-gray-400">Expected Profits 1 year</p>
    </div>
  );
};

const DepositHeader = ({ deposit, APY, riskLevel }) => {
  return (
    <div className="w-full flex flex-col items-center justify-around mt-5">
      <div>
        <p className="text-6xl font-bold text-primary-500">
          {APY * 100}%<span className="text-base font-normal text-black-100 ml-1">{' APY'}</span>
        </p>
        <p className="text-sm mt-2 text-gray-400">Expected, may vary</p>
      </div>
      <IncomeSection />
      <p className="text-xl font-normal text-black-100">
        Product Risk:
        {riskLevel}
      </p>
    </div>
  );
};

export default DepositHeader;
