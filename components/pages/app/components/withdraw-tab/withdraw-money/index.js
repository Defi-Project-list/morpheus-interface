import NumberFormat from 'react-number-format';
import { Button } from '../../deposit-tab/deposit-money/deposit-input';
import { convertToBigNum } from '../../../utils/convertBigNumber';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { contractAddress } from '@components/pages/app/config/addresses';
import { WalletContext } from '@components/pages/app';
import DepositModal from '../../deposit-tab/deposit-money/deposit-modal';
import { ButtonSpinner } from '@components/components/spinner';

const fetchGas = () => axios.get(contractAddress.GAS_STATION);

const WithdrawMoney = () => {
  const { contracts, shares } = useContext(WalletContext);
  const [withdrawStatus, setWithdrawStatus] = useState();
  const [open, setOpen] = useState(false);

  const formattedShares = shares / Math.pow(10, 18);

  const [withdraw, setWithdraw] = useState(0);
  const handleWithdraw = (values) => {
    const { value } = values;
    setWithdraw(value);
  };
  const withdrawAmount = async () => {
    setWithdrawStatus({ loading: true });
    const gasPrice = await fetchGas().then((r) => r.data?.standard * 1e9);
    const withdrawAmount = convertToBigNum(withdraw);
    try {
      const tx = await contracts.vault.withdraw(withdrawAmount, {
        gasPrice,
      });
      setOpen(true);
      await tx.wait();
      setWithdrawStatus({ success: true });
    } catch (err) {
      setWithdrawStatus({ error: true });
      console.error(err, 'error deposit');
    }
  };

  return (
    <>
      <div className="w-1/3">
        <div>
          <span className="text-primary-400">
            You have: <span className="text-primary-500">{formattedShares?.toString()}</span> shares
          </span>
          <div className="flex mb-8 ">
            <NumberFormat
              value={withdraw}
              onValueChange={handleWithdraw}
              thousandSeparator={true}
              inputMode="numeric"
              className="w-full border-t border-l border-b border-gray-200 pt-2 pb-2 rounded-t-lg rounded-l-lg rounded-b-lg rounded-r-none text-2xl text-right pr-4"
            />
            <div
              className="py-1 px-3 rounded-t-lg rounded-r-lg rounded-b-lg rounded-l-none text-xl bg-primary-100 flex items-center"
              style={{ width: '100px' }}
            >
              <span className="ml-1">mDAI</span>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Button onClick={withdrawAmount}>
              {withdrawStatus?.loading ? <ButtonSpinner /> : 'Withdraw Amount'}
            </Button>
          </div>
        </div>
      </div>
      <DepositModal open={open} setOpen={setOpen} status={withdrawStatus} />
    </>
  );
};

export default WithdrawMoney;
