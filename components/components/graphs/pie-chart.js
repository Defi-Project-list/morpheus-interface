import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#d4daf4', '#bbc3ee', '#5469d4', '#3f4f9f'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (
  { cx, cy, midAngle, innerRadius, outerRadius, percent, index },
  data,
) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (!percent) {
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        0%
      </text>
    );
  }
  return (
    <text
      x={y + x}
      y={x}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${percent && data[index].name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartWrapper = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props) => renderCustomizedLabel(props, data)}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartWrapper;
