import { contractAddress } from '../config/addresses';
import { convertToBigNum } from './convertBigNumber';

export const checkAllowance = async (provider, _contract, deposit) => {
	if (!_contract || !provider) return;
	const allownace = await _contract.allowance(
		provider,
		contractAddress.DAI_SAVERS_VAULT
	);

	const depositBigNumber = convertToBigNum(deposit | 0);

	return depositBigNumber.eq(allownace);
};
