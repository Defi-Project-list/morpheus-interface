import React, { useCallback, useEffect, useState } from 'react'
import Web3Modal from 'web3modal'
import { ethers, providers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'

import TokenArtifact from '../contracts/SaversToken.json'
import VaultArtifact from '../contracts/SaversVault.json'
import { contractAddress } from './addresses'
import { convertToNum } from '../utils/convertBigNumber'

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'

const providerOptions = {
	walletconnect: {
		package: WalletConnectProvider, // required
		options: {
			infuraId: INFURA_ID // required
		}
	},
	'custom-walletlink': {
		display: {
			logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
			name: 'Coinbase',
			description: 'Connect to Coinbase Wallet (not Coinbase App)'
		},
		options: {
			appName: 'Coinbase', // Your app name
			networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
			chainId: 1
		},
		package: WalletLink,
		connector: async (_, options) => {
			const { appName, networkUrl, chainId } = options
			const walletLink = new WalletLink({
				appName
			})
			const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
			await provider.enable()
			return provider
		}
	}
}

let web3Modal
if (typeof window !== 'undefined') {
	web3Modal = new Web3Modal({
		network: 'mainnet', // optional
		cacheProvider: false,
		providerOptions // required
	})
}

export const useEthers = () => {
	const [providerAddress, setProviderAddress] = useState()
	const [approvalEvents, setApprovalEvents] = useState()
	const [vaultContract, setVaultContract] = useState()
	const [tokenContract, setTokenContract] = useState()

	// Connects to the smart contract token id (check /contracts/contract-address.json)
	async function init() {
		try {
			const provider = await web3Modal.connect()
			const web3Provider = new providers.Web3Provider(provider)

			const signer = web3Provider.getSigner()
			const address = await signer.getAddress()

			const network = await web3Provider.getNetwork()

			const _vault_contract = new ethers.Contract(
				contractAddress.DAI_SAVERS_VAULT,
				VaultArtifact.abi,
				signer
			)

			const _token_contract = new ethers.Contract(
				contractAddress.DAI,
				TokenArtifact.abi,
				signer
			)

			setProviderAddress(address)
			setVaultContract(_vault_contract)
			setTokenContract(_token_contract)

			console.log({ signer, address, network })

			// Subscribe to accounts change
			provider.on('accountsChanged', (accounts) => {
				console.log('accountsChanged', accounts)
			})

			// Subscribe to chainId change
			provider.on('chainChanged', (chainId) => {
				console.log('chainChanged', chainId)
			})

			// Subscribe to networkId change
			provider.on('networkChanged', (networkId) => {
				console.log('networkChanged', networkId)
			})
		} catch (e) {
			console.log('Could not get a wallet connection', e)
			return
		}
	}

	function openModal() {
		init()
	}

	// const _initializeEthers = async () => {
	// 	// BEST PRACTICE PROVIDER
	// 	// The "any" network will allow spontaneous network changes
	// 	const _provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
	// 	_provider.on('network', (newNetwork, oldNetwork) => {
	// 		// When a Provider makes its initial connection, it emits a "network"
	// 		// event with a null oldNetwork along with the newNetwork. So, if the
	// 		// oldNetwork exists, it represents a changing network
	// 		if (oldNetwork) {
	// 			window.location.reload()
	// 		}
	// 	})

	// 	const network = await _provider.getNetwork()

	// 	if (network?.name !== 'matic') {
	// 		alert('Incompatibale network')
	// 	}

	// 	// console.log(await _provider.getSigner());

	// 	const userAddress = await _provider.getSigner().getAddress()
	// 	const userBalance = await _provider.getBalance(userAddress)
	// 	// const _approvalEvents = _token_contract.filters.Approval(null, userAddress);

	// 	setProviderAddress(userAddress)
	// 	setVaultContract(_vault_contract)
	// 	setTokenContract(_token_contract)
	// 	// setApprovalEvents(_approvalEvents);
	// }

	return { providerAddress, tokenContract, vaultContract, openModal }
}
