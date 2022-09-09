import { useCallback, useMemo, useState } from 'react';

import { ThemeContext } from '../../../services/contexts/theme/ThemeContext';
import { ITheme } from '../../../themes/ITheme';
import { defaultThemeMock } from '../data/themeMock';

export interface IMockThemeProviderProps {
	mockTheme?: ITheme,
	setThemeSpy?: (newTheme: ITheme) => void,
}
interface IMockThemeProviderWithChildrenProps extends IMockThemeProviderProps{
	children: React.ReactNode,
}

export const MockThemeProvider = ({
	children,
	mockTheme = defaultThemeMock,
	setThemeSpy,
}: IMockThemeProviderWithChildrenProps) => {
	const [theme, setTheme] = useState(mockTheme);

	const handleSetTheme = useCallback((dispatchedTheme: Partial<ITheme>) => {
		const updatedTheme = {
			...theme,
			...dispatchedTheme,
		};

		setTheme(updatedTheme);
		if (setThemeSpy) {
			setThemeSpy(updatedTheme);
		}
	}, [setThemeSpy, theme]);

	const themeContext = useMemo(() => ({
		theme,
		setTheme: handleSetTheme,
	}), [theme, handleSetTheme]);

	return (
		<ThemeContext.Provider value={themeContext}>
			{children}
		</ThemeContext.Provider>
	);
};

