import { useContext, useEffect, useState } from 'react'
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
import { WalletContext } from '@components/pages/app'

const fetchGas = () => axios.get(contractAddress.GAS_STATION)

const DepositMoney = ({ riskLevel }) => {
	const { contracts, address } = useContext(WalletContext)

	const [deposit, setDeposit] = useState(0)
	const [APY, setAPY] = useState(0)
	const [withdraw, setWithdraw] = useState(0)
	const [acceptedAllowance, setAcceptedAllowance] = useState(false)

	const submitDeposit = async () => {
		const gasPrice = await fetchGas().then((r) => r.data?.standard * 1e9)
		const depositAmount = convertToBigNum(deposit)
		try {
			await contracts.vault.deposit(depositAmount, {
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
			await contracts.vault.withdraw(withdrawAmount, {
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
			console.log({ depositAmount, contracts })
			const approveDeposit = await contracts.DAI.approve(
				contractAddress.DAI_VAULT,
				depositAmount,
				{ gasPrice }
			)
			await approveDeposit.wait()
			setAcceptedAllowance(
				await checkAllowance(address, contracts.DAI, deposit)
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

	async function allowance() {
		const isAllowanceApproved = await checkAllowance(
			address,
			contracts?.DAI,
			deposit
		)
		console.log(isAllowanceApproved)
		setAcceptedAllowance(isAllowanceApproved)
	}

	useEffect(() => {
		allowance()
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
