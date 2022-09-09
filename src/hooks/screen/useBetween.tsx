import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useBetween = (start: Breakpoint, end: Breakpoint) => {
	const theme = useTheme();

	return useMediaQuery(theme.breakpoints.between(
		start,
		end,
	));
};
