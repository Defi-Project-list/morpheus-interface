import PieChartWrapper from '@components/components/graphs/pie-chart';
import AreaLineChart from '@components/components/graphs/area-chart';

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

const AccountBalance = () => {
  const formattedBalance = new Intl.NumberFormat('en-us').format(100000);
  const formattedProfits = new Intl.NumberFormat('en-us').format(1000);
  return (
    <div className="flex justify-between ">
      <div className="flex flex-row mb-12 justify-center items-center">
        <h2 className="font-bold text-4xl mr-4 text-primary-400">P/L:</h2>
        <h2 className="font-bold text-4xl text-green-500">
          <span className="text-4xl font-bold ">+</span>
          {formattedProfits}$
        </h2>
      </div>
      <div className="flex flex-row mb-12 justify-center items-center">
        <h2 className="font-bold text-4xl mr-4 text-primary-400">Balance:</h2>
        <h2 className="font-bold text-4xl">{formattedBalance}$</h2>
      </div>
    </div>
  );
};

const WithdrawHeader = () => {
  return (
    <div className="w-6/12">
      <AccountBalance />
      <HoldingsViz />
    </div>
  );
};

export default WithdrawHeader;
