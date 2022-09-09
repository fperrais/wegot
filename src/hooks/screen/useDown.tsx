import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useDown = (key: Breakpoint) => {
	const theme = useTheme();

	return useMediaQuery(theme.breakpoints.down(key));
};
