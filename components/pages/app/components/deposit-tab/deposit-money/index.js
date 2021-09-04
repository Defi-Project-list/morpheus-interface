import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'

import DepositInput from './deposit-input'

import { useEthers } from '../../../config'
import { contractAddress } from '../../../config/addresses'

import { checkAllowance } from '../../../utils/checkAllowance'
import { convertToBigNum } from '../../../utils/convertBigNumber'
import DepositHeader from './deposit-header'
import { DEGENERATE, HIGH, LOW, SAFE } from '../../../../../../constants'

const fetchGas = () => axios.get(contractAddress.GAS_STATION)

const DepositMoney = ({ riskLevel }) => {
	const { providerAddress, tokenContract, vaultContract } = useEthers()
	const [deposit, setDeposit] = useState(0)
	const [APY, setAPY] = useState(0)
	const [withdraw, setWithdraw] = useState(0)
	const [acceptedAllowance, setAcceptedAllowance] = useState(false)

	const submitDeposit = async () => {
		const gasPrice = await fetchGas().then((r) => r.data?.standard * 1e9)
		const depositAmount = convertToBigNum(deposit)
		try {
			await vaultContract.deposit(depositAmount, {
				gasPrice,
				gasLimit: 500000
			})
		} catch (err) {
			console.log(err, 'error deposit')
		}
	}

	const submitWithdraw = async () => {
		const gasPrice = await fetchGas().then((r) => r.data?.standard * 1e9)
		const withdrawAmount = convertToBigNum(withdraw)
		try {
			await vaultContract.withdraw(withdrawAmount, {
				gasPrice
			})
		} catch (err) {
			console.log(err, 'error  withdrawing')
		}
	}

	const submitApprove = async () => {
		const gasPrice = await fetchGas().then((r) => r.data?.standard * 1e9)
		const depositAmount = convertToBigNum(deposit)
		try {
			const approveDeposit = await tokenContract.approve(
				contractAddress.DAI_SAVERS_VAULT,
				depositAmount,
				{ gasPrice }
			)
			await approveDeposit.wait()
			setAcceptedAllowance(
				await checkAllowance(providerAddress, tokenContract, deposit)
			)
		} catch (err) {
			console.log(err, 'error approving app')
		}
	}

	const handleAPY = (APY) => {
		if (APY === SAFE) return 0.1
		else if (APY === LOW) return 0.15
		else if (APY === HIGH) return 0.2
		else if (APY === DEGENERATE) return 0.3
		return null
	}

	useEffect(() => {
		;(async () => {
			setAcceptedAllowance(
				await checkAllowance(providerAddress, tokenContract, deposit)
			)
		})()
	}, [deposit])

	useEffect(() => {
		setAPY(handleAPY(riskLevel))
	}, [riskLevel])

	return (
		<div className='w-full flex justify-center items-center mt-20'>
			<div className='w-6/12'>
				<DepositHeader deposit={deposit} APY={APY} />
				<DepositInput
					acceptedAllowance={acceptedAllowance}
					deposit={deposit}
					withdraw={withdraw}
					submitDeposit={submitDeposit}
					submitWithdraw={submitWithdraw}
					submitApprove={submitApprove}
					setDeposit={setDeposit}
					setWithdraw={setWithdraw}
				/>
			</div>
		</div>
	)
}
export default DepositMoney
