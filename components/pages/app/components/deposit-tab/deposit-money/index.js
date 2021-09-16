import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import DepositInput from './deposit-input';

import { contractAddress } from '../../../config/addresses';

import { checkAllowance } from '../../../utils/checkAllowance';
import { convertToBigNum } from '../../../utils/convertBigNumber';
import DepositHeader from './deposit-header';
import { DEGENERATE, HIGH, LOW, SAFE } from '../../../../../../constants';
import { WalletContext } from '@components/pages/app';
import DepositModal, { ApproveModal } from './deposit-modal';
import { CloseIcon } from '@assets/icons';

const fetchGas = () => axios.get(contractAddress.GAS_STATION);

const DepositMoney = ({ riskLevel, setOpen }) => {
  const { contracts, address, updateAccountData } = useContext(WalletContext);
  const [deposit, setDeposit] = useState(0);
  const [APY, setAPY] = useState(0);
  const [acceptedAllowance, setAcceptedAllowance] = useState(false);
  const [depositStatus, setDepositStatus] = useState();
  const [openDeposit, setDepositOpen] = useState(false);
  const [approveStatus, setApproveStatus] = useState();
  const [openApprove, setApproveOpen] = useState(false);

  const submitDeposit = async () => {
    setDepositStatus({ loading: true });
    const gasPrice = await fetchGas().then((r) => r.data?.standard * 1e9);
    const depositAmount = convertToBigNum(deposit);
    try {
      const tx = await contracts.vault.deposit(depositAmount, {
        gasPrice,
      });
      setDepositOpen(true);
      const deposit = await tx.wait();
      setDepositStatus({ success: true });
      updateAccountData();
    } catch (err) {
      setDepositStatus({ error: true });
      console.error(err, 'error deposit');
    }
  };

  const submitApprove = async () => {
    setApproveStatus({ loading: true });
    const gasPrice = await fetchGas().then((r) => r.data?.standard * 1e9);
    const depositAmount = convertToBigNum(deposit);
    try {
      const approveDeposit = await contracts.DAI.approve(contractAddress.DAI_VAULT, depositAmount, {
        gasPrice,
      });
      setApproveOpen(true);
      await approveDeposit.wait();
      const isAmountAllowed = await checkAllowance(address, contracts.DAI, deposit);
      setAcceptedAllowance(isAmountAllowed);
      setApproveStatus({ success: true });
    } catch (err) {
      console.error(err, 'error approving app');
      setApproveStatus({ error: true });
    }
  };

  const handleAPY = (APY) => {
    if (APY === SAFE) return 0.05;
    else if (APY === LOW) return 0.1;
    else if (APY === HIGH) return 0.2;
    else if (APY === DEGENERATE) return 0.3;
    return null;
  };

  async function allowance() {
    const isAllowanceApproved = await checkAllowance(address, contracts?.DAI, deposit);
    setAcceptedAllowance(isAllowanceApproved);
  }

  useEffect(() => {
    allowance();
  }, [deposit]);

  useEffect(() => {
    setAPY(handleAPY(riskLevel));
  }, [riskLevel]);

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="pb-4 border-b border-primary-100 w-full flex items-center justify-between">
        <h2 className="text-black-100 text-lg capitalize font-bold">Invest funds</h2>
        <button
          className="cursor-pointer hover:bg-black-400 p-1 rounded"
          onClick={() => setOpen(false)}
        >
          <CloseIcon color="white" w="16px" />
        </button>
      </div>
      <h1 className="text-black-100 text-5xl capitalize font-bold py-6">{riskLevel}</h1>
      <div className="">
        <DepositHeader deposit={deposit} APY={APY} />
        <DepositInput
          acceptedAllowance={acceptedAllowance}
          deposit={deposit}
          submitDeposit={submitDeposit}
          submitApprove={submitApprove}
          setDeposit={setDeposit}
          depositStatus={depositStatus}
        />
      </div>
      {/* <DepositModal open={openDeposit} setOpen={setDepositOpen} status={depositStatus} />
      <ApproveModal open={openApprove} setOpen={setApproveOpen} status={approveStatus} /> */}
    </div>
  );
};
export default DepositMoney;
