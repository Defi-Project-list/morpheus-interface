import Link from 'next/link';

import Button from '@components/components/button';

const Solution = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row w-full mt-10 xl:mt-32">
      <div className="relative w-full flex flex-col justify-center xl:pt-20 bg-primary-200 xl:bg-transparent px-4 py-5 rounded-lg overflow-hidden">
        <div>
          <h1 className="hidden xl:block text-2xl xl:text-7xl font-serif">
            What we want
            <br /> to <span className="text-primary-600">Solve</span>
          </h1>
          <h1 className="block xl:hidden text-2xl xl:text-7xl font-serif">
            What we want to <span className="text-black">Solve</span>
          </h1>
          <h3 className="text-sm xl:text-xl font-light text-black xl:text-gray-500 pt-4 xl:pt-6">
            Defi is a pretty complex thing, and it is a live changing enviroment so you need to be
            learning everyday to be up to date, somthing that no everone has time for.
            <br />
            <br />
            Defi is a pretty complex thing, and it is a live changing enviroment so you need to be
            learning everyday to be up to date, somthing that no everone has time for.
          </h3>
        </div>
        <div className="hidden xl:block mt-14">
          <Link href="/app" passHref={true}>
            <Button>Enter App</Button>
          </Link>
        </div>
        <div className="xl:hidden block mt-4">
          <Link href="/app" passHref={true}>
            <Button size="sm">Enter App</Button>
          </Link>
        </div>
        <div className="xl:hidden absolute -right-10 -bottom-12 w-2/5">
          <img src="/assets/decoration.png" alt="solution" />
        </div>
      </div>
      <div className="hidden w-2/5 xl:w-full xl:flex justify-end items-center">
        <img src="/assets/solution.png" alt="solution" className="w-5/6" />
      </div>
    </div>
  );
};

export default Solution;
