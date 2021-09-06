import PieChartWrapper from '@components/components/graphs/pie-chart';
import AreaLineChart from '@components/components/graphs/area-chart';
import { useContext, useEffect, useState } from 'react';
import { WalletContext } from '@components/pages/app';
import Count from './animated-counter';

const data = [
  { name: 'Safe', value: 500 },
  { name: 'Low Risk', value: 300 },
  { name: 'High Risk', value: 300 },
  { name: 'Degenerate', value: 100 },
];

const MINUTE_MS = 10000;

const HoldingsViz = () => {
  return (
    <div className="flex justify-between mb-12">
      <div className="flex flex-col items-center">
        <div className="w-40	h-40">
          <PieChartWrapper data={data} />
        </div>
        <h2 className="font-bold text-2xl mt-8 whitespace-nowrap text-primary-400">Holdings</h2>
      </div>
      <div className="flex flex-col items-center ">
        <div className="h-40" style={{ width: '400px' }}>
          <AreaLineChart />
        </div>
        <h2 className="font-bold text-2xl whitespace-nowrap mt-8 text-primary-400">New-worth</h2>
      </div>
    </div>
  );
};

const AccountBalance = ({ balance }) => {
  return (
    <div className="flex justify-center mb-12 ">
      <div className="flex flex-col justify-end items-start">
        <h2 className="font-bold text-xl mr-4 text-primary-400">Balance:</h2>
        <div className="flex flex-row  justify-center items-center">
          <h2 className="font-bold text-4xl text-primary-400 relative">
            ${balance && <Count number={balance} />}
            <div
              className="bg-green-100 border border-green-300 rounded-md ml-4 absolute"
              style={{
                top: 0,
                right: 0,
                transform: 'translate(120%, 20%)',
              }}
            >
              <h2 className="font-bold text-xl text-green-500 flex items-center px-2">
                <span className="text-xl font-normal ">+</span>$
                {balance && <Count number={balance - 1000000} />}
              </h2>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

const WithdrawHeader = () => {
  const [balance, setBalance] = useState(0);

  const { shares, contracts } = useContext(WalletContext);

  async function getSharePrice() {
    const sharePrice = await contracts.vault.getPricePerFullShare();
    const userBalance = (shares * sharePrice) / Math.pow(10, 36);
    setBalance(userBalance);
  }

  useEffect(() => {
    if (!shares) return null;
    const interval = setInterval(() => {
      getSharePrice();
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, [shares]);

  return (
    <div className="w-6/12">
      <AccountBalance balance={balance} />
      <HoldingsViz />
    </div>
  );
};

export default WithdrawHeader;
