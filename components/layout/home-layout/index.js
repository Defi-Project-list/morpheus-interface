import { Footer } from './footer';
import { Header } from './header';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col items-center justify-start xl:justify-center min-h-screen'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
