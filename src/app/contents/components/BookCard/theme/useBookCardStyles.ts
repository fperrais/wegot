import { createTheme } from '@mui/material';

import { makeStyles } from '../../../../../themes/makeStyles';

export const letterToColor = (background: string) => {
	const theme = createTheme();

	return theme.palette.getContrastText(background);
};


export const useBookCardStyles = makeStyles()((style) => ({
	card:	{
		width: '100%',
		opacity: 1,
		padding: style.theme.spacing(2),
		borderRadius: style.theme.spacing(2),
		// eslint-disable-next-line max-len
		boxShadow: '0 0 #000,0.3px 0.8px 1.1px rgba(187 187 187 / 0.11),0.5px 1.3px 1.8px -0.6px rgba(187 187 187 / 0.18),1.1px 2.7px 3.8px -1.2px rgba(187 187 187 / 0.26)',
		[style.theme.breakpoints.only('xs')]: {
			padding: style.theme.spacing(1),
		},
	},
	title: {
		color: '#272930',
	},
	subheader: {
		color: '#646872',
	},
	state: {
		width: 24,
		height: 24,
	},
	avatar: {
		background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
		color: '#fff',
	},
}));
