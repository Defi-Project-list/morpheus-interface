import { useEffect, useState } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className='bg-white rounded-lg px-4 py-2 shadow-lg border border-gray-300'>
				<p className='label'>{`${payload[0].value.toFixed(2)}$`}</p>
				<p className='label'>{`${payload[0].payload.time} months`}</p>
			</div>
		);
	}

	return null;
};

const createData = (amount, APY) => {
	const interest = APY + 1;
	const benefitsMonth = (amount * interest - amount) / 12;
	return [...Array(12)].reduce((acc, value, index) => {
		let compound;
		if (index === 0) {
			compound = benefitsMonth;
		} else {
			compound = benefitsMonth + acc[index - 1].amount;
		}
		const time = index + 1;
		acc = [...acc, { amount: compound, time: time }];
		return acc;
	}, []);
};

const ChartAPY = ({ amount, APY = 0.1 }) => {
	const [data, setData] = useState({});
	useEffect(() => {
		const newData = createData(amount, APY);
		setData(newData);
	}, [amount, APY]);
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart width={150} height={40} data={data}>
				<Tooltip
					content={<CustomTooltip />}
					cursor={{ fill: 'transparent', cursor: 'pointer' }}
				/>
				<Bar dataKey='amount' fill='#8884d8' />
				<XAxis dataKey='time' fill='#8884d8' unit=' months' />
				<YAxis unit='$' />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ChartAPY;
