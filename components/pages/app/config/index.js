import React, { useCallback, useEffect, useState } from 'react';

import { ethers } from 'ethers';

import TokenArtifact from '../contracts/SaversToken.json';
import VaultArtifact from '../contracts/SaversVault.json';
import { contractAddress } from './addresses';
import { convertToNum } from '../utils/convertBigNumber';

export const useEthers = () => {
	const [providerAddress, setProviderAddress] = useState();
	const [approvalEvents, setApprovalEvents] = useState();
	const [vaultContract, setVaultContract] = useState();
	const [tokenContract, setTokenContract] = useState();
	// Connects to the smart contract token id (check /contracts/contract-address.json)
	async function init() {
		const [selectedAddress] = await window.ethereum.enable();
		await _initializeEthers(selectedAddress);
	}

	useEffect(() => {
		// When the page loads it will initialize the init function
		// that we need to connect the frontend with the smartContract
		init();
	}, []);

	const _initializeEthers = async () => {
		// BEST PRACTICE PROVIDER
		// The "any" network will allow spontaneous network changes
		const _provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
		_provider.on('network', (newNetwork, oldNetwork) => {
			// When a Provider makes its initial connection, it emits a "network"
			// event with a null oldNetwork along with the newNetwork. So, if the
			// oldNetwork exists, it represents a changing network
			if (oldNetwork) {
				window.location.reload();
			}
		});

		const network = await _provider.getNetwork();

		if (network?.name !== 'matic') {
			alert('Incompatibale network');
		}

		const _vault_contract = new ethers.Contract(
			contractAddress.DAI_SAVERS_VAULT,
			VaultArtifact.abi,
			_provider.getSigner()
		);

		const _token_contract = new ethers.Contract(
			contractAddress.DAI,
			TokenArtifact.abi,
			_provider.getSigner()
		);

		// console.log(await _provider.getSigner());

		const userAddress = await _provider.getSigner().getAddress();
		const userBalance = await _provider.getBalance(userAddress);
		console.log(convertToNum(userBalance));
		// const _approvalEvents = _token_contract.filters.Approval(null, userAddress);

		setProviderAddress(userAddress);
		setVaultContract(_vault_contract);
		setTokenContract(_token_contract);
		// setApprovalEvents(_approvalEvents);
	};

	return { providerAddress, tokenContract, vaultContract };
};
