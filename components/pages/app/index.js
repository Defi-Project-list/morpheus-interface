import { createContext, useState } from 'react'

import AppHeader from './components/app-header'
import DepositTab from './components/deposit-tab'
import WithdrawTab from './components/withdraw-tab'

import { DEPOSIT, WITHDRAW } from '@constants/index'

export const WalletContext = createContext()

const App = () => {
	const [screenState, setScreenState] = useState('deposit')
	const [accountData, setAccountData] = useState()
	console.log({ accountData })
	return (
		<WalletContext.Provider value={accountData || {}}>
			<main className='relative h-full w-full px-20'>
				<AppHeader
					screenState={screenState}
					setScreenState={setScreenState}
					setAccountData={setAccountData}
				/>
				{screenState === DEPOSIT && <DepositTab />}
				{screenState === WITHDRAW && <WithdrawTab />}
				<div
					style={{
						background:
							'radial-gradient(50% 50% at 50% 50%,#efefff 0,rgba(255,255,255,0) 100%)',
						width: '200vw',
						height: '200vh',
						transform: 'translate(-50vw, -100vh)',
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						zIndex: -1
					}}
				/>
			</main>
		</WalletContext.Provider>
	)
}

export default App
