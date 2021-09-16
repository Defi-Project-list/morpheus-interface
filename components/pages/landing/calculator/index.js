import { useState } from 'react';
import Image from 'next/image';
import ChartAPY from './chart-APY';

const Intro = () => {
  const [amount, setAmount] = useState(10000);
  const [APY, setAPY] = useState(0.1);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAPY = (e) => {
    setAPY(Number(e.target.id));
  };

  return (
    <div className="hidden xl:flex relative flex-col justify-center items-center mt-56">
      <div className="z-10">
        <h1 className="text-5xl">Calculate your earns</h1>
      </div>
      <div className="flex justify-between items-stretch w-full mt-20">
        <div className="grid grid-cols-1 grid-rows-4 gap-y-3 w-1/4 mr-4">
          <div
            className={`relative overflow-hidden flex flex-col items-start justify-between border rounded-lg px-6 py-4 h-32 cursor-pointer ${
              APY === 0.1 && 'shadow-lg border-primary-500'
            }`}
          >
            <h3 className="text-xl font-semibold">10% APY</h3>
            <h3 className="text-xl">Safe</h3>
            <div className="absolute rounded-full bg-purple-200 -right-16 -bottom-10 w-36 h-32" />
            <div
              as="button"
              onClick={handleAPY}
              id="0.1"
              className="absolute left-0 top-0 w-full h-full z-20"
            />
            <div className="absolute bottom-4 right-4 w-16 h-16 z-10">
              <Image layout="fill" src="/assets/piggy.png" />
            </div>
          </div>
          <div
            className={`relative overflow-hidden flex flex-col items-start justify-between border rounded-lg px-6 py-4 h-32 cursor-pointer ${
              APY === 0.14 && 'shadow-lg border-primary-500'
            }`}
          >
            <h3 className="text-xl font-semibold">14% APY</h3>
            <h3 className="text-xl">Low Risk</h3>
            <div className="absolute rounded-full bg-purple-100 -right-16 -bottom-10 w-36 h-32" />
            <div
              as="button"
              onClick={handleAPY}
              id="0.14"
              className="absolute left-0 top-0 w-full h-full z-20"
            />
            <div className="absolute bottom-6 right-6 w-16 h-12 z-10">
              <Image layout="fill" src="/assets/low-risk.png" />
            </div>
          </div>
          <div
            className={`relative overflow-hidden flex flex-col items-start justify-between border rounded-lg px-6 py-4 h-32 cursor-pointer ${
              APY === 0.2 && 'shadow-lg border-primary-500'
            }`}
          >
            <h3 className="text-xl font-semibold">20% APY</h3>
            <h3 className="text-xl">Some Risk</h3>
            <div className="absolute rounded-full bg-blue-100 -right-16 -bottom-10 w-36 h-32" />
            <div
              as="button"
              onClick={handleAPY}
              id="0.2"
              className="absolute left-0 top-0 w-full h-full z-20"
            />
            <div className="absolute bottom-4 right-4 w-20 h-20 z-10">
              <Image layout="fill" src="/assets/high-risk.png" />
            </div>
          </div>
          <div
            className={`relative overflow-hidden flex flex-col items-start justify-between border rounded-lg px-6 py-4 h-32 cursor-pointer ${
              APY === 0.3 && 'shadow-lg border-primary-500'
            }`}
          >
            <h3 className="text-xl font-semibold">30% APY</h3>
            <h3 className="text-xl">Degenerate</h3>
            <div className="absolute rounded-full bg-blue-200 -right-16 -bottom-10 w-36 h-32" />
            <div
              as="button"
              onClick={handleAPY}
              id="0.3"
              className="absolute left-2 top-2 w-full h-full z-20"
            />
            <div className="absolute bottom-4 right-4 w-24 h-24 z-10">
              <Image layout="fill" src="/assets/degenerate.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-3/4 border rounded-lg p-12 ml-4 min-h-full">
          <div className="flex justify-between items-center w-full">
            <div className="w-full flex flex-col justify-center items-center">
              <h4 className="text-3xl mb-10">Amount Deposit</h4>
              <div className="flex">
                <input
                  type="number"
                  value={amount}
                  onChange={handleAmount}
                  className="border-t border-l border-b border-black rounded-t-lg rounded-l-lg rounded-b-lg rounded-r-none text-2xl text-right"
                />
                <div className="py-1 px-3 border border-black rounded-t-lg rounded-r-lg rounded-b-lg rounded-l-none bg-purple-300 text-2xl bg-primary-300">
                  $
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-10">
            <div className="w-full h-72">
              <ChartAPY APY={APY} amount={amount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
