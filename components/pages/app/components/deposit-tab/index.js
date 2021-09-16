import { useState } from 'react';

import RiskLevel from './risk-level';
import DepositMoney from './deposit-money';

const DepositTab = () => {
  const [riskLevel, setRiskLevel] = useState('safe');

  return (
    <>
      <RiskLevel riskLevel={riskLevel} setRiskLevel={setRiskLevel} />
      {/* <DepositMoney riskLevel={riskLevel} /> */}
    </>
  );
};

export default DepositTab;
