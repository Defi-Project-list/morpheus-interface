const RiskButton = ({ riskLevel, value, handleRiskLevel, text }) => {
	return (
		<button
			onClick={() => handleRiskLevel(value)}
			className={`flex flex-col justify-center items-center border h-32 rounded-2xl ${
				riskLevel === value && 'shadow-xl border-primary-500'
			}`}>
			{text}
		</button>
	);
};

export default RiskButton;
