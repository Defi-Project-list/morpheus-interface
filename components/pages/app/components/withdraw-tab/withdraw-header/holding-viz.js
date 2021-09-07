import PieChartWrapper from '@components/components/graphs/pie-chart';

const data = [
  { name: 'Low Risk', value: 0 },
  { name: 'High Risk', value: 0 },
  { name: 'Safe', value: 100 },
  { name: 'Degenerate', value: 0 },
];

const HoldingsViz = () => {
  return (
    <div className="flex justify-between mb-12">
      <div className="flex flex-col items-center">
        <div className="w-40	h-40">
          <PieChartWrapper data={data} />
        </div>
      </div>
    </div>
  );
};

export default HoldingsViz;
