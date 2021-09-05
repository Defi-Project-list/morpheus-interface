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

const WRONG_NETWORK = 'wrong network'

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

export const useEthers = () => {
	const [wallet, setWallet] = useState({})
	const [approvalEvents, setApprovalEvents] = useState()
	const [error, setError] = useState()
	const [vaultContract, setVaultContract] = useState()
	const [tokenContract, setTokenContract] = useState()

	async function getWalletInfo(provider) {
		const web3Provider = new providers.Web3Provider(provider)
		const network = await web3Provider.getNetwork()
		if (network?.name !== 'matic') {
			setError(WRONG_NETWORK)
			return null
		}
		const signer = await web3Provider.getSigner()
		const address = await signer.getAddress()
		const balance = await web3Provider.getBalance(address)
		setWallet({ address, balance })
		return signer
	}

	async function getProvider() {
		if (typeof window == 'undefined') return {}

		const web3Modal = new Web3Modal({
			network: 'matic', // optional
			cacheProvider: true,
			providerOptions // required
		})

		const provider = await web3Modal.connect()
		const signer = await getWalletInfo(provider)
		return { provider, signer }
	}

	function getContracts(signer) {
		console.log({ signer })
		if (!signer) return null
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

		setVaultContract(_vault_contract)
		setTokenContract(_token_contract)
	}

	function listenProviderEvents(provider) {
		if (!provider) return
		provider.on('accountsChanged', (accounts) => {
			getWalletInfo(provider)
			console.log('accountsChanged', accounts)
		})

		// Subscribe to chainId change
		provider.on('chainChanged', (chainId) => {
			console.log('chainChanged', chainId)
		})

		// Subscribe to networkId change
		provider.on('networkChanged', async (networkId) => {
			const web3Provider = new providers.Web3Provider(provider)
			const network = await web3Provider.getNetwork()
			if (network?.name !== 'matic') {
				setError(WRONG_NETWORK)
			} else {
				setError(null)
			}
		})
	}

	async function init() {
		try {
			const { provider, signer, error } = await getProvider()
			if (error) {
				setError(error)
				return null
			}
			await getContracts(signer)
			listenProviderEvents(provider)
		} catch (e) {
			console.log('Could not get a wallet connection', e)
			return
		}
	}

	function openModal() {
		init()
	}

	return {
		providerAddress: wallet?.address,
		tokenContract,
		vaultContract,
		openModal,
		error
	}
}
