import { LinearProgress } from '@mui/material';

import { useStyles } from './theme/loaderProvider';

export const Loader = () => {
	const { classes } = useStyles();

	return (
		<>
			<div data-testid="loader" className={classes.overlay} tabIndex={-1} />
			<LinearProgress color="secondary" className={classes.loader} />
		</>
	);
};
