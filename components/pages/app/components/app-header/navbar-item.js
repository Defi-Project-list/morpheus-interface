const NavbarItem = ({ value, handleScreenState, screenState }) => {
	return (
		<button
			value={value}
			onClick={handleScreenState}
			className={`first-letter:capitalize w-1/2 z-10 px-2 rounded-lg py-1 ${
				screenState === value && 'bg-primary-100'
			}`}>
			{value}
		</button>
	);
};
export default NavbarItem;
