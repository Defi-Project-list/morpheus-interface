import { SAFE, LOW, HIGH, DEGENERATE } from '@constants/index'
import RiskButton from './risk-button'

const RiskLevel = ({ riskLevel, setRiskLevel }) => {
	const handleRiskLevel = (level) => {
		setRiskLevel(level)
	}

	return (
		<div className='w-full flex flex-col justify-center items-center mt-2 mb-12'>
			<h1 className='text-2xl mb-8'>Choose your level of risk</h1>
			<div className='w-full grid grid-cols-4 gap-x-16 px-56'>
				<RiskButton
					value={SAFE}
					handleRiskLevel={handleRiskLevel}
					riskLevel={riskLevel}
					imageSrc='/assets/pig-bank.png'
					text='Safe'
					apy={10}
				/>
				<RiskButton
					value={LOW}
					handleRiskLevel={handleRiskLevel}
					riskLevel={riskLevel}
					imageSrc='/assets/bank-note.png'
					text='Low Risk'
					apy={20}
				/>
				<RiskButton
					value={HIGH}
					handleRiskLevel={handleRiskLevel}
					riskLevel={riskLevel}
					imageSrc='/assets/stack-notes.png'
					text='High Risk'
					apy={30}
				/>
				<RiskButton
					value={DEGENERATE}
					handleRiskLevel={handleRiskLevel}
					riskLevel={riskLevel}
					imageSrc='/assets/diamond.png'
					text='Degenerate'
					apy={40}
				/>
			</div>
		</div>
	)
}

export default RiskLevel
