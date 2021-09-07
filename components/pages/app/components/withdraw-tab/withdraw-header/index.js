import { useContext, useEffect, useState } from 'react';
import { WalletContext } from '@components/pages/app';
import AccountBalance from './account-balance';

const MINUTE_MS = 10000;

const WithdrawHeader = () => {
  const [balance, setBalance] = useState(0);

  const { shares, contracts } = useContext(WalletContext);

  async function getSharePrice() {
    const sharePrice = await contracts.vault.getPricePerFullShare();
    const userBalance = (shares * sharePrice) / Math.pow(10, 36);
    setBalance(userBalance);
  }

  useEffect(() => {
    if (!shares) return null;
    const interval = setInterval(() => {
      getSharePrice();
    }, MINUTE_MS);
    getSharePrice();
    return () => clearInterval(interval);
  }, [shares]);

  return (
    <div className="w-6/12">
      <AccountBalance balance={balance} />
    </div>
  );
};

export default WithdrawHeader;
