import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useOnly = (key: Breakpoint) => {
	const theme = useTheme();

	return useMediaQuery(theme.breakpoints.only(key));
};
