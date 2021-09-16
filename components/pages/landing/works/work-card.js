const WorkCard = ({ number, title, description }) => {
  return (
    <div className={`${!number && 'hidden xl:flex'} flex-col items-start justify-center`}>
      <h3 className="text-base xl:text-xl font-semibold text-primary-600">{number}</h3>
      <h3 className="text-lg xl:text-3xl">{title}</h3>
      <p className="text-sm xl:text-base mt-1 xl:mt-3 text-start font-light text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default WorkCard;
