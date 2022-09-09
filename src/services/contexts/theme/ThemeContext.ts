import { createContext } from 'react';

import { defaultTheme, ITheme } from '../../../themes/ITheme';


interface IThemeContext {
	theme: ITheme,
	setTheme: (theme: Partial<ITheme>) => void,
}

export const ThemeContext = createContext<IThemeContext>({
	theme: defaultTheme,
	setTheme: () => {
		// Nothing here.
	},
});
