import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useUp = (key: Breakpoint) => {
	const theme = useTheme();

	return useMediaQuery(theme.breakpoints.up(key));
};
