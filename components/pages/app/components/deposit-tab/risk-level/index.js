import { SAFE, LOW, HIGH, DEGENERATE } from '@constants/index';
import RiskButton from './risk-button';

const RiskLevel = ({ riskLevel, setRiskLevel }) => {
  const handleRiskLevel = (level) => {
    setRiskLevel(level);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-12 mb-12">
      <h1 className="text-4xl mb-8">Choose your Product</h1>
      <div className="w-full grid grid-cols-3 gap-8 px-40 w-10/12	mt-12">
        <RiskButton
          value={SAFE}
          handleRiskLevel={handleRiskLevel}
          riskLevel={riskLevel}
          imageSrc="/assets/shield.png"
          text="Safe"
          apy={5}
        />
        <RiskButton
          value={LOW}
          handleRiskLevel={handleRiskLevel}
          riskLevel={riskLevel}
          imageSrc="/assets/bank-note.png"
          text="Low Risk"
          apy={15}
        />
        <RiskButton
          value={HIGH}
          handleRiskLevel={handleRiskLevel}
          riskLevel={riskLevel}
          imageSrc="/assets/stack-notes.png"
          text="High Risk"
          apy={30}
        />
        <RiskButton
          value={DEGENERATE}
          handleRiskLevel={handleRiskLevel}
          riskLevel={riskLevel}
          imageSrc="/assets/diamond.png"
          text="Variable"
          apy={'>40'}
        />
        <RiskButton
          value={DEGENERATE}
          handleRiskLevel={handleRiskLevel}
          riskLevel={riskLevel}
          imageSrc="/assets/bag-coins.png"
          text="No Lose Lottery"
          apy={'10K'}
        />
      </div>
    </div>
  );
};

export default RiskLevel;
