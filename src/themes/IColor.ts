import common from '@mui/material/colors/common';

export const defaultColor: IColor = {
	primary: {
		main: '#237797',
		light: '#237797',
		dark: '#237797',
		contrastText: common.white,
	},
	secondary: {
		main: '#FA5252',
		light: '#FA5252',
		dark: '#FA5252',
		contrastText: common.white,
	},
};

export interface IColor {
	primary: {
		main: string,
		light: string,
		dark: string,
		contrastText: string,
	},
	secondary: {
		main: string,
		light: string,
		dark: string,
		contrastText: string,
	},
}
