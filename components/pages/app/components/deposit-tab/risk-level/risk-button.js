import { DaiIcon } from '@assets/icons';

const Button = ({ children }) => {
  return <button className="bg-black-500 text-white rounded-md w-full py-1 ">{children}</button>;
};

const RiskButton = ({ riskLevel, value, handleRiskLevel, text, imageSrc, apy }) => {
  return (
    <button
      onClick={() => handleRiskLevel(value)}
      className={`flex flex-col justify-center border items-center h-52 rounded-2xl bg-white relative overflow-hidden transition-transform duration-300 
        border-primary-500 relative p-3 hover:shadow-depositProducts`}
    >
      <div
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, #f9be5626 0, rgba(255,255,255,0) 100%)',
          width: '200%',
          height: '200%',
          transform: 'translate(0%, -50%)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}
      />
      <div className="flex justify-between w-full h-full items-center">
        <div className="h-full flex flex-col justify-center w-full items-center">
          <img src={imageSrc} width={80} className="object-contain h-16" alt="" />
          <div className="flex flex-col ">
            <span className=" mt-3 font-semibold text-green-500 text-3xl ">{apy}%</span>
            <span className="text-black-400 text-md ">APY</span>
          </div>
        </div>
        <div className="h-full flex flex-col w-full justify-center">
          <div className="flex -mt-6 mb-6 justify-end w-full">
            <DaiIcon w="20px" />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-3xl text-black-500">{text}</span>
          </div>
          <div className="mt-6 w-full">
            <Button>Details</Button>
          </div>
        </div>
      </div>
    </button>
  );
};

export default RiskButton;
