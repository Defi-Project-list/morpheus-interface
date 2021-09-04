import { ethers } from 'ethers';

export const convertToBigNum = (_num) => {
	return ethers.BigNumber.from(_num).mul(ethers.constants.WeiPerEther);
};

export const convertToNum = (_num) => {
	return _num.div(ethers.constants.WeiPerEther).toNumber();
};
