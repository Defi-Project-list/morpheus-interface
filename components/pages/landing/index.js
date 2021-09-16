import Hero from './hero';
import Intro from './intro';
import Works from './works';
import Calculator from './calculator';
import Solution from './solution';
import Cards from './cards';

const HomeIndex = () => {
  return (
    <div className="px-10 xl:px-36 font-sans">
      <Hero />
      <Intro />
      <Works />
      <Calculator />
      <Solution />
      <Cards />
    </div>
  );
};

export default HomeIndex;
