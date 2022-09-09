import { createMakeStyles } from 'tss-react';

import { useCurrentTheme } from './useCurrentTheme';


export const { makeStyles } = createMakeStyles({
	useTheme: useCurrentTheme,
});
