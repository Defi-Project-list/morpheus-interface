import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col xl:flex-row items-start xl:items-start justify-center w-full px-10 xl:px-36 py-10 xl:py-16  bg-black">
      <div className="w-full xl:w-2/6 h-full flex xl:flex-col justify-start items-baseline">
        <h1 className="xl:mt-4 text-xl xl:text-3xl font-bold text-primary-500 font-gugi tracking-wide">
          Epsilon
        </h1>
        <div className="hidden xl:block text-white">
          <p className="mt-4 font-serif">© Epsilon Labs, Inc 2021</p>
        </div>
      </div>
      <div className="w-full xl:w-4/6 grid grid-cols-2  xl:grid-cols-3 gap-y-10 gap-x-10 xl:gap-x-20 h-full mt-10 xl:mt-0">
        <div>
          <h4 className="text-lg font-medium mb-4 text-primary-500">Pages</h4>
          <div className="w-4/6 grid grid-cols-1 grid-rows-6 h-full text-white">
            <Link href="/" className="cursor-pointer hover:underline">
              Home
            </Link>
            <Link href="/app" className="cursor-pointer hover:underline">
              App
            </Link>
            <Link href="/" className="cursor-pointer hover:underline">
              How it works
            </Link>
            <Link href="/" className="cursor-pointer hover:underline">
              Why to use it
            </Link>
            <Link href="/" className="cursor-pointer hover:underline">
              About us
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4 text-primary-500">Docs</h4>
          <div className="w-4/6 grid grid-cols-1 grid-rows-6 h-full text-white">
            <Link href="/" className="cursor-pointer hover:underline">
              Documentation
            </Link>
            <Link href="/" className="cursor-pointer hover:underline">
              Terms
            </Link>
            <Link href="/" className="cursor-pointer hover:underline">
              Privacy
            </Link>
          </div>
        </div>
        <div className="hidden xl:block">
          <h4 className="text-lg font-medium mb-4 text-primary-500">Social</h4>
          <div className="w-4/6 grid grid-cols-1 grid-rows-6 h-full text-white">
            <Link href="/" className="cursor-pointer hover:underline">
              Twitter
            </Link>
            <Link href="/" className="cursor-pointer hover:underline">
              Linkedin
            </Link>
            <Link href="/" className="cursor-pointer hover:underline">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
