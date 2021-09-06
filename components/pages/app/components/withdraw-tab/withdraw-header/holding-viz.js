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

export default HoldingsViz;
