import IntroCards from './intro-card';

const introData = [
  {
    title: 'Fast & Easy',
    description: 'Connect your wallet and start earning within minutes',
    alt: 'easy-to-use',
  },
  {
    title: 'High Interest',
    description: 'Get up to 10% APY through the power of decentralized finance',
    alt: 'high-interests',
  },
  {
    title: 'Secure',
    description: 'Connect your wallet and start earning within minutes',
    alt: 'security',
  },
];

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 xl:mt-32">
      <div>
        <h1 className="text-2xl xl:text-5xl">We make your money grow</h1>
      </div>
      <div className="grid grid-rows-3 xl:grid-cols-3 gap-y-4 xl:grid-rows-none xl:gap-y-0 xl:gap-x-36 mt-4 xl:mt-16 w-full">
        {introData.map((data, index) => (
          <IntroCards
            key={index}
            title={data?.title}
            description={data?.description}
            img={`/assets/intro-${index + 1}.png`}
            alt={data?.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;
