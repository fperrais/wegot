import { ToastContainer } from 'react-toastify';

import { LoaderProvider } from '../services/contexts/loader/LoaderProvider';
import { ThemeProvider } from '../services/contexts/theme/ThemeProvider';


interface IProvidersProps {
	children: JSX.Element,
}

export const Providers = ({ children }: IProvidersProps) => (
	<ThemeProvider>
		<LoaderProvider>
			<ToastContainer />
			{children}
		</LoaderProvider>
	</ThemeProvider>
);
