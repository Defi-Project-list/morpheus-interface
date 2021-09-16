import { useState } from 'react';

import RiskLevel from './risk-level';
import { InvestModal } from './deposit-money/invest-modal';

const DepositTab = () => {
  const [riskLevel, setRiskLevel] = useState(null);

  return (
    <>
      <RiskLevel riskLevel={riskLevel} setRiskLevel={setRiskLevel} />

      <InvestModal open={!!riskLevel} setOpen={setRiskLevel} investmentRisk={riskLevel} />
    </>
  );
};

export default DepositTab;
