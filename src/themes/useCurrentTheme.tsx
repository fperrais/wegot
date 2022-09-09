import { ThemeOptions, Theme, createTheme } from '@mui/material';

import { useThemeContext } from '../services/contexts/theme/useThemeContext';
import { defaultColor, IColor } from './IColor';

const setTheme = (mode: 'light' | 'dark'): ThemeOptions => {
	const extendColor = defaultColor as IColor;

	return {
		palette: {
			primary: extendColor.primary,
			secondary: extendColor.secondary,
			tonalOffset: 0.1,
			mode,
		},
		components: {
			MuiCardHeader: {
				styleOverrides: {
					action: {
						marginTop: 0,
					},
				},
			},
		},
	};
};

const mainTheme = (theme: ThemeOptions): Theme => createTheme({
	...theme,
});

export const lightTheme = () => mainTheme(setTheme(
	'light',
));

export const darkTheme = () => mainTheme(setTheme(
	'dark',
));

export const useCurrentTheme = () => {
	const { theme } = useThemeContext();

	return {
		theme: theme.darkMode
			? darkTheme()
			: lightTheme(),
		darkMode: theme.darkMode,
	};
};
