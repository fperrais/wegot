
import { Breakpoint, useMediaQuery } from '@mui/material';

import { useCurrentTheme } from '../themes/useCurrentTheme';

export const useUp = (key: Breakpoint) => {
	const { theme } = useCurrentTheme();

	return useMediaQuery(theme.breakpoints.up(key));
};

export const useOnly = (key: Breakpoint) => {
	const { theme } = useCurrentTheme();

	return useMediaQuery(theme.breakpoints.only(key));
};
