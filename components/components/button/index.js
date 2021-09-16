const Button = ({ text, textColor = 'text-white', size = 'medium', ...props }) => {
  const buttonSize = {
    small: 'text-sm px-2 py-1',
    medium: 'text-lg px-2 py-1 font-semibold',
    large: 'text-base xl:text-2xl px-3 py-1',
  }[size];

  return (
    <>
      <button
        className={`border ${buttonSize} rounded-lg bg-primary-500 border-primary-700 ${textColor} `}
        {...props}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
