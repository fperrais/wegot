
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { useCurrentTheme } from '../../../themes/useCurrentTheme';


export const ThemeCss = ({ children }: { children: React.ReactNode }) => {
	const { theme } = useCurrentTheme();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
