import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 100,
  },
  {
    name: 'Page B',
    uv: 200,
  },
  {
    name: 'Page C',
    uv: 300,
  },
  {
    name: 'Page D',
    uv: 478,
  },
  {
    name: 'Page E',
    uv: 580,
  },
  {
    name: 'Page F',
    uv: 639,
  },
  {
    name: 'Page G',
    uv: 749,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
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
          top: 0,
          right: -20,
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
        <YAxis
          orientation="right"
          tickCount={3}
          interval="preserveStartEnd"
          tickSize={2}
          unit="k"
          tick={{
            stroke: 'none',
            strokeWidth: 1,
            fontSize: '14px',
            fontWeight: '500',
            fill: '#8796e1',
            width: 40,
          }}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="uv" stroke="#0147ba" fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaLineChart;
