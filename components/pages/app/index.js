import { useState } from 'react'

import AppHeader from './components/app-header'
import DepositTab from './components/deposit-tab'
import WithdrawTab from './components/withdraw-tab'

import { DEPOSIT, WITHDRAW } from '@constants/index'

const App = () => {
	const [screenState, setScreenState] = useState('deposit')

	return (
		<main className='relative h-full w-full px-20'>
			<AppHeader screenState={screenState} setScreenState={setScreenState} />
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
	)
}

export default App
