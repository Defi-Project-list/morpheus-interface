import { Footer } from './footer';
import { Header } from './header';

const AppLayout = ({ children }) => {
	return (
		<div className='flex flex-col items-center justify-start min-h-screen'>
			{/* <Header /> */}
			{children}
			{/* <Footer /> */}
		</div>
	);
};

export default AppLayout;
