import React, { useCallback, useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers, providers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';

import TokenArtifact from '../contracts/SaversToken.json';
import VaultArtifact from '../contracts/SaversVault.json';
import { contractAddress } from './addresses';
import { convertToNum } from '../utils/convertBigNumber';
import ERC20ABI from '../contracts/ERC20.json';

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';

const WRONG_NETWORK = 'wrong network';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

export const useEthers = (callback) => {
  const [wallet, setWallet] = useState({});
  const [initialProvider, setInitialProvider] = useState();
  const [error, setError] = useState();

  async function getWalletInfo(provider) {
    const web3Provider = new providers.Web3Provider(provider);
    const network = await web3Provider.getNetwork();
    if (network?.name !== 'matic') {
      setError(WRONG_NETWORK);
      return null;
    }
    const signer = await web3Provider.getSigner();
    const address = await signer.getAddress();
    const balance = await web3Provider.getBalance(address);
    const contracts = await getContracts(signer);
    const shares = await contracts.sDAI.balanceOf(address);
    const sharePrice = await contracts.vault.getPricePerFullShare();
    setWallet({ address, balance, signer, contracts, shares, sharePrice });
    return signer;
  }

  async function getProvider() {
    if (typeof window == 'undefined') return {};

    const web3Modal = new Web3Modal({
      network: 'matic', // optional
      cacheProvider: true,
      providerOptions, // required
    });

    const provider = await web3Modal.connect();
    const signer = await getWalletInfo(provider);

    return { provider, signer };
  }

  function getContracts(signer) {
    if (!signer) return null;
    const vault = new ethers.Contract(contractAddress.DAI_VAULT, VaultArtifact.abi, signer);

    const token = new ethers.Contract(contractAddress.DAI, TokenArtifact.abi, signer);

    const DAI = new ethers.Contract(contractAddress.DAI, ERC20ABI, signer);

    const sDAI = new ethers.Contract(contractAddress.SAVERS_DAI, ERC20ABI, signer);

    return { vault, token, DAI, sDAI };
  }

  function listenProviderEvents(provider) {
    if (!provider) return;
    provider.on('accountsChanged', (accounts) => {
      getWalletInfo(provider);
      console.log('accountsChanged', accounts);
    });

    // Subscribe to chainId change
    provider.on('chainChanged', (chainId) => {
      console.log('chainChanged', chainId);
    });

    // Subscribe to networkId change
    provider.on('networkChanged', async (networkId) => {
      const web3Provider = new providers.Web3Provider(provider);
      const network = await web3Provider.getNetwork();
      if (network?.name !== 'matic') {
        setError(WRONG_NETWORK);
      } else {
        setError(null);
      }
    });
  }

  async function init() {
    try {
      const { provider, error } = await getProvider();
      if (error) {
        setError(error);
        return null;
      }
      listenProviderEvents(provider);
      setInitialProvider(provider);
    } catch (e) {
      console.error('Could not get a wallet connection', e);
      return;
    }
  }

  function openModal() {
    init();
  }

  useEffect(() => {
    callback && callback({ ...wallet, updateAccountData });
  }, [wallet.address, wallet.shares]);

  function updateAccountData() {
    getProvider();
  }
  return {
    providerAddress: wallet?.address,
    openModal,
    error,
    updateAccountData,
    ...wallet,
  };
};
