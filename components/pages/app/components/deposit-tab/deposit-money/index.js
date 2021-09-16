import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { CloseIcon } from '@assets/icons';
import { WalletContext } from '@components/pages/app';

import DepositInput from './deposit-input';
import DepositHeader from './deposit-header';

import { contractAddress } from '../../../config/addresses';
import { checkAllowance } from '../../../utils/checkAllowance';
import { convertToBigNum } from '../../../utils/convertBigNumber';
import { DEGENERATE, HIGH, LOW, SAFE } from '../../../../../../constants';

const fetchGas = () => axios.get(contractAddress.GAS_STATION);

const getProductInfo = (productKey) => {
  const product = {
    [SAFE]: {
      title: 'Savings Account',
      risLevel: 'low',
      description: 'something here',
      apy: 0.05,
    },
    [LOW]: {
      title: 'Savings Account',
      risLevel: 'low',
      description: 'something here',
      apy: 0.2,
    },
    [HIGH]: {
      title: 'Savings Account',
      risLevel: 'low',
      description: 'something here',
      apy: 0.3,
    },
    [DEGENERATE]: {
      title: 'Savings Account',
      risLevel: 'low',
      description: 'something here',
      apy: 0.7,
    },
  }[productKey];
  return product;
};

const DepositMoney = ({ riskLevel, setOpen }) => {
  const { contracts, address, updateAccountData } = useContext(WalletContext);
  const [deposit, setDeposit] = useState(1000);
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
      // const approveDeposit = await contracts.DAI.approve(contractAddress.DAI_VAULT, depositAmount, {
      //   gasPrice,
      // });
      // setApproveOpen(true);
      // await approveDeposit.wait();
      // const isAmountAllowed = await checkAllowance(address, contracts.DAI, deposit);
      // setAcceptedAllowance(isAmountAllowed);
      setTimeout(() => {
        setApproveStatus({ success: true });
      }, 10000);
      // setApproveStatus({ success: true });
    } catch (err) {
      console.error(err, 'error approving app');
      setApproveStatus({ error: true });
    }
  };

  async function allowance() {
    const isAllowanceApproved = await checkAllowance(address, contracts?.DAI, deposit);
    setAcceptedAllowance(isAllowanceApproved);
  }

  useEffect(() => {
    allowance();
  }, [deposit]);

  useEffect(() => {
    setAPY(getProductInfo(riskLevel)?.apy);
  }, [riskLevel]);

  console.log({ approveStatus });

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
      <h1 className="text-black-100 text-5xl capitalize font-bold pt-8 ">{riskLevel}</h1>
      <div className="">
        <DepositHeader
          deposit={deposit}
          APY={APY}
          riskLevel={riskLevel}
          approveStatus={approveStatus}
        />
        <DepositInput
          acceptedAllowance={acceptedAllowance}
          deposit={deposit}
          submitDeposit={submitDeposit}
          submitApprove={submitApprove}
          setDeposit={setDeposit}
          depositStatus={depositStatus}
          approveStatus={approveStatus}
        />
      </div>
      {/* <DepositModal open={openDeposit} setOpen={setDepositOpen} status={depositStatus} />
      <ApproveModal open={openApprove} setOpen={setApproveOpen} status={approveStatus} /> */}
    </div>
  );
};
export default DepositMoney;
