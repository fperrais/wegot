import { defaultColor, IColor } from './IColor';


export interface ITheme {
	color: IColor,
	darkMode: boolean,
}

export const defaultTheme: ITheme = {
	color: defaultColor,
	darkMode: false,
};
