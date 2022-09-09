import { makeStyles } from '../../themes/makeStyles';

export const useStyles = makeStyles()((style) => ({
	flex: {
		display: 'flex',
	},
	mainbox: {
		width: '100%',
		maxWidth: 500,
		margin: 'auto',
		padding: style.theme.spacing(4),
		[style.theme.breakpoints.only('xs')]: {
			padding: style.theme.spacing(2),
			maxWidth: '80vw',
		},
	},
	logoBox: {
		textAlign: 'center',
	},
	logo: {
		width: '80%',
	},
}));
