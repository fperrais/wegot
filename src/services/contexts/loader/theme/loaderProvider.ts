import { makeStyles } from '../../../../themes/makeStyles';

export const useStyles = makeStyles()(() => ({
	loader: {
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 1251,
		width: '100vw',
	},
	overlay: {
		zIndex: 20000,
		opacity: 0,
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
}));
