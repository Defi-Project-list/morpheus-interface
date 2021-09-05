import { contractAddress } from '../config/addresses'
import { convertToBigNum } from './convertBigNumber'

export const checkAllowance = async (spender, _contract, deposit) => {
	if (!_contract || !spender) return
	const allowance = await _contract.allowance(
		spender,
		contractAddress.DAI_VAULT
	)
	console.log({ allowance })
	const depositBigNumber = convertToBigNum(deposit | 0)

	return depositBigNumber.eq(allowance)
}
