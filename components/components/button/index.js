const Button = ({
	text,
	textColor = 'text-primary-500',
	size = 'medium',
	...props
}) => {
	const buttonSize = {
		small: 'text-sm',
		medium: 'text-lg px-2 py-1 font-semibold',
		large: 'text-base xl:text-2xl px-3 py-1',
	}[size];

	return (
		<>
			<button
				className={`border ${buttonSize} rounded-lg bg-primary-500 text-white border-primary-700 bg-transparent ${textColor} hover:bg-primary-100`}
				{...props}>
				{text}
			</button>
		</>
	);
};

export default Button;
