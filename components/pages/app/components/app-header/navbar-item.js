const NavbarItem = ({ value, handleScreenState, screenState }) => {
	return (
		<button
			value={value}
			onClick={handleScreenState}
			className={`first-letter:capitalize w-1/2 px-2 rounded-lg py-1  ${
				screenState === value
					? 'bg-primary-200 text-white'
					: 'text-primary-400 hover:text-primary-500'
			}`}>
			{value}
		</button>
	)
}
export default NavbarItem
