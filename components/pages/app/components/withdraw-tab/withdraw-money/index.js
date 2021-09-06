import NumberFormat from 'react-number-format';
import { Button } from '../../deposit-tab/deposit-money/deposit-input';
import { convertToBigNum } from '../../../utils/convertBigNumber';
import { useContext, useState } from 'react';
import axios from 'axios';
import { contractAddress } from '@components/pages/app/config/addresses';
import { WalletContext } from '@components/pages/app';
import PieChartWrapper from '@components/components/graphs/pie-chart';
import AreaLineChart from '@components/components/graphs/area-chart';

const fetchGas = () => axios.get(contractAddress.GAS_STATION);

const data = [
  { name: 'Safe', value: 500 },
  { name: 'Low Risk', value: 300 },
  { name: 'High Risk', value: 300 },
  { name: 'Degenerate', value: 100 },
];

const HoldingsViz = () => {
  return (
    <div className="flex justify-between mb-12">
      <div className="flex flex-col items-center">
        <div className="w-40	h-40">
          <PieChartWrapper data={data} />
        </div>
        <h2 className="font-bold text-2xl">Holdings</h2>
      </div>
      <div className="flex flex-col items-center ">
        <div className="	h-40" style={{ width: '500px' }}>
          <AreaLineChart />
        </div>
        <h2 className="font-bold text-2xl whitespace-nowrap">New-worth</h2>
      </div>
    </div>
  );
};

const AccountBalance = () => {
  const formattedBalance = new Intl.NumberFormat('en-us').format(100000);
  return (
    <div className="flex flex-row mb-12 justify-center">
      <h2 className="font-bold text-4xl mr-4">Balance:</h2>
      <h2 className="font-bold text-4xl">{formattedBalance}$</h2>
    </div>
  );
};

const WithdrawMoney = () => {
  const { contracts } = useContext(WalletContext);
  const [withdraw, setWithdraw] = useState(0);
  const handleWithdraw = (values) => {
    const { value } = values;
    setWithdraw(value);
  };
  const withdrawAmount = async () => {
    const gasPrice = await fetchGas().then((r) => r.data?.standard * 1e9);
    const withdrawAmount = convertToBigNum(withdraw);
    try {
      const tx = await contracts.vault.withdraw(withdrawAmount, {
        gasPrice,
      });
      const res = await tx.wait();
      console.log({ res });
    } catch (err) {
      console.error(err, 'error deposit');
    }
  };
  return (
    <div className="w-full flex justify-center items-center mt-20">
      <div className="w-6/12">
        <AccountBalance />
        <HoldingsViz />
        <div>
          <NumberFormat
            value={withdraw}
            onValueChange={handleWithdraw}
            thousandSeparator={true}
            inputMode="numeric"
            className="w-full border-t border-l border-b border-gray-200 pt-2 pb-2 rounded-t-lg rounded-l-lg rounded-b-lg rounded-r-none text-2xl text-right pr-4"
          />
          <div className="w-full flex justify-center items-center">
            <Button onClick={withdrawAmount}>Withdraw Amount</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawMoney;
