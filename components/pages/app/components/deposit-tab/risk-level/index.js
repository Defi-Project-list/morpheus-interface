import { SAFE, LOW, HIGH, DEGENERATE } from '@constants/index';
import RiskButton from './risk-button';

const RiskLevel = ({ riskLevel, setRiskLevel }) => {
	const handleRiskLevel = (level) => {
		setRiskLevel(level);
	};

	return (
		<div className='w-full flex flex-col justify-center items-center mt-2 mb-12'>
			<h1 className='text-2xl mb-8'>Choose your level of risk</h1>
			<div className='w-full grid grid-cols-4 gap-x-16 px-56'>
				<RiskButton
					value={SAFE}
					handleRiskLevel={handleRiskLevel}
					riskLevel={riskLevel}
					text='Safe'
				/>
				<RiskButton
					value={LOW}
					handleRiskLevel={handleRiskLevel}
					riskLevel={riskLevel}
					text='Low Risk'
				/>
				<RiskButton
					value={HIGH}
					handleRiskLevel={handleRiskLevel}
					riskLevel={riskLevel}
					text='High Risk'
				/>
				<RiskButton
					value={DEGENERATE}
					handleRiskLevel={handleRiskLevel}
					riskLevel={riskLevel}
					text='Degenerate'
				/>
			</div>
		</div>
	);
};

export default RiskLevel;
