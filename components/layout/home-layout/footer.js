import Link from 'next/link';

const classNameItem =
  'w-min cursor-pointer text-sm xl:text-base py-1 my-1 xl:my-2 border-b-2 border-transparent hover:border-primary-500 whitespace-nowrap';

export const Footer = () => {
  return (
    <footer className="w- flex flex-col xl:flex-row items-start xl:items-start justify-center w-full px-8 xl:px-36 py-10 xl:py-16  bg-black">
      <div className="w-full xl:w-2/6 h-full flex flex-col justify-start items-baseline">
        <h1 className="xl:mt-4 text-xl xl:text-3xl font-bold text-primary-500 font-gugi tracking-wide">
          Epsilon
        </h1>
        <div className="text-white">
          <p className="mt-2 xl:mt-4 text-sm xl:text-base font-serif">© Epsilon Labs, Inc 2021</p>
        </div>
      </div>
      <div className="w-full xl:w-4/6 grid grid-cols-2  xl:grid-cols-3 gap-y-10 gap-x-10 xl:gap-x-20 mt-10 xl:mt-0">
        <div>
          <h4 className="text-lg font-medium mb-4 text-primary-500">Pages</h4>
          <div className="w-full xl:w-4/6 flex flex-col text-white ">
            <p className={classNameItem}>
              <Link href="/">Home</Link>
            </p>
            <p className={classNameItem}>
              <Link href="/app">App</Link>
            </p>
            <p className={classNameItem}>
              <Link href="/">How it works</Link>
            </p>
            <p className={classNameItem}>
              <Link href="/">Why use it</Link>
            </p>
            <p className={classNameItem}>
              <Link href="/">About us</Link>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4 text-primary-500">Docs</h4>
          <div className="w-full xl:w-4/6 flex flex-col text-white">
            <p className={classNameItem}>
              <Link href="/">Documentation</Link>
            </p>
            <p className={classNameItem}>
              <Link href="/">Terms</Link>
            </p>
            <p className={classNameItem}>
              <Link href="/">Privacy</Link>
            </p>
          </div>
        </div>
        <div className="hidden xl:block">
          <h4 className="text-lg font-medium mb-4 text-primary-500">Social</h4>
          <div className="w-full flex flex-col h-full text-white">
            <p className={classNameItem}>
              <Link href="/">Twitter</Link>
            </p>
            <p className={classNameItem}>
              <Link href="/">Linkedin</Link>
            </p>
            <p className={classNameItem}>
              <Link href="/">Blog</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
