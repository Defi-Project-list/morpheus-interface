import React from 'react';
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 1000,
  },
  {
    name: 'Page B',
    uv: 2000,
  },
  {
    name: 'Page C',
    uv: 3000,
  },
  {
    name: 'Page D',
    uv: 4780,
  },
  {
    name: 'Page E',
    uv: 5890,
  },
  {
    name: 'Page F',
    uv: 6390,
  },
  {
    name: 'Page G',
    uv: 7490,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload);
  if (active && payload && payload.length) {
    const data = payload?.[0]?.payload;
    return (
      <div>
        {data.name} || {data.uv}
      </div>
    );
  }

  return null;
};

const AreaLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0147ba" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="uv" stroke="#0147ba" fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaLineChart;
