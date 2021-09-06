import React, { useEffect, useState } from 'react';

let incrementTime = 450;
const Count = ({ number, decimals }) => {
  const [count, setCount] = useState({ actual: number, end: number + 1 });

  useEffect(() => {
    let timer = setInterval(() => {
      const increment = 0.001;
      setCount((count) => {
        if (count.end <= count.actual) return { ...count, actual: count.end };
        return { ...count, actual: count.actual + increment };
      });
    }, incrementTime);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    count.actual &&
      setCount((count) => ({
        end: number,
        actual: count.actual,
      }));
  }, [number]);

  return (
    <span className="font-mono tracking-tighter">
      {new Intl.NumberFormat('en-us', { minimumFractionDigits: 3 }).format(count.actual)}
    </span>
  );
};

export default Count;
