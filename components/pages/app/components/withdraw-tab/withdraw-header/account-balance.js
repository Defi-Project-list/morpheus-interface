import Count from './animated-counter';

const AccountBalance = ({ balance }) => {
  return (
    <div className="flex justify-center mb-12 ">
      <div className="flex flex-col justify-end items-start">
        <h2 className="font-bold text-lg mr-4 text-primary-400">Balance:</h2>
        <div className="flex flex-row  justify-center items-center">
          <h2 className="font-bold text-4xl text-primary-500 relative">
            ${balance && <Count number={balance} decimals={0} />}
            <div
              className="bg-green-100 border border-green-300 rounded-md ml-4 absolute"
              style={{
                top: 0,
                right: 0,
                transform: 'translate(120%, 20%)',
              }}
            >
              <h2 className="font-bold text-xl text-green-500 flex items-center px-2">
                <span className="text-xl font-normal ">+</span>$
                {balance && <Count number={balance - 1000000} decimals={3} />}
              </h2>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
