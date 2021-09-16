import { DaiIcon, InformationIcon, RightArrowIcon } from '@assets/icons';
import CheckAnimation from '@components/components/check-animation';
import NumberFormat from 'react-number-format';

const IncomeSection = ({ deposit, APY }) => {
  if (deposit === '0') {
    return <span className="text-lg font-light text-primary-500">*Add Deposit Amount</span>;
  }
  const monthlyIncome = Math.round(((deposit * APY) / 12) * 100) / 100;
  return (
    <div className="text-center flex justify-between w-full py-3">
      <div>
        <h2 className="text-black-100 text-xl pt-6 pb-3">Monthly Income</h2>
        <p className="text-2xl font-bold text-primary-500">
          <NumberFormat value={monthlyIncome} displayType="text" thousandSeparator />
          <span className="text-base font-normal text-black-100 ml-1">DAI</span>
        </p>
      </div>
      <div>
        <h2 className="text-black-100 text-xl pt-6 pb-3">Yearly Income</h2>
        <p className="text-2xl font-bold text-primary-500">
          <NumberFormat value={deposit * APY} displayType="text" thousandSeparator />
          <span className="text-base font-normal text-black-100 ml-1">DAI</span>
        </p>
      </div>
    </div>
  );
};

const ApySection = ({ APY }) => {
  return (
    <div className="mb-3">
      <p className="text-6xl font-bold text-primary-500 relative">
        {APY * 100}%
        <span className="text-base font-normal text-black-100 ml-1 absolute">{' APY*'}</span>
      </p>
    </div>
  );
};
const ProductRiskSection = ({ riskLevel }) => {
  return (
    <div className="pt-6 flex items-center w-full">
      <span className="text-xl font-normal text-black-200 mr-3">Product Risk:</span>
      <div className="relative w-min">
        <span className="text-xl font-normal text-black-100">{riskLevel}</span>
        <div className="absolute top-0 -right-6">
          <InformationIcon color="white" />
        </div>
      </div>
    </div>
  );
};
const AccountBalance = () => {
  return (
    <div className="w-full mt-1">
      <p className="text-xl font-bold text-primary-500 relative flex items-center">
        <span className="text-xl font-normal text-black-200 mr-3">Your Balance: </span>
        <span className="mr-2 text-black-100">1000</span>
        <DaiIcon w="20px" />
      </p>
    </div>
  );
};

const Steps = () => {
  return (
    <div className="flex items-center relative">
      <span className="text-black-100 mx-2">approve</span>
      <RightArrowIcon color="white" />
      <span className="text-black-100 mx-2">deposit</span>
      <RightArrowIcon color="white" />
      <span className="text-black-100 mx-2">receive shares</span>
      <div className="absolute top-0 -right-6">
        <InformationIcon color="white" />
      </div>
    </div>
  );
};

export const DepositHeaderApproved = ({ deposit, loading, success, approveStatus }) => {
  if (!loading) return null;
  return (
    <div>
      <div className={`w-full flex flex-col items-center justify-center `}>
        <div className="mb-6">
          <Steps />
        </div>
        <CheckAnimation status={{ loading, success }} />
        <span className="text-xl font-normal text-black-200 mr-3">
          Approving deposit of{' '}
          <span className="text-primary-500">
            {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(deposit)} DAI
          </span>
        </span>
      </div>
    </div>
  );
};

const DepositHeader = ({ deposit, APY, riskLevel, approveStatus }) => {
  const { loading } = approveStatus || {};
  if (loading) return null;
  return (
    <>
      <div className={`w-full flex flex-col items-center justify-around mt-6 overflow-hidden `}>
        <ApySection APY={APY} />
        <IncomeSection deposit={deposit} APY={APY} />
        <ProductRiskSection riskLevel={riskLevel} />
        <AccountBalance />
        <div className="mt-12 ">
          <Steps />
        </div>
      </div>
    </>
  );
};

export default DepositHeader;
