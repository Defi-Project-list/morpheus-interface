import Count from './animated-counter';
import StockArrow from 'assets/icons/stock-arrow';
import HoldingsViz from './holding-viz';

const AccountBalance = ({ balance }) => {
  return (
    <div>
      <div className="flex justify-around mb-12 items-start">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-lg text-primary-500 text-center mb-8">
            Holdings Composition
          </h2>
          <HoldingsViz />
        </div>
        <div>
          <h2 className="font-bold text-lg  text-primary-500 text-center mb-8">Account Balance</h2>
          <div className="flex flex-row  justify-center items-center mt-20">
            <h2 className="font-bold text-5xl text-green-500 relative flex items-center">
              <StockArrow color="#198559" w="30px" />
              {balance && <Count number={balance} decimals={0} />}$
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
