import Image from 'next/image';

const Cards = () => {
  return (
    <div className="w-full flex flex-col justify-center mt-10 xl:mt-40 mb-10 xl:mb-32">
      <div className="relative border rounded-xl py-6 px-6 xl:py-8 xl:px-14 xl:h-72 flex flex-col justify-center items-start overflow-hidden">
        <h3 className="text-lg xl:text-4xl font-bold">Refer friends, earn more</h3>
        <p className="mt-3 text-sm xl:text-base font-light">
          Get +1% APY for 30 days, when you refer to a friend
        </p>
        <p className="mt-6 xl:mt-12 text-sm border-b-2 border-primary-500">{'Learm more ->'}</p>
        <div className="hidden xl:block absolute right-0 bottom-0 xl:w-80 xl:h-64">
          <Image layout="fill" src="/assets/robot.png" alt="card-robot" />
        </div>
        <div className="absolute xl:hidden right-3 -bottom-6 w-20 h-28">
          <Image layout="fill" src="/assets/referal.png" alt="card-robot" />
        </div>
      </div>
      <div className="relative border rounded-xl py-6 px-6 xl:py-8 xl:px-14 xl:h-72 flex mt-4 xl:mt-10 flex-col justify-center items-start overflow-hidden">
        <h3 className="text-lg xl:text-4xl font-bold">Refer friends, earn more</h3>
        <p className="mt-3 text-sm xl:text-base font-light">
          Get +1% APY for 30 days, when you refer to a friend
        </p>
        <p className="mt-6 xl:mt-12 text-sm border-b-2 border-primary-500">{'Learm more ->'}</p>
        <div className="hidden xl:block absolute right-0 bottom-0 w-10 h-10 xl:w-80 xl:h-64">
          <Image layout="fill" src="/assets/robot.png" alt="card-robot" />
        </div>
        <div className="absolute xl:hidden right-3 -bottom-6 w-20 h-28">
          <Image layout="fill" src="/assets/referal.png" alt="card-robot" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
