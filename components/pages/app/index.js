import { useState } from 'react';

import AppHeader from './components/app-header';
import DepositTab from './components/deposit-tab';
import WithdrawTab from './components/withdraw-tab';

import { DEPOSIT, WITHDRAW } from '@constants/index';

const App = () => {
	const [screenState, setScreenState] = useState('deposit');

	return (
		<main className='relative h-full w-full px-20'>
			<AppHeader screenState={screenState} setScreenState={setScreenState} />
			{screenState === DEPOSIT && <DepositTab />}
			{screenState === WITHDRAW && <WithdrawTab />}
		</main>
	);
};

export default App;
