import { DEPOSIT, WITHDRAW, WALLET, SETTINGS } from '@constants/index'
import AddressHeader from './address-header'
import NavbarItem from './navbar-item'
import { PlanetIcon } from '@assets/icons'

const AppHeader = ({ screenState, setScreenState }) => {
	const handleScreenState = (e) => {
		setScreenState(e.target.value)
	}

	return (
		<div className='w-full flex justify-between items-center h-32'>
			<div className='w-1/3'>
				<PlanetIcon w='35px' />
			</div>
			<div className='relative w-1/3 border rounded-xl flex justify-between items-center px-1 py-1 text-lg shadow-sm'>
				{[DEPOSIT, WITHDRAW, WALLET, SETTINGS].map((value, index) => (
					<NavbarItem
						key={index}
						value={value}
						handleScreenState={handleScreenState}
						screenState={screenState}
					/>
				))}
			</div>
			<AddressHeader />
		</div>
	)
}

export default AppHeader
