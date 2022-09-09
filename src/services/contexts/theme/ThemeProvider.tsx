import { useCallback, useMemo, useState } from 'react';

import { defaultTheme, ITheme } from '../../../themes/ITheme';
import { LocalStorageUtility } from '../../../tools/localStorageUtility';
import { ThemeContext } from './ThemeContext';
import { ThemeCss } from './ThemeCss';

export const localStorageThemeKey = 'theme';

interface IThemeProviderProps {
	children: React.ReactNode,
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
	const loadTheme = useCallback((): ITheme => {
		const theme = LocalStorageUtility.getValue(localStorageThemeKey);

		if (theme) {
			return {
				...defaultTheme,
				...theme,
			};
		}

		LocalStorageUtility.setValue(localStorageThemeKey, defaultTheme);

		return defaultTheme;
	}, []);

	const [themeState, setThemeState] = useState<ITheme>(loadTheme());

	const setTheme = useCallback((theme: Partial<ITheme>) => {
		LocalStorageUtility.setValue(localStorageThemeKey, theme);
		setThemeState({
			...themeState,
			...theme,
		});
	}, [themeState]);

	const themeContext = useMemo(() => ({
		theme: themeState,
		setTheme,
	}), [themeState, setTheme]);

	return (
		<ThemeContext.Provider value={themeContext}>
			<ThemeCss>
				{children}
			</ThemeCss>
		</ThemeContext.Provider>
	);
};
