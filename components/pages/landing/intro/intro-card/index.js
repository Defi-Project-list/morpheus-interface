const IntroCards = ({ title, description, img, alt }) => {
  return (
    <div className="w-full flex xl:flex-col items-center justify-center border rounded-md xl:border-0 p-2 xl:p-0">
      <img src={img} alt={alt} className="w-1/5 xl:w-full" />
      <div className="w-full flex flex-col items-baseline xl:items-center xl:justify-center pl-4 xl:pl-0">
        <h3 className="text-lg xl:text-3xl">{title}</h3>
        <p className="text-sm xl:text-base xl:mt-3 text-left xl:text-center font-light text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IntroCards;
